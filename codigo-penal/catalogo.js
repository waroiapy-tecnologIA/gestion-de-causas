/* Acceso compartido al Código Penal. No escribe en Firestore sin llamar a sincronizar(). */
(function (global) {
    'use strict';

    const COLECCIONES = {
        meta: 'codigoPenalMeta',
        articulos: 'codigoPenalArticulos',
        leyes: 'codigoPenalLeyes',
        legacy: 'codigoPenalLegacy'
    };
    const estado = { data: null, fuente: 'sin-cargar', error: null, promesa: null };

    function copiar(valor) {
        return JSON.parse(JSON.stringify(valor));
    }

    function validar(data) {
        if (!data || !data.meta || !Array.isArray(data.articulos) || !Array.isArray(data.leyes)) {
            throw new Error('El catálogo no tiene una estructura válida.');
        }
        if (!data.articulos.length || data.articulos.length !== Number(data.meta.totalArticulos)) {
            throw new Error('El catálogo está incompleto: no coincide el total de artículos.');
        }
        const seleccionables = data.articulos.filter(a => a.seleccionable).length;
        if (seleccionables !== Number(data.meta.totalSeleccionables)) {
            throw new Error('El catálogo está incompleto: no coincide el total de hechos seleccionables.');
        }
        const ids = new Set();
        data.articulos.forEach(a => {
            if (!a.id || !a.numero || !a.label || !a.texto || ids.has(a.id)) {
                throw new Error('Hay artículos incompletos o duplicados.');
            }
            ids.add(a.id);
        });
        return data;
    }

    function local() {
        if (!global.CP_DATA) throw new Error('No está disponible el respaldo local del Código Penal.');
        return validar(copiar(global.CP_DATA));
    }

    function ordenarArticulos(a, b) {
        const na = parseInt(a.numero, 10), nb = parseInt(b.numero, 10);
        return na - nb || String(a.numero).localeCompare(String(b.numero), 'es');
    }

    async function leerRemoto(db) {
        if (!db) throw new Error('Firestore no está inicializado.');
        const [metaDoc, articulosSnap, leyesSnap, legacySnap] = await Promise.all([
            db.collection(COLECCIONES.meta).doc('catalogo').get(),
            db.collection(COLECCIONES.articulos).get(),
            db.collection(COLECCIONES.leyes).get(),
            db.collection(COLECCIONES.legacy).get()
        ]);
        if (!metaDoc.exists) throw new Error('El catálogo compartido todavía no fue sincronizado.');
        const legacy = {};
        legacySnap.forEach(doc => { legacy[doc.id] = doc.data(); });
        const data = {
            meta: metaDoc.data(),
            articulos: articulosSnap.docs.map(doc => doc.data()).sort(ordenarArticulos),
            leyes: leyesSnap.docs.map(doc => doc.data()),
            legacy
        };
        return validar(data);
    }

    function inicializar(db) {
        if (estado.data) return Promise.resolve(estado);
        if (estado.promesa) return estado.promesa;
        estado.promesa = leerRemoto(db).then(data => {
            estado.data = data;
            estado.fuente = 'firestore';
            estado.error = null;
            return estado;
        }).catch(error => {
            estado.data = local();
            estado.fuente = 'respaldo';
            estado.error = error;
            console.warn('Código Penal: se utiliza el respaldo local.', error);
            return estado;
        });
        return estado.promesa;
    }

    function crearConfig(data) {
        const hechos = {};
        data.articulos.forEach(articulo => {
            hechos[articulo.id] = Object.assign({}, articulo, {
                incisos: articulo.incisos || [],
                tipo: articulo.tipo || (articulo.incisos && articulo.incisos.length ? 'multiple' : 'ninguno')
            });
        });
        Object.keys(data.legacy || {}).forEach(id => {
            const historico = data.legacy[id];
            hechos[id] = Object.assign({}, historico, {
                id,
                legacy: true,
                seleccionable: false,
                incisos: historico.incisos || []
            });
        });
        return { hechos };
    }

    function esArticulo(hechoId, numero) {
        if (hechoId === numero || hechoId === 'art-' + numero) return true;
        const legacy = estado.data && estado.data.legacy;
        return !!(legacy && legacy[hechoId] && legacy[hechoId].numeroEquivalente === numero);
    }

    function normalizar(texto) {
        return String(texto || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    }

    async function sincronizar(db, opciones) {
        opciones = opciones || {};
        const data = local();
        const escrituras = [
            ...data.articulos.map(item => [COLECCIONES.articulos, item.id, item]),
            ...data.leyes.map(item => [COLECCIONES.leyes, item.id, item]),
            ...Object.keys(data.legacy || {}).map(id => [COLECCIONES.legacy, id, data.legacy[id]])
        ];
        const meta = Object.assign({}, data.meta, {
            totalLegacy: Object.keys(data.legacy || {}).length,
            sincronizadoEn: new Date().toISOString(),
            sincronizadoPor: opciones.userId || null
        });
        /* 278 escrituras en la versión actual: una transacción por lotes atómica. */
        if (escrituras.length + 1 > 450) throw new Error('El catálogo supera el límite seguro de sincronización por lote.');
        const batch = db.batch();
        escrituras.forEach(([coleccion, id, item]) => batch.set(db.collection(coleccion).doc(id), item));
        batch.set(db.collection(COLECCIONES.meta).doc('catalogo'), meta);
        await batch.commit();
        estado.data = Object.assign({}, data, { meta });
        estado.fuente = 'firestore';
        estado.error = null;
        return estado;
    }

    global.CodigoPenal = {
        COLECCIONES,
        inicializar,
        crearConfig,
        esArticulo,
        normalizar,
        sincronizar,
        validar,
        estado
    };
})(window);
