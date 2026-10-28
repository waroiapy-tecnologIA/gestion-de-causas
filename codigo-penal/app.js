(function () {
    'use strict';
    const data = CodigoPenal.validar(window.CP_DATA);
    const leyes = Object.fromEntries(data.leyes.map(ley => [ley.id, ley]));
    const state = { seleccionado: null, visibles: [] };
    const el = id => document.getElementById(id);

    function nodo(tag, clase, texto) {
        const item = document.createElement(tag);
        if (clase) item.className = clase;
        if (texto != null) item.textContent = texto;
        return item;
    }

    function enlace(url, clase, texto) {
        const a = nodo('a', clase, texto);
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        return a;
    }

    function filtrar() {
        const consulta = CodigoPenal.normalizar(el('cp-search').value).trim();
        const titulo = el('cp-title-filter').value;
        const soloSeleccionables = el('cp-selectable-filter').checked;
        const soloModificados = el('cp-modified-filter').checked;
        state.visibles = data.articulos.filter(a => {
            if (titulo && a.titulo !== titulo) return false;
            if (soloSeleccionables && !a.seleccionable) return false;
            if (soloModificados && !a.modificatorias.length) return false;
            if (!consulta) return true;
            const leyesTexto = a.modificatorias.map(id => leyes[id] ? leyes[id].nombre : '').join(' ');
            return CodigoPenal.normalizar([a.numero, a.nombre, a.label, a.texto, a.titulo, a.capitulo, leyesTexto].join(' ')).includes(consulta);
        });
        el('cp-results').textContent = `${state.visibles.length} de ${data.meta.totalArticulos} artículos y disposiciones`;
        renderizarLista();
    }

    function renderizarLista() {
        const lista = el('cp-article-list');
        lista.replaceChildren();
        if (!state.visibles.length) {
            lista.appendChild(nodo('p', 'cp-empty-list', 'No hay artículos que coincidan con los filtros.'));
            return;
        }
        state.visibles.forEach(a => {
            const boton = nodo('button', 'cp-list-item' + (state.seleccionado === a.id ? ' active' : ''));
            boton.type = 'button';
            boton.dataset.articulo = a.id;
            boton.appendChild(nodo('span', 'cp-list-number', `Artículo ${a.numero}`));
            boton.appendChild(nodo('span', 'cp-list-name', a.nombre));
            if (a.ultimaModificatoria && leyes[a.ultimaModificatoria]) {
                boton.appendChild(nodo('span', 'cp-list-mod', `Última mod.: ${leyes[a.ultimaModificatoria].nombre}`));
            }
            boton.addEventListener('click', () => seleccionar(a.id));
            lista.appendChild(boton);
        });
    }

    function badge(texto, clase, icono) {
        const span = nodo('span', 'cp-pill ' + (clase || ''));
        if (icono) {
            const i = nodo('i', icono);
            span.appendChild(i);
        }
        span.appendChild(document.createTextNode(texto));
        return span;
    }

    function renderizarArticulo(a) {
        const raiz = el('cp-article');
        raiz.replaceChildren();
        const head = nodo('header', 'cp-article-head');
        head.appendChild(nodo('div', 'cp-eyebrow', [a.libro, a.titulo, a.capitulo].filter(Boolean).join(' · ')));
        head.appendChild(nodo('h2', 'cp-article-title', `Artículo ${a.numero}.- ${a.nombre}`));
        const badges = nodo('div', 'cp-badges');
        badges.appendChild(badge(a.seleccionable ? 'Hecho punible seleccionable' : 'Norma auxiliar o disposición', a.seleccionable ? 'green' : '', 'fas fa-circle-check'));
        if (a.ultimaModificatoria && leyes[a.ultimaModificatoria]) {
            badges.appendChild(badge(`Última modificatoria: ${leyes[a.ultimaModificatoria].nombre}`, 'gold', 'fas fa-file-signature'));
        } else {
            badges.appendChild(badge('Texto sin modificatorias asociadas', '', 'fas fa-file-lines'));
        }
        head.appendChild(badges);

        const body = nodo('div', 'cp-article-body');
        const texto = nodo('section');
        const tituloTexto = nodo('h3', 'cp-section-title');
        tituloTexto.appendChild(nodo('i', 'fas fa-book-open'));
        tituloTexto.appendChild(document.createTextNode('Texto vigente consolidado'));
        texto.appendChild(tituloTexto);
        const legal = nodo('div', 'cp-legal-text');
        String(a.texto).split(/\n\s*\n/).forEach(parrafo => legal.appendChild(nodo('p', '', parrafo)));
        texto.appendChild(legal);

        const meta = nodo('aside', 'cp-meta');
        const mods = nodo('section', 'cp-meta-box');
        mods.appendChild(nodo('h3', '', 'Leyes y modificatorias'));
        const listaLeyes = nodo('ul', 'cp-law-list');
        const idsLeyes = ['ley-1160', ...a.modificatorias.filter(id => id !== 'ley-1160')];
        idsLeyes.forEach((id, index) => {
            const ley = leyes[id];
            if (!ley) return;
            const item = nodo('li', id === a.ultimaModificatoria ? 'latest' : '');
            item.appendChild(enlace(ley.fuente, 'cp-law-link', ley.nombre + (index === 0 ? ' · Ley base' : '')));
            item.appendChild(nodo('span', 'cp-law-desc', ley.descripcion));
            listaLeyes.appendChild(item);
        });
        mods.appendChild(listaLeyes);

        const fuente = nodo('section', 'cp-meta-box');
        fuente.appendChild(nodo('h3', '', 'Fuente del texto'));
        fuente.appendChild(nodo('p', '', a.fuenteTexto.nombre));
        fuente.appendChild(nodo('p', '', `Página ${a.fuenteTexto.pagina} · Revisión normativa: ${a.revisionNormativa}`));
        fuente.appendChild(enlace(a.fuenteTexto.url, 'cp-source-link', 'Abrir fuente oficial en la página citada'));
        meta.appendChild(mods);
        meta.appendChild(fuente);
        body.appendChild(texto);
        body.appendChild(meta);
        head.appendChild(badges);
        raiz.appendChild(head);
        raiz.appendChild(body);
    }

    function seleccionar(id, actualizarHash) {
        const a = data.articulos.find(item => item.id === id);
        if (!a) return;
        state.seleccionado = id;
        renderizarArticulo(a);
        renderizarLista();
        if (actualizarHash !== false) history.replaceState(null, '', `#articulo=${encodeURIComponent(id)}`);
        if (window.innerWidth < 951) el('cp-article').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function iniciar() {
        el('cp-edicion').textContent = `Edición base: ${data.meta.edicionBase} · Revisión: ${data.meta.revisionNormativa} · ${data.meta.totalSeleccionables} hechos seleccionables`;
        const titulos = [...new Set(data.articulos.map(a => a.titulo).filter(Boolean))];
        titulos.forEach(titulo => {
            const option = nodo('option', '', titulo);
            option.value = titulo;
            el('cp-title-filter').appendChild(option);
        });
        ['cp-search', 'cp-title-filter', 'cp-selectable-filter', 'cp-modified-filter'].forEach(id => {
            el(id).addEventListener(id === 'cp-search' ? 'input' : 'change', filtrar);
        });
        document.addEventListener('keydown', event => {
            if (event.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
                event.preventDefault();
                el('cp-search').focus();
            }
        });
        window.addEventListener('hashchange', () => {
            const destino = new URLSearchParams(location.hash.replace(/^#/, '')).get('articulo');
            if (data.articulos.some(a => a.id === destino)) seleccionar(destino, false);
        });
        const id = new URLSearchParams(location.hash.replace(/^#/, '')).get('articulo');
        state.seleccionado = data.articulos.some(a => a.id === id) ? id : data.articulos[0].id;
        filtrar();
        renderizarArticulo(data.articulos.find(a => a.id === state.seleccionado));
    }

    iniciar();
})();