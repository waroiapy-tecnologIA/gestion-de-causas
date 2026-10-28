/* codigo-penal/datos/catalogo.js — Catálogo de PRUEBA (4 artículos) */
window.CP_DATA = {
    meta: {
        version: 'prueba-2026.10.27',
        edicionBase: 'Prueba — CSJ mayo 2025',
        revisionNormativa: '2026-10-27',
        totalArticulos: 4,
        totalSeleccionables: 4,
        fuentePrincipal: 'https://www.pj.gov.py/ebook/libros_files/coleccion-derecho-penal.pdf',
        fuenteBase: 'https://www.bacn.gov.py/leyes-paraguayas/3497/ley-n-1160-1997-c-digo-penal'
    },
    leyes: [
        { id: 'ley-1160', numero: '1160', anio: 1997, nombre: 'Ley Nº 1160/1997', descripcion: 'Código Penal', estado: 'vigente', fuente: 'https://www.bacn.gov.py/leyes-paraguayas/3497/ley-n-1160-1997-c-digo-penal' },
        { id: 'ley-3440', numero: '3440', anio: 2008, nombre: 'Ley Nº 3440/2008', descripcion: 'Modifica varias disposiciones del Código Penal', estado: 'vigente', fuente: 'https://www.bacn.gov.py/leyes-paraguayas/3485/ley-n-3440-modifica-varias-disposiciones-de-la-ley-n-116097-codigo-penal' },
        { id: 'ley-7394', numero: '7394', anio: 2024, nombre: 'Ley Nº 7394/2024', descripcion: 'Modifica los artículos 128 y 135', estado: 'vigente', fuente: 'https://www.csj.gov.py/cache/lederes/G-266-2612024-L-7394.pdf' },
        { id: 'ley-6934', numero: '6934', anio: 2022, nombre: 'Ley Nº 6934/2022', descripcion: 'Modifica el artículo 229 (violencia familiar)', estado: 'vigente', fuente: 'https://www.bacn.gov.py/leyes-paraguayas/10525/ley-n-6934-modifica-el-articulo-229-de-la-ley-n-11601997-codigo-penal-modificado-por-las-leyes-ns-34402008-46282012-y-53782014' }
    ],
    articulos: [
        {
            id: 'art-105a', numero: '105a', nombre: 'Homicidio doloso', pagina: 91,
            titulo: 'HECHOS PUNIBLES CONTRA LA PERSONA', capitulo: 'HECHOS PUNIBLES CONTRA LA VIDA',
            texto: '1º El que matara a otro será castigado con pena privativa de libertad de cinco a veinte años.\n\n2º La pena podrá ser aumentada hasta treinta años cuando el autor:\n\n1. matara a su padre o madre, a su hijo, a su cónyuge o concubino, o a su hermano;\n2. con su acción pusiera en peligro inmediato la vida de terceros;\n3. al realizar el hecho sometiera a la víctima a graves e innecesarios dolores físicos o síquicos, para aumentar su sufrimiento;\n4. actuara en forma alevosa, aprovechando intencionalmente la indefensión de la víctima;\n5. el que actuara por sí y por cuenta propia con ánimo de lucro;\n6. actuara para facilitar un hecho punible o, en base a una decisión anterior a su realización, para ocultarlo o procurar la impunidad para sí o para otro;\n7. por el mero motivo de no haber logrado el fin propuesto al intentar otro hecho punible; o\n8. actuara intencionalmente y por el mero placer de matar.\n\n3º Se aplicará una pena privativa de libertad de hasta cinco años y se castigará también la tentativa, cuando:\n\n1. el reproche al autor sea considerablemente reducido por una excitación emotiva o por compasión, desesperación u otros motivos relevantes;\n2. una mujer matara a su hijo durante o inmediatamente después del parto.\n\n4º Cuando concurran los presupuestos del inciso 2º y del numeral 1 del inciso 3º, se aplicará una pena privativa de libertad de hasta diez años.',
            incisos: [
                { numero: 1, texto: 'El que matara a otro será castigado con pena privativa de libertad de cinco a veinte años.', numerales: [], id: 'art-105a-1', label: '1° El que matara a otro será castigado con pena privativa de libertad de cinco a veinte años.' },
                { numero: 2, texto: 'La pena podrá ser aumentada hasta treinta años cuando el autor:', numerales: [
                    { numero: 1, texto: 'matara a su padre o madre, a su hijo, a su cónyuge o concubino, o a su hermano;', id: 'art-105a-2-1', label: '1. matara a su padre o madre, a su hijo, a su cónyuge o concubino, o a su hermano;' },
                    { numero: 2, texto: 'con su acción pusiera en peligro inmediato la vida de terceros;', id: 'art-105a-2-2', label: '2. con su acción pusiera en peligro inmediato la vida de terceros;' },
                    { numero: 3, texto: 'al realizar el hecho sometiera a la víctima a graves e innecesarios dolores físicos o síquicos, para aumentar su sufrimiento;', id: 'art-105a-2-3', label: '3. al realizar el hecho sometiera a la víctima a graves e innecesarios dolores físicos o síquicos, para aumentar su sufrimiento;' },
                    { numero: 4, texto: 'actuara en forma alevosa, aprovechando intencionalmente la indefensión de la víctima;', id: 'art-105a-2-4', label: '4. actuara en forma alevosa, aprovechando intencionalmente la indefensión de la víctima;' },
                    { numero: 5, texto: 'el que actuara por sí y por cuenta propia con ánimo de lucro;', id: 'art-105a-2-5', label: '5. el que actuara por sí y por cuenta propia con ánimo de lucro;' },
                    { numero: 6, texto: 'actuara para facilitar un hecho punible o, en base a una decisión anterior a su realización, para ocultarlo o procurar la impunidad para sí o para otro;', id: 'art-105a-2-6', label: '6. actuara para facilitar un hecho punible o, en base a una decisión anterior a su realización, para ocultarlo o procurar la impunidad para sí o para otro;' },
                    { numero: 7, texto: 'por el mero motivo de no haber logrado el fin propuesto al intentar otro hecho punible; o', id: 'art-105a-2-7', label: '7. por el mero motivo de no haber logrado el fin propuesto al intentar otro hecho punible; o' },
                    { numero: 8, texto: 'actuara intencionalmente y por el mero placer de matar.', id: 'art-105a-2-8', label: '8. actuara intencionalmente y por el mero placer de matar.' }
                ], id: 'art-105a-2', label: '2° La pena podrá ser aumentada hasta treinta años cuando el autor:' },
                { numero: 3, texto: 'Se aplicará una pena privativa de libertad de hasta cinco años y se castigará también la tentativa, cuando:', numerales: [
                    { numero: 1, texto: 'el reproche al autor sea considerablemente reducido por una excitación emotiva o por compasión, desesperación u otros motivos relevantes;', id: 'art-105a-3-1', label: '1. el reproche al autor sea considerablemente reducido por una excitación emotiva o por compasión, desesperación u otros motivos relevantes;' },
                    { numero: 2, texto: 'una mujer matara a su hijo durante o inmediatamente después del parto.', id: 'art-105a-3-2', label: '2. una mujer matara a su hijo durante o inmediatamente después del parto.' }
                ], id: 'art-105a-3', label: '3° Se aplicará una pena privativa de libertad de hasta cinco años y se castigará también la tentativa, cuando:' },
                { numero: 4, texto: 'Cuando concurran los presupuestos del inciso 2º y del numeral 1 del inciso 3º, se aplicará una pena privativa de libertad de hasta diez años.', numerales: [], id: 'art-105a-4', label: '4° Cuando concurran los presupuestos del inciso 2º y del numeral 1 del inciso 3º, se aplicará una pena privativa de libertad de hasta diez años.' }
            ],
            label: 'Art. 105a – Homicidio doloso', tipo: 'multiple', seleccionable: true,
            libro: 'Libro Segundo — Parte Especial', vigente: true, leyBase: 'ley-1160',
            modificatorias: [], ultimaModificatoria: null,
            fuenteTexto: { nombre: 'CSJ — Código Penal actualizado y concordado, mayo 2025', url: 'https://www.pj.gov.py/ebook/libros_files/coleccion-derecho-penal.pdf#page=91', pagina: 91 },
            revisionNormativa: '2026-10-27'
        },
        {
            id: 'art-128', numero: '128', nombre: 'Coacción sexual y violación', pagina: 104,
            titulo: 'HECHOS PUNIBLES CONTRA LA PERSONA', capitulo: 'HECHOS PUNIBLES CONTRA LA AUTONOMÍA SEXUAL',
            texto: '1º El que, mediante fuerza o amenaza con peligro presente para la vida o la integridad física, coaccionara a otro a padecer en su persona actos sexuales, o a realizar tales actos en sí mismo o con terceros, será castigado con pena privativa de libertad de hasta diez años.\n\n2º Cuando la víctima haya sido violada, coaccionándosela al coito con el autor o con terceros, la pena privativa de libertad será de tres a doce años.\n\n3º Cuando la víctima del coito haya sido una persona no menor de catorce años ni mayor de edad, la pena privativa de libertad será de tres a quince años.\n\n4º La pena podrá ser atenuada con arreglo al artículo 67 cuando de la relación de la víctima con el autor surgieren considerables circunstancias que lo ameriten.\n\n5º A los efectos de esta Ley se entenderán como:\n\n1. actos sexuales, aquellos que sean manifiestamente relevantes contra la autonomía sexual, o tratándose de niños, la indemnidad sexual;\n2. actos sexuales realizados ante otro, aquellos en el sentido del numeral anterior que el otro percibiera a través de sus sentidos;\n3. el coito, el acceso carnal por vía vaginal, anal o bucal, o la introducción de miembros corporales u objetos por alguna de las dos primeras vías.',
            incisos: [
                { numero: 1, texto: 'El que, mediante fuerza o amenaza con peligro presente para la vida o la integridad física, coaccionara a otro a padecer en su persona actos sexuales, o a realizar tales actos en sí mismo o con terceros, será castigado con pena privativa de libertad de hasta diez años.', numerales: [], id: 'art-128-1', label: '1° El que, mediante fuerza o amenaza con peligro presente para la vida o la integridad física, coaccionara a otro a padecer en su persona actos sexuales, o a realizar tales actos en sí mismo o con terceros, será castigado con pena privativa de libertad de hasta diez años.' },
                { numero: 2, texto: 'Cuando la víctima haya sido violada, coaccionándosela al coito con el autor o con terceros, la pena privativa de libertad será de tres a doce años.', numerales: [], id: 'art-128-2', label: '2° Cuando la víctima haya sido violada, coaccionándosela al coito con el autor o con terceros, la pena privativa de libertad será de tres a doce años.' },
                { numero: 3, texto: 'Cuando la víctima del coito haya sido una persona no menor de catorce años ni mayor de edad, la pena privativa de libertad será de tres a quince años.', numerales: [], id: 'art-128-3', label: '3° Cuando la víctima del coito haya sido una persona no menor de catorce años ni mayor de edad, la pena privativa de libertad será de tres a quince años.' },
                { numero: 4, texto: 'La pena podrá ser atenuada con arreglo al artículo 67 cuando de la relación de la víctima con el autor surgieren considerables circunstancias que lo ameriten.', numerales: [], id: 'art-128-4', label: '4° La pena podrá ser atenuada con arreglo al artículo 67 cuando de la relación de la víctima con el autor surgieren considerables circunstancias que lo ameriten.' },
                { numero: 5, texto: 'A los efectos de esta Ley se entenderán como:', numerales: [
                    { numero: 1, texto: 'actos sexuales, aquellos que sean manifiestamente relevantes contra la autonomía sexual, o tratándose de niños, la indemnidad sexual;', id: 'art-128-5-1', label: '1. actos sexuales, aquellos que sean manifiestamente relevantes contra la autonomía sexual, o tratándose de niños, la indemnidad sexual;' },
                    { numero: 2, texto: 'actos sexuales realizados ante otro, aquellos en el sentido del numeral anterior que el otro percibiera a través de sus sentidos;', id: 'art-128-5-2', label: '2. actos sexuales realizados ante otro, aquellos en el sentido del numeral anterior que el otro percibiera a través de sus sentidos;' },
                    { numero: 3, texto: 'el coito, el acceso carnal por vía vaginal, anal o bucal, o la introducción de miembros corporales u objetos por alguna de las dos primeras vías.', id: 'art-128-5-3', label: '3. el coito, el acceso carnal por vía vaginal, anal o bucal, o la introducción de miembros corporales u objetos por alguna de las dos primeras vías.' }
                ], id: 'art-128-5', label: '5° A los efectos de esta Ley se entenderán como:' }
            ],
            label: 'Art. 128 – Coacción sexual y violación', tipo: 'multiple', seleccionable: true,
            libro: 'Libro Segundo — Parte Especial', vigente: true, leyBase: 'ley-1160',
            modificatorias: ['ley-3440', 'ley-7394'], ultimaModificatoria: 'ley-7394',
            fuenteTexto: { nombre: 'CSJ — Código Penal actualizado y concordado, mayo 2025', url: 'https://www.pj.gov.py/ebook/libros_files/coleccion-derecho-penal.pdf#page=104', pagina: 104 },
            revisionNormativa: '2026-10-27'
        },
        {
            id: 'art-161', numero: '161', nombre: 'Hurto', pagina: 128,
            titulo: 'HECHOS PUNIBLES CONTRA LOS BIENES DE LA PERSONA', capitulo: 'HECHOS PUNIBLES CONTRA LA PROPIEDAD DE LOS OBJETOS Y OTROS DERECHOS PATRIMONIALES',
            texto: '1º El que con la intención de apropiarse de una cosa mueble ajena, la sustrajera de la posesión de otro, será castigado con pena privativa de libertad de hasta cinco años o con multa.\n\n2º En estos casos, será castigada también la tentativa.',
            incisos: [
                { numero: 1, texto: 'El que con la intención de apropiarse de una cosa mueble ajena, la sustrajera de la posesión de otro, será castigado con pena privativa de libertad de hasta cinco años o con multa.', numerales: [], id: 'art-161-1', label: '1° El que con la intención de apropiarse de una cosa mueble ajena, la sustrajera de la posesión de otro, será castigado con pena privativa de libertad de hasta cinco años o con multa.' },
                { numero: 2, texto: 'En estos casos, será castigada también la tentativa.', numerales: [], id: 'art-161-2', label: '2° En estos casos, será castigada también la tentativa.' }
            ],
            label: 'Art. 161 – Hurto', tipo: 'multiple', seleccionable: true,
            libro: 'Libro Segundo — Parte Especial', vigente: true, leyBase: 'ley-1160',
            modificatorias: [], ultimaModificatoria: null,
            fuenteTexto: { nombre: 'CSJ — Código Penal actualizado y concordado, mayo 2025', url: 'https://www.pj.gov.py/ebook/libros_files/coleccion-derecho-penal.pdf#page=128', pagina: 128 },
            revisionNormativa: '2026-10-27'
        },
        {
            id: 'art-229', numero: '229', nombre: 'Violencia familiar', pagina: 176,
            titulo: 'HECHOS PUNIBLES CONTRA LA CONVIVENCIA DE LAS PERSONAS', capitulo: 'HECHOS PUNIBLES CONTRA EL ESTADO CIVIL, EL MATRIMONIO Y LA FAMILIA',
            texto: '1º El que, aprovechándose del ámbito familiar, ejerciera actos de violencia física o psicológica sobre:\n\n1. Quien sea o hubiese sido su cónyuge, concubino, pareja sentimental, o contra quién se hubiese negado a restablecer una relación de pareja.\n2. Sus parientes hasta el cuarto grado de consanguinidad, segundo de afinidad o por adopción, será castigado con pena privativa de libertad de uno a seis años.\n\nSe entenderá por "Ámbito Familiar" a los efectos de este artículo, a los parientes sean por consanguinidad o por afinidad, al cónyuge o conviviente y a la pareja sentimental. Este vínculo incluye a las relaciones vigentes o finalizadas, no siendo requisito la convivencia.\n\n2º Igual pena se impondrá al que ejerciera los mismos actos sobre:\n\n1. El niño, niña o adolescente con quien conviva y esté bajo su guarda o tutela sin vínculo de parentesco o en abrigo.\n2. La persona bajo su curatela con quien conviva.\n3. La persona adulta mayor o con discapacidad, con quien conviva en un ámbito familiar, sin que exista vínculo de parentesco.\n\n3º La pena podrá ser aumentada hasta ocho años:\n\n1. Cuando el autor fuese reincidente o hubiese tenido una salida alternativa que implique reconocimiento del mismo hecho punible.\n2. Cuando el acto de violencia se realizare en contra de niños, niñas y adolescentes o en su presencia.\n3. Cuando el autor utilizara un arma u otro instrumento para ejercer violencia física o psicológica contra la víctima.\n4. Cuando los actos tengan lugar en el domicilio común o en el domicilio de la víctima.\n\n4º Cuando los actos de violencia física pudieran configurarse como lesiones graves, se aplicará la pena privativa de libertad prevista en el artículo 112 inciso 1º del Código Penal.',
            incisos: [
                { numero: 1, texto: 'El que, aprovechándose del ámbito familiar, ejerciera actos de violencia física o psicológica sobre:', numerales: [
                    { numero: 1, texto: 'Quien sea o hubiese sido su cónyuge, concubino, pareja sentimental, o contra quién se hubiese negado a restablecer una relación de pareja.', id: 'art-229-1-1', label: '1. Quien sea o hubiese sido su cónyuge, concubino, pareja sentimental, o contra quién se hubiese negado a restablecer una relación de pareja.' },
                    { numero: 2, texto: 'Sus parientes hasta el cuarto grado de consanguinidad, segundo de afinidad o por adopción, será castigado con pena privativa de libertad de uno a seis años.', id: 'art-229-1-2', label: '2. Sus parientes hasta el cuarto grado de consanguinidad, segundo de afinidad o por adopción, será castigado con pena privativa de libertad de uno a seis años.' }
                ], id: 'art-229-1', label: '1° El que, aprovechándose del ámbito familiar, ejerciera actos de violencia física o psicológica sobre:' },
                { numero: 2, texto: 'Igual pena se impondrá al que ejerciera los mismos actos sobre:', numerales: [
                    { numero: 1, texto: 'El niño, niña o adolescente con quien conviva y esté bajo su guarda o tutela sin vínculo de parentesco o en abrigo.', id: 'art-229-2-1', label: '1. El niño, niña o adolescente con quien conviva y esté bajo su guarda o tutela sin vínculo de parentesco o en abrigo.' },
                    { numero: 2, texto: 'La persona bajo su curatela con quien conviva.', id: 'art-229-2-2', label: '2. La persona bajo su curatela con quien conviva.' },
                    { numero: 3, texto: 'La persona adulta mayor o con discapacidad, con quien conviva en un ámbito familiar, sin que exista vínculo de parentesco.', id: 'art-229-2-3', label: '3. La persona adulta mayor o con discapacidad, con quien conviva en un ámbito familiar, sin que exista vínculo de parentesco.' }
                ], id: 'art-229-2', label: '2° Igual pena se impondrá al que ejerciera los mismos actos sobre:' },
                { numero: 3, texto: 'La pena podrá ser aumentada hasta ocho años:', numerales: [
                    { numero: 1, texto: 'Cuando el autor fuese reincidente o hubiese tenido una salida alternativa que implique reconocimiento del mismo hecho punible.', id: 'art-229-3-1', label: '1. Cuando el autor fuese reincidente o hubiese tenido una salida alternativa que implique reconocimiento del mismo hecho punible.' },
                    { numero: 2, texto: 'Cuando el acto de violencia se realizare en contra de niños, niñas y adolescentes o en su presencia.', id: 'art-229-3-2', label: '2. Cuando el acto de violencia se realizare en contra de niños, niñas y adolescentes o en su presencia.' },
                    { numero: 3, texto: 'Cuando el autor utilizara un arma u otro instrumento para ejercer violencia física o psicológica contra la víctima.', id: 'art-229-3-3', label: '3. Cuando el autor utilizara un arma u otro instrumento para ejercer violencia física o psicológica contra la víctima.' },
                    { numero: 4, texto: 'Cuando los actos tengan lugar en el domicilio común o en el domicilio de la víctima.', id: 'art-229-3-4', label: '4. Cuando los actos tengan lugar en el domicilio común o en el domicilio de la víctima.' }
                ], id: 'art-229-3', label: '3° La pena podrá ser aumentada hasta ocho años:' },
                { numero: 4, texto: 'Cuando los actos de violencia física pudieran configurarse como lesiones graves, se aplicará la pena privativa de libertad prevista en el artículo 112 inciso 1º del Código Penal.', numerales: [], id: 'art-229-4', label: '4° Cuando los actos de violencia física pudieran configurarse como lesiones graves, se aplicará la pena privativa de libertad prevista en el artículo 112 inciso 1º del Código Penal.' }
            ],
            label: 'Art. 229 – Violencia familiar', tipo: 'multiple', seleccionable: true,
            libro: 'Libro Segundo — Parte Especial', vigente: true, leyBase: 'ley-1160',
            modificatorias: ['ley-3440', 'ley-6934'], ultimaModificatoria: 'ley-6934',
            fuenteTexto: { nombre: 'CSJ — Código Penal actualizado y concordado, mayo 2025', url: 'https://www.pj.gov.py/ebook/libros_files/coleccion-derecho-penal.pdf#page=176', pagina: 176 },
            revisionNormativa: '2026-10-27'
        }
    ],
    legacy: {}
};