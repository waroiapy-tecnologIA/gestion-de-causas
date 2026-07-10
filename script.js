// ============================================================
// CONFIGURACIÓN DE HECHOS PUNIBLES CON INCISOS Y NUMERALES
// ============================================================
const CONFIG = {
    hechos: {
        '128': {
            label: 'Art. 128 – Coacción sexual y violación',
            modificaciones: [{ ley: 'Ley Nº 7394/2024', fecha: '2024', descripcion: 'Modificación integral del artículo 128.' }],
            incisos: [
                { id: '128-1', label: '1° El que, mediante fuerza o amenaza con peligro presente para la vida o la integridad física, coaccionara a otro a padecer en su persona actos sexuales, o a realizar tales actos en sí mismo o con terceros, será castigado con pena privativa de libertad de hasta diez años.' },
                { id: '128-2', label: '2° Cuando la víctima haya sido violada, coaccionándosela al coito con el autor o con terceros, la pena privativa de libertad será de tres a doce años.' },
                { id: '128-3', label: '3° Cuando la victima del coito haya sido una persona no menor de catorce años ni mayor de edad, la pena privativa de libertad será de tres a quince años.' },
                { id: '128-4', label: '4° La pena podrá ser atenuada con arreglo al artículo 67 de la Ley N° 1160/1997 “CODIGO PENAL”, cuando de la relación de la víctima con el autor, surgieren considerables circunstancias que lo ameriten.' },
                {
                    id: '128-5',
                    label: '5° A los efectos de la presente ley se entenderán como:',
                    numerales: [
                        { id: '128-5-1', label: '1. actos sexuales, aquellos que sean manifiestamente relevantes contra la autonomía sexual, o tratándose de niños, la indemnidad sexual;' },
                        { id: '128-5-2', label: '2. actos sexuales realizados ante otro, aquellos en el sentido del numeral anterior que el otro percibiera a través de sus sentidos:' },
                        { id: '128-5-3', label: '3. coito, el acceso carnal por vía vaginal, anal o bucal, o la introducción de miembros corporales u objetos por alguna de las dos primeras vías.' }
                    ]
                }
            ],
            tipo: 'multiple',
            texto: 'Artículo 128.- Coacción sexual y violación. (Texto según Ley Nº 7394/2024)'
        },
        '135': {
            label: 'Art. 135 – Abuso sexual en niños',
            modificaciones: [{ ley: 'Ley Nº 7394/2024', fecha: '2024', descripcion: 'Modificación integral del artículo 135.' }],
            incisos: [
                { id: '135-1', label: '1° El que realizara actos sexuales con un niño, o lo indujera a realizarlos en sí mismo o a terceros, será castigado con pena privativa de libertad de cinco a dieciocho años. Con la misma pena será castigado el que realizara actos sexuales manifiestamente relevantes ante un niño y dirigidos a él, o lo indujera a realizarlos ante sí o ante terceros.' },
                {
                    id: '135-2',
                    label: '2° En los casos señalados en el inciso anterior, la pena privativa de libertad será de diez a veinte años cuando el autor:',
                    numerales: [
                        { id: '135-2-1', label: '1. al realizar el hecho haya maltratado físicamente o psicológicamente a la víctima;' },
                        { id: '135-2-2', label: '2. haya abusado de la víctima en más de una ocasión;' },
                        { id: '135-2-3', label: '3. haya cometido el hecho con un niño que sea su hijo biológico, adoptivo o hijastro, o con un niño de su entorno cercano o cuya educación, cuidado, protección, tutela o guarda esté a su cargo;' },
                        { id: '135-2-4', label: '4. haya cometido el hecho aprovechándose de una relación de superioridad o de la afinidad en la familia o del estado de vulnerabilidad de la víctima;' },
                        { id: '135-2-5', label: '5. haya realizado el hecho con una o más personas;' },
                        { id: '135-2-6', label: '6. haya filmado, fotografiado o registrado el hecho por cualquier medio;' },
                        { id: '135-2-7', label: '7. haya suministrado a la víctima sustancias tóxicas, estupefacientes o alcohol;' },
                        { id: '135-2-8', label: '8. haya empleado armas o medios que pongan en riesgo la vida de la víctima.' }
                    ]
                },
                { id: '135-3', label: '3° Cuando concurra más de una circunstancia de las señaladas en el inciso 2°, el autor será castigado con pena privativa de libertad de quince a veinticinco años.' },
                { id: '135-4', label: '4° En los casos señalados en el inciso 1°, la pena privativa de libertad no será menor de quince años cuando el autor haya realizado el coito con la víctima. En caso de que la víctima sea menor de diez años, la pena no será menor de veinte años.' },
                {
                    id: '135-5',
                    label: '5° A los efectos de este artículo:',
                    numerales: [
                        { id: '135-5-1', label: '1. se entenderá por niño, a los efectos de este capítulo, la persona que no haya cumplido catorce años de edad;' },
                        { id: '135-5-2', label: '2. se entenderá por “entorno cercano”, a los efectos de este artículo, a los padres, padrastros, abuelos, abuelastros, hermanos, hermanastros, tíos, primos; así como a cualquier persona cuya educación, cuidado, protección, tutela o guarda del niño este a su cargo;' },
                        { id: '135-5-3', label: '3. se entenderá por “afinidad en la familia”, el vínculo estrecho y continuo que se manifiesta en la convivencia, cuidado, protección, relación afectiva que incluye a cualquier persona que frecuente el ámbito del niño, sea pariente o no.' }
                    ]
                },
                { id: '135-6', label: '6° A los autores del hecho se les aplicará penas complementarias y adicionales establecidas en los artículos 57 y 59 de la Ley N° 1160/1997 “CODIGO PENAL”.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 135.- Abuso sexual en niños. (Texto según Ley Nº 7394/2024)'
        },
        '135b': {
            label: 'Art. 135 b) – Abuso sexual por medios tecnológicos',
            modificaciones: [{ ley: 'Ley Nº 7394/2024', fecha: '2024', descripcion: 'Creación del artículo 135 b) sobre abuso sexual por medios tecnológicos.' }],
            incisos: [
                { id: '135b-1', label: '1° El que por cualquier medio electrónico de telecomunicaciones u otra tecnología de transmisión de datos, contacte con un niño y le proponga mantener o mantenga una comunicación de índole sexual o le solicite o exija de cualquier modo, que realice actos sexuales en sí mismo o con un tercero o que le envíe imagen o material audiovisual de sí mismo o de un tercero con contenido sexual, o facilite o muestre al niño material pornográfico, será castigado con pena privativa de libertad de tres a cinco años. La pena privativa de libertad será de tres a ocho años, cuando mediare coacción, intimidación o engaño.' },
                { id: '135b-2', label: '2° Cuando el autor proponga al niño concertar un encuentro o acercamiento físico a fin de realizar actos sexuales, sea con el autor, el niño en sí mismo o a un tercero, siempre que la propuesta se acompañe de actos materiales encaminados al acercamiento; la pena privativa de libertad será de tres a ocho años. La pena privativa de libertad será de cinco a diez años, cuando el acercamiento se obtenga mediante coacción, intimidación o engaño.' },
                { id: '135b-3', label: '3° Sera castigada también la tentativa.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 135 b).- Abuso sexual por medios tecnológicos. (Texto según Ley Nº 7394/2024)'
        },
        '137': {
            label: 'Art. 137 – Estupro',
            modificaciones: [],
            incisos: [],
            tipo: 'ninguno',
            texto: 'Artículo 137.- Estupro. El que, abusando de la inexperiencia o de la ignorancia de una persona mayor de catorce años y menor de dieciocho, la indujere a actos de significación sexual, será castigado con pena privativa de libertad de uno a cuatro años.'
        },
        '229': {
            label: 'Art. 229 – Violencia familiar',
            modificaciones: [{ ley: 'Ley Nº 6934/2022', fecha: '2022', descripcion: 'Modificación del artículo 229. Ampliación del ámbito familiar y agravantes.' }],
            incisos: [
                { id: '229-1', label: '1° El que, aprovechándose del ámbito familiar, ejerciera actos de violencia física o psicológica sobre: 1. Quien sea o hubiese sido su cónyuge, concubino, pareja sentimental, o contra quien se hubiese negado a restablecer una relación de pareja. 2. Sus parientes hasta el cuarto grado de consanguinidad, segundo de afinidad o por adopción, será castigado con pena privativa de libertad de uno a seis años. Se entenderá por “Ámbito Familiar” a los efectos de este artículo, a los parientes sean por consanguinidad o por afinidad, al cónyuge o conviviente y a la pareja sentimental. Este vínculo incluye a las relaciones vigentes o finalizadas, no siendo requisito la convivencia.' },
                { id: '229-2', label: '2° Igual pena se impondrá al que ejerciera los mismos actos sobre: 1. El niño, niña o adolescente con quien conviva y esté bajo su guarda o tutela sin vínculo de parentesco o en abrigo. 2. La persona bajo su curatela con quien conviva. 3. La persona adulta mayor o con discapacidad, con quien conviva en un ámbito familiar, sin que exista vínculo de parentesco.' },
                { id: '229-3', label: '3° La pena podrá ser aumentada hasta ocho años: 1. Cuando el autor fuese reincidente o hubiese tenido una salida alternativa que implique reconocimiento del mismo hecho punible. 2. Cuando el acto de violencia se realizare en contra de niños, niñas y adolescentes o en su presencia. 3. Cuando el autor utilizara un arma u otro instrumento para ejercer violencia física o psicológica contra la víctima. 4. Cuando los actos tengan lugar en el domicilio común o en el domicilio de la víctima.' },
                { id: '229-4', label: '4° Cuando los actos de violencia física pudieran configurarse como lesiones graves, se aplicará la pena correspondiente al Art. 112.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 229.- Violencia familiar. (Texto según Ley Nº 6934/2022)'
        },
        '225': {
            label: 'Art. 225 – Incumplimiento del deber legal alimentario',
            modificaciones: [],
            incisos: [
                { id: '225-1', label: 'Inciso 1 – Incumplimiento de deber legal (hasta 2 años)' },
                { id: '225-2', label: 'Inciso 2 – Incumplimiento de convenio judicial (hasta 5 años)' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 225.- Incumplimiento del deber legal alimentario. El que, pudiendo cumplir, no proveyere a la subsistencia de su cónyuge, concubino, ascendiente, descendiente o hermano, será castigado con pena privativa de libertad de uno a dos años. Si el incumplimiento afectare a un convenio judicial, la pena será de dos a cinco años.'
        },
        '166': {
            label: 'Art. 166 – Hurto',
            modificaciones: [],
            incisos: [
                { id: '166-1', label: '1° El que se apoderare de una cosa mueble ajena, sin la voluntad de su dueño, será castigado con pena privativa de libertad de uno a cinco años.' },
                { id: '166-2', label: '2° Si el valor de la cosa sustraída excediere de cuarenta jornales mínimos para actividades diversas no especificadas, la pena será de dos a seis años.' },
                { id: '166-3', label: '3° Si la cosa sustraída tuviere valor científico, histórico o artístico, la pena será de dos a cinco años.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 166.- Hurto. El que se apoderare de una cosa mueble ajena, sin la voluntad de su dueño, será castigado con pena privativa de libertad de uno a cinco años.'
        },
        '166ag': {
            label: 'Art. 166 – Hurto agravado',
            modificaciones: [],
            incisos: [
                { id: '166ag-1', label: '1° Con escalamiento (pena de 2 a 8 años).' },
                { id: '166ag-2', label: '2° Mediante fractura de paredes, techos o cerraduras (pena de 2 a 8 años).' },
                { id: '166ag-3', label: '3° Empleando llaves falsas o instrumentos para forzar cerraduras (pena de 2 a 8 años).' },
                { id: '166ag-4', label: '4° Utilizando a menores de edad para cometer el hecho (pena de 3 a 10 años).' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 166 (agravado).- Hurto agravado. Será castigado con pena privativa de libertad de dos a ocho años, el que cometiere hurto con escalamiento, fractura, empleo de llaves falsas o utilizando a menores de edad.'
        },
        '167': {
            label: 'Art. 167 – Robo',
            modificaciones: [],
            incisos: [
                { id: '167-1', label: '1° El que, mediante violencia o intimidación, se apoderare de una cosa mueble ajena, será castigado con pena privativa de libertad de dos a diez años.' },
                { id: '167-2', label: '2° Si como consecuencia de la violencia resultaren lesiones graves, la pena será de tres a doce años.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 167.- Robo. El que, mediante violencia o intimidación, se apoderare de una cosa mueble ajena, será castigado con pena privativa de libertad de dos a diez años.'
        },
        '168': {
            label: 'Art. 168 – Robo agravado',
            modificaciones: [],
            incisos: [
                { id: '168-1', label: '1° Con armas (pena de 5 a 15 años).' },
                { id: '168-2', label: '2° En banda (pena de 5 a 15 años).' },
                { id: '168-3', label: '3° Si resultare la muerte de la víctima (pena de 10 a 25 años).' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 168.- Robo agravado. Será castigado con pena privativa de libertad de cinco a quince años, el que cometiere robo con armas, en banda, o si resultare la muerte de la víctima.'
        },
        '111': {
            label: 'Art. 111 – Lesión grave',
            modificaciones: [],
            incisos: [
                { id: '111-1', label: '1° Deformidad (pena de 2 a 8 años).' },
                { id: '111-2', label: '2° Enfermedad incurable (pena de 2 a 8 años).' },
                { id: '111-3', label: '3° Pérdida de algún sentido, órgano o miembro (pena de 3 a 10 años).' },
                { id: '111-4', label: '4° Peligro para la vida (pena de 3 a 10 años).' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 111.- Lesión grave. Será castigado con pena privativa de libertad de dos a diez años, el que causare a otro una lesión que le produzca deformidad, enfermedad incurable, pérdida de algún sentido, órgano o miembro, o peligro para la vida.'
        },
        '105': {
            label: 'Art. 105 – Homicidio doloso',
            modificaciones: [],
            incisos: [
                { id: '105-1', label: '1° El que matare a otro será castigado con pena privativa de libertad de cinco a quince años.' },
                { id: '105-2', label: '2° Con alevosía o ensañamiento (pena de 10 a 25 años).' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 105.- Homicidio doloso. El que matare a otro será castigado con pena privativa de libertad de cinco a quince años.'
        },
        '106': {
            label: 'Art. 106 – Homicidio culposo',
            modificaciones: [],
            incisos: [
                { id: '106-1', label: '1° El que por imprudencia, negligencia, impericia en su arte o profesión, o inobservancia de los reglamentos, causare la muerte de otro, será castigado con pena privativa de libertad de uno a cinco años.' },
                { id: '106-2', label: '2° El plazo de inhabilitación será de uno a tres años.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 106.- Homicidio culposo. El que por imprudencia, negligencia, impericia en su arte o profesión, o inobservancia de los reglamentos, causare la muerte de otro, será castigado con pena privativa de libertad de uno a cinco años.'
        },
        '173': {
            label: 'Art. 173 – Estafa',
            modificaciones: [],
            incisos: [
                { id: '173-1', label: '1° El que, mediante engaño, se hiciere dar, recibiere o percibiere dinero, cosas o valores, o hiciere suscribir un documento que produzca algún efecto jurídico, será castigado con pena privativa de libertad de uno a cinco años.' },
                { id: '173-2', label: '2° Si la estafa se cometiere por medios informáticos o telemáticos, la pena será de dos a seis años.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 173.- Estafa. El que, mediante engaño, se hiciere dar, recibiere o percibiere dinero, cosas o valores, o hiciere suscribir un documento que produzca algún efecto jurídico, será castigado con pena privativa de libertad de uno a cinco años.'
        },
        '175': {
            label: 'Art. 175 – Apropiación',
            modificaciones: [],
            incisos: [
                { id: '175-1', label: '1° El que se apoderare de una cosa mueble ajena que le hubiere sido confiada en custodia, depósito o administración, será castigado con pena privativa de libertad de uno a cuatro años.' },
                { id: '175-2', label: '2° Si el valor de la cosa excediere de cuarenta jornales, la pena será de dos a seis años.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 175.- Apropiación. El que se apoderare de una cosa mueble ajena que le hubiere sido confiada en custodia, depósito o administración, será castigado con pena privativa de libertad de uno a cuatro años.'
        },
        '212': {
            label: 'Art. 212 – Producción de documentos públicos de contenido falso',
            modificaciones: [],
            incisos: [
                { id: '212-1', label: '1° El que, con el fin de hacerlos valer como auténticos, hiciere, en todo o en parte, un documento público falso, será castigado con pena privativa de libertad de dos a ocho años.' },
                { id: '212-2', label: '2° El que hiciere uso de un documento público falso será castigado con la misma pena.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 212.- Falsificación de documentos públicos. El que, con el fin de hacerlos valer como auténticos, hiciere, en todo o en parte, un documento público falso, será castigado con pena privativa de libertad de dos a ocho años.'
        },
        '126': {
            label: 'Art. 126 – Coacción',
            modificaciones: [],
            incisos: [
                { id: '126-1', label: '1° El que, mediante amenaza, forzare a otro a hacer, no hacer o tolerar algo, será castigado con pena privativa de libertad de uno a tres años.' },
                { id: '126-2', label: '2° Si la coacción se ejerciere mediante privación de libertad, la pena será de dos a cuatro años.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 126.- Coacción. El que, mediante amenaza, forzare a otro a hacer, no hacer o tolerar algo, será castigado con pena privativa de libertad de uno a tres años.'
        },
        '127': {
            label: 'Art. 127 – Coacción grave',
            modificaciones: [],
            incisos: [
                { id: '127-1', label: '1° Si la coacción se ejerciere mediante violencia física, la pena será de dos a cinco años.' }
            ],
            tipo: 'multiple',
            texto: 'Artículo 127.- Coacción grave. Si la coacción se ejerciere mediante violencia física, la pena será de dos a cinco años.'
        }
    }
};

// ============================================================
// DILIGENCIAS PARA CAUSAS DE ALIMENTOS (Art. 225)
// ============================================================
const DILIGENCIAS_ALIMENTOS = [
    { id: 'dil-testifical', label: 'Testifical (recabar info sobre causas o acuerdos anteriores)' },
    { id: 'dil-cert-nacimiento', label: 'Certificado de Nacimiento (Autenticado)' },
    { id: 'dil-oficio-trabajadora-social', label: 'Oficio Trabajadora Social' },
    { id: 'dil-oficio-banco', label: 'Oficiar al banco, información de depósitos' },
    { id: 'dil-calculo-liquidacion', label: 'Cálculo o Liquidación de deudas' },
    { id: 'dil-oficio-info-daie', label: 'Oficio Info DAIE' },
    { id: 'dil-oficio-dnit', label: 'Oficio DNIT' },
    { id: 'dil-oficio-seccion-estadisticas', label: 'Oficio a la Sección de Estadísticas' },
    { id: 'dil-oficio-ministerio-trabajo', label: 'Oficio Ministerio del Trabajo' },
    { id: 'dil-oficio-municipalidad', label: 'Oficio Municipalidad (Registro; Habilitación)' },
    { id: 'dil-oficio-automotores', label: 'Oficio Automotores' },
    { id: 'dil-oficio-ips', label: 'Oficio IPS' },
    { id: 'dil-oficio-incoop', label: 'Oficio INCOOP' },
    { id: 'dil-oficio-telefonias', label: 'Oficio Telefonías' },
    { id: 'dil-oficio-registros-publicos', label: 'Oficio Registros Públicos' },
    { id: 'dil-oficio-indagatoria', label: 'Oficio Indagatoria' }
];

// ============================================================
// PREGUNTAS PARA EL CUESTIONARIO DE RIESGO (Art. 229)
// ============================================================
const preguntasRiesgo = [
    { id: 'r1.1', label: '1.1 – Grado de relación con el supuesto agresor', opciones: [{ valor: 3, texto: 'Cónyuge/concubino/pareja' }, { valor: 3, texto: 'Ex cónyuge/ex concubino/ex pareja' }, { valor: 2, texto: 'Padres/padrastros, abuelos' }, { valor: 2, texto: 'Hijos/nietos' }, { valor: 1, texto: 'Hermanos/sobrinos' }, { valor: 1, texto: 'Tíos/primos' }, { valor: 0, texto: 'Otros' }] },
    { id: 'r1.2', label: '1.2 – ¿La víctima tiene personas a su cargo?', opciones: [{ valor: 3, texto: 'Sí, hijos menores/discapacitados' }, { valor: 2, texto: 'Sí, padres adultos mayores/discapacitados' }, { valor: 1, texto: 'Sí, otros familiares' }, { valor: 0, texto: 'No' }] },
    { id: 'r1.3', label: '1.3 – La víctima ha manifestado al supuesto agresor antes del hecho', opciones: [{ valor: 3, texto: 'Que piensa separarse de él o dejar la casa' }, { valor: 2, texto: 'Que lo ha denunciado o lo va a denunciar' }, { valor: 1, texto: 'Que ha solicitado medidas de protección o piensa solicitarla' }, { valor: 0, texto: 'No le ha manifestado nada' }] },
    { id: 'r1.4', label: '1.4 – La víctima ha tenido que salir de la casa', opciones: [{ valor: 3, texto: 'En una acción repentina (escape)' }, { valor: 2, texto: 'A la fuerza, expulsada por el agresor' }, { valor: 1, texto: 'Por amenaza o miedo al agresor' }, { valor: 0, texto: 'No ha salido de la casa' }] },
    { id: 'r2.1', label: '2.1 – ¿El supuesto agresor o conocidos han generado intimidación en la víctima?', opciones: [{ valor: 3, texto: 'Han amenazado, acosado o atentado recientemente' }, { valor: 2, texto: 'Han amenazado, acosado o atentado en el pasado (hasta 3 meses)' }, { valor: 1, texto: 'No han amenazado, pero tienen antecedentes' }, { valor: 0, texto: 'No tienen antecedentes de amenaza' }] },
    { id: 'r2.2', label: '2.2 – ¿Ha sido la víctima objeto de amenaza, acoso o atentado anteriormente?', opciones: [{ valor: 2, texto: 'Sí' }, { valor: 1, texto: 'No está seguro (dubitativo)' }, { valor: 0, texto: 'No' }] },
    { id: 'r2.3', label: '2.3 – ¿Han sido los familiares de la víctima objeto de amenaza, acoso o atentado?', opciones: [{ valor: 2, texto: 'Sí' }, { valor: 1, texto: 'No está seguro (dubitativo)' }, { valor: 0, texto: 'No' }] },
    { id: 'r2.4', label: '2.4 – El supuesto agresor ha retenido a la víctima contra su voluntad', opciones: [{ valor: 3, texto: 'Sí, varias veces' }, { valor: 2, texto: 'Sí, una vez' }, { valor: 1, texto: 'No, pero le ha dicho que lo haría' }, { valor: 0, texto: 'No' }] },
    { id: 'r3.1', label: '3.1 – El supuesto agresor acosó, controló o amedrentó sistemáticamente a la víctima', opciones: [{ valor: 3, texto: 'Sí, siempre' }, { valor: 2, texto: 'Sí, frecuentemente' }, { valor: 1, texto: 'Sí, a veces' }, { valor: 0, texto: 'No' }] },
    { id: 'r3.2', label: '3.2 – Historial de conductas violentas con una pareja anterior', opciones: [{ valor: 3, texto: 'Sí, con más de 3 casos' }, { valor: 2, texto: 'Sí, con más de 1 caso' }, { valor: 1, texto: 'Este es el primer caso' }, { valor: 0, texto: 'No' }] },
    { id: 'r3.3', label: '3.3 – Existencia de abuso sexual o físico contra hijos u otras personas menores de edad', opciones: [{ valor: 3, texto: 'Sí' }, { valor: 2, texto: 'Ha intentado realizarlo' }, { valor: 1, texto: 'Amenazó con realizarlo' }, { valor: 0, texto: 'No' }] },
    { id: 'r3.4', label: '3.4 – Historial de conductas previas de violencia contra otras personas no familiares', opciones: [{ valor: 3, texto: 'Sí, con más de 3 casos' }, { valor: 2, texto: 'Sí, con más de 1 caso' }, { valor: 1, texto: 'Este es el primer caso' }, { valor: 0, texto: 'No' }] },
    { id: 'r3.5', label: '3.5 – Acceso y conocimiento en el uso de armas de fuego', opciones: [{ valor: 3, texto: 'Conoce, usa y trabaja con ellas siempre' }, { valor: 2, texto: 'Conoce y usa armas frecuentemente' }, { valor: 1, texto: 'Cuenta con un arma, pero no la ha usado' }, { valor: 0, texto: 'No' }] },
    { id: 'r3.6', label: '3.6 – El supuesto agresor abusa de alcohol o drogas', opciones: [{ valor: 3, texto: 'Sí, siempre' }, { valor: 2, texto: 'Sí, frecuentemente' }, { valor: 1, texto: 'Sí, a veces' }, { valor: 0, texto: 'No' }] },
    { id: 'r3.7', label: '3.7 – Antecedentes psiquiátricos', opciones: [{ valor: 3, texto: 'Sí, fue internado varias veces y está medicado' }, { valor: 2, texto: 'Sí, fue internado' }, { valor: 1, texto: 'Sí, está medicado' }, { valor: 0, texto: 'No' }] },
    { id: 'r3.8', label: '3.8 – Intentó o amenazó con suicidarse cuando la víctima trató de apartarse', opciones: [{ valor: 3, texto: 'Sí, siempre' }, { valor: 2, texto: 'Sí, varias veces' }, { valor: 1, texto: 'Sí, en una ocasión' }, { valor: 0, texto: 'No' }] },
    { id: 'r3.9', label: '3.9 – Conductas frecuentes de crueldad, desprecio y falta de arrepentimiento', opciones: [{ valor: 3, texto: 'Sí, siempre' }, { valor: 2, texto: 'Sí, frecuentemente' }, { valor: 1, texto: 'Sí, a veces' }, { valor: 0, texto: 'No' }] },
    { id: 'r3.10', label: '3.10 – Menosprecio a las medidas de protección dictadas', opciones: [{ valor: 2, texto: 'Sí, varias veces' }, { valor: 1, texto: 'Sí, en una ocasión' }, { valor: 0, texto: 'No' }] },
    { id: 'r4.1', label: '4.1 – ¿Ha expresado la víctima temor a su seguridad o la de su familia?', opciones: [{ valor: 2, texto: 'Sí' }, { valor: 1, texto: 'No, pero parece estar nerviosa' }, { valor: 0, texto: 'No' }] },
    { id: 'r4.2', label: '4.2 – ¿Cómo describiría la conducta de la víctima?', opciones: [{ valor: 3, texto: 'Nerviosa, afectada emocionalmente, preocupada por el proceso' }, { valor: 2, texto: 'Tranquila pero muestra recelo' }, { valor: 1, texto: 'Tiene algunas preocupaciones' }, { valor: 0, texto: 'No manifiesta preocupaciones' }] },
    { id: 'r4.3', label: '4.3 – ¿La víctima tiene una buena red de ayuda?', opciones: [{ valor: 3, texto: 'No cuenta con red de ayuda o está aislada' }, { valor: 1, texto: 'Tiene algunas personas que puedan apoyarle' }, { valor: 0, texto: 'Cuenta con una red de personas' }] },
    { id: 'r4.4', label: '4.4 – Condiciones de vulnerabilidad (Reglas de Brasilia)', opciones: [{ valor: 2, texto: 'Reúne tres o más condiciones' }, { valor: 1, texto: 'Reúne una o más condiciones' }, { valor: 0, texto: 'No reúne condiciones' }] },
    { id: 'r4.5', label: '4.5 – Dependencia económica del agresor', opciones: [{ valor: 2, texto: 'Dependencia económica total' }, { valor: 1, texto: 'Dependencia económica parcial' }, { valor: 0, texto: 'No depende económicamente' }] },
    { id: 'r4.6', label: '4.6 – La víctima considera que el supuesto agresor es capaz de matarla', opciones: [{ valor: 2, texto: 'Sí' }, { valor: 1, texto: 'No está segura' }, { valor: 0, texto: 'No' }] },
    { id: 'r4.7', label: '4.7 – Ha retirado denuncias previas o reanudado la relación', opciones: [{ valor: 2, texto: 'Sí' }, { valor: 1, texto: 'No, pero reanudó la relación' }, { valor: 0, texto: 'No' }] },
    { id: 'r4.8', label: '4.8 – Ha recibido atención en salud como consecuencia de las agresiones', opciones: [{ valor: 2, texto: 'No, a pesar de haber sufrido violencia se negó a recibir asistencia' }, { valor: 1, texto: 'Sí, fue asistida' }, { valor: 0, texto: 'No ha sido necesario' }] },
    { id: 'r5.1', label: '5.1 – El dato o información proporcionada es determinante para esclarecer el hecho', opciones: [{ valor: 2, texto: 'Permitió individualizar al agresor/hallar otros elementos de prueba' }, { valor: 1, texto: 'Permitió hallar el elemento de prueba principal' }, { valor: 0, texto: 'No es pertinente/relevante o se puede prescindir' }] },
    { id: 'r5.2', label: '5.2 – ¿El dato o información está sustentado en otros elementos de prueba?', opciones: [{ valor: 2, texto: 'Corroborado ampliamente' }, { valor: 1, texto: 'Corroborado parcialmente' }, { valor: 0, texto: 'No fue corroborado' }] },
    { id: 'r5.3', label: '5.3 – La víctima manifiesta su voluntad de continuar el proceso', opciones: [{ valor: 3, texto: 'No quiere continuar' }, { valor: 2, texto: 'Duda en continuar' }, { valor: 1, texto: 'Manifiesta su voluntad de continuar' }, { valor: 0, texto: 'Está segura de continuar' }] }
];

// ============================================================
// ESTADO GLOBAL
// ============================================================
let causas = [];
let hechosAgregados = [];
let riesgoPuntaje = 0;
let riesgoNivel = '';
let causaActualId = null;
let seccionesGuardadas = { tab1: false, tab2: false, tab3: false, tab4: false };

// ============================================================
// FUNCIONES AUXILIARES
// ============================================================
function setValueSafe(id, valor) {
    const el = document.getElementById(id);
    if (el) { el.value = valor; return true; }
    return false;
}
function setCheckedSafe(id, estado) {
    const el = document.getElementById(id);
    if (el) { el.checked = estado; return true; }
    return false;
}
function setTextSafe(id, texto) {
    const el = document.getElementById(id);
    if (el) { el.textContent = texto; return true; }
    return false;
}
function getIncisoSeleccionado(hechoId, incisoId) {
    const config = CONFIG.hechos[hechoId];
    if (!config) return null;
    return config.incisos.find(i => i.id === incisoId) || null;
}
function getNumeralSeleccionado(hechoId, incisoId, numeralId) {
    const config = CONFIG.hechos[hechoId];
    if (!config) return null;
    const inciso = config.incisos.find(i => i.id === incisoId);
    if (!inciso || !inciso.numerales) return null;
    return inciso.numerales.find(n => n.id === numeralId) || null;
}

// ============================================================
// GRUPOS DE HECHOS
// ============================================================
const GRUPO_A = ['128', '135', '135b', '137', '229', '225'];
const GRUPO_B = ['166', '166ag', '167', '168', '111', '105', '106', '173', '175', '212', '126', '127'];

function esGrupoA(hechoId) {
    return GRUPO_A.includes(hechoId);
}

// ============================================================
// FUNCIONES DE PERSISTENCIA (localStorage)
// ============================================================
function guardarEnLocalStorage() {
    try {
        localStorage.setItem('causasPenales', JSON.stringify(causas));
    } catch (e) {
        console.warn('No se pudo guardar en localStorage:', e);
    }
}

function cargarDatos() {
    try {
        const data = localStorage.getItem('causasPenales');
        if (data) {
            causas = JSON.parse(data);
            // Asegurar que todas las causas tengan campos nuevos
            causas = causas.map(c => {
                if (!c.estado) c.estado = 'activa';
                if (!c.hechosAgregados) c.hechosAgregados = [];
                if (!c.victimas) c.victimas = [{ nombre: '', ci: '', telefono: '', domicilio: '', edad: '' }];
                if (!c.testigos) c.testigos = [{ nombre: '', ci: '', telefono: '' }];
                if (c.rebeldiaActiva === undefined) c.rebeldiaActiva = false;
                if (!c.fechaRebeldia) c.fechaRebeldia = '';
                if (!c.fechaLevantamientoRebeldia) c.fechaLevantamientoRebeldia = '';
                if (!c.numResolucionRebeldia) c.numResolucionRebeldia = '';
                if (!c.fechaVencimiento) c.fechaVencimiento = '';
                if (!c.plazoInvestigacion) c.plazoInvestigacion = 6;
                if (!c.observacionesEstado) c.observacionesEstado = '';
                if (!c.fechaImputacion) c.fechaImputacion = '';
                if (!c.numAI) c.numAI = '';
                if (!c.fechaAI) c.fechaAI = '';
                if (!c.numJuzgado) c.numJuzgado = '';
                if (c.medidaNotificacion === undefined) c.medidaNotificacion = false;
                if (c.medidaAlternativas === undefined) c.medidaAlternativas = false;
                if (c.medidaPrivativas === undefined) c.medidaPrivativas = false;
                if (!c.fechaProrrogaOrdinaria) c.fechaProrrogaOrdinaria = '';
                if (!c.prorrogaOrdinariaOtorgada) c.prorrogaOrdinariaOtorgada = '';
                if (!c.nuevaFechaOrdinaria) c.nuevaFechaOrdinaria = '';
                if (!c.fundamentoOrdinaria) c.fundamentoOrdinaria = '';
                if (!c.fechaProrrogaExtraordinaria) c.fechaProrrogaExtraordinaria = '';
                if (!c.prorrogaExtraordinariaOtorgada) c.prorrogaExtraordinariaOtorgada = '';
                if (!c.nuevaFechaExtraordinaria) c.nuevaFechaExtraordinaria = '';
                if (!c.fundamentoExtraordinaria) c.fundamentoExtraordinaria = '';
                if (c.anticipoCamaraGessell === undefined) c.anticipoCamaraGessell = false;
                if (c.anticipoPericia === undefined) c.anticipoPericia = false;
                if (c.anticipoInspeccion === undefined) c.anticipoInspeccion = false;
                if (c.anticipoReconocimiento === undefined) c.anticipoReconocimiento = false;
                if (c.anticipoTestigosVulnerables === undefined) c.anticipoTestigosVulnerables = false;
                if (!c.anticipoOtro) c.anticipoOtro = '';
                if (!c.intervenciones) c.intervenciones = { tipo: '', respuestas: {}, otros: '', montoDebido: 0, montoAbonado: 0, diligencias: [] };
                if (!c.evaluaciones) c.evaluaciones = { psi: { fecha: '', profesional: '', resultado: 'Pendiente', observaciones: '' }, med: { fecha: '', profesional: '', resultado: 'Pendiente', observaciones: '' } };
                return c;
            });
        }
    } catch (e) {
        console.warn('Error al cargar datos:', e);
        causas = [];
    }
}

// ============================================================
// RENDERIZAR CAUSAS EN TARJETAS
// ============================================================
function renderizarCausas() {
    const grid = document.getElementById('causa-grid');
    const contador = document.getElementById('contador-causas');

    if (causas.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-folder-open"></i><p>No hay causas registradas. Haga clic en "Nueva Causa" para comenzar.</p></div>`;
        contador.textContent = '(0)';
        return;
    }

    contador.textContent = `(${causas.length})`;
    let html = '';

    causas.forEach(causa => {
        const estado = causa.estado || 'activa';
        const estadoLabel = obtenerEstadoLabel(estado);
        const estadoBadge = `badge-estado ${estado.replace(/_/g, '-')}`;

        let rebeldiaHTML = '';
        if (causa.rebeldiaActiva) {
            const fecha = causa.fechaRebeldia ? new Date(causa.fechaRebeldia).toLocaleDateString('es-ES') : 'fecha no especificada';
            rebeldiaHTML = `<div style="background:#f8d7da;padding:4px 8px;border-radius:4px;font-size:12px;color:#721c24;margin-top:4px;">
                <i class="fas fa-exclamation-triangle"></i> En rebeldía (desde ${fecha})
            </div>`;
        }

        let diasHTML = '';
        if (causa.fechaVencimiento) {
            const dias = calcularDiasRestantes(causa.fechaVencimiento);
            const clase = dias < 0 ? 'vencido' : (dias <= 15 ? 'proximo' : '');
            diasHTML = `<div class="dias-restantes ${clase}">📅 ${dias < 0 ? 'VENCIDO (hace ' + Math.abs(dias) + ' días)' : 'Faltan ' + dias + ' días'}</div>`;
        }

        let hechosDetalle = '';
        if (causa.hechosAgregados && causa.hechosAgregados.length > 0) {
            const items = causa.hechosAgregados.map(h => {
                const config = CONFIG.hechos[h.hecho];
                const label = config ? config.label : h.hecho;
                return `<div style="font-size:12px;color:#444;line-height:1.3;">• ${label}</div>`;
            }).join('');
            hechosDetalle = `<div style="margin-top:6px; border-top:1px dashed #e0e4ea; padding-top:6px;">${items}</div>`;
        }

        html += `
            <div class="causa-card" onclick="abrirCausa('${causa.id}')">
                <button class="eliminar-btn" onclick="event.stopPropagation(); eliminarCausa('${causa.id}')">×</button>
                <div class="numero">${causa.numero || 'Sin número'}</div>
                <div class="caratula">${generarCaratulaTexto(causa)}</div>
                ${hechosDetalle}
                <div style="margin-top:6px;"><span class="${estadoBadge}">${estadoLabel}</span></div>
                ${rebeldiaHTML}
                ${diasHTML}
                <div style="font-size:11px;color:#888;margin-top:6px;border-top:1px dashed #e0e4ea;padding-top:4px;">
                    Imputado: ${causa.imputado || 'Sin imputado'}
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

// ============================================================
// FUNCIONES AUXILIARES PARA RENDERIZADO
// ============================================================
function obtenerEstadoLabel(estado) {
    const mapa = {
        'activa': 'Activa',
        'criterio-oportunidad': 'Criterio de Oportunidad',
        'archivo-provisional': 'Archivo Provisional',
        'archivo-definitivo': 'Archivo Definitivo',
        'sobreseimiento': 'Sobreseimiento',
        'elevacion-juicio': 'Elevación a Juicio',
        'sentencia-condenatoria': 'Sentencia Condenatoria',
        'sentencia-absolutoria': 'Sentencia Absolutoria',
        'suspension-condicional': 'Suspensión Condicional',
        'acuerdo-reparatorio': 'Acuerdo Reparatorio',
        'conciliacion': 'Conciliación',
        'remision-justicia-menores': 'Remisión a menores',
        'inhibitoria': 'Inhibitoria',
        'otro': 'Otro'
    };
    return mapa[estado] || estado;
}

function calcularDiasRestantes(fechaVenc) {
    if (!fechaVenc) return null;
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const venc = new Date(fechaVenc);
    venc.setHours(0, 0, 0, 0);
    return Math.ceil((venc - hoy) / (1000 * 60 * 60 * 24));
}

function generarCaratulaTexto(causa) {
    if (!causa.hechosAgregados || causa.hechosAgregados.length === 0) {
        return 'Sin hechos punibles';
    }
    const num = causa.numero || '';
    const imp = causa.imputado || '';
    const hechosText = causa.hechosAgregados.map(h => {
        const config = CONFIG.hechos[h.hecho];
        return config ? config.label.replace(/^Art\.\s*\d+\s*[–-]\s*/, '') : h.hecho;
    }).join('; ');
    return `Causa Nº ${num} "${imp}" s/ ${hechosText}`;
}

// ============================================================
// FILTRAR CAUSAS
// ============================================================
function filtrarCausas() {
    const term = document.getElementById('buscador').value.toLowerCase().trim();
    const grid = document.getElementById('causa-grid');
    if (!term) {
        renderizarCausas();
        return;
    }
    const filtradas = causas.filter(c =>
        (c.numero && c.numero.toLowerCase().includes(term)) ||
        (c.imputado && c.imputado.toLowerCase().includes(term)) ||
        (c.caratula && c.caratula.toLowerCase().includes(term))
    );
    if (filtradas.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><p>No se encontraron causas para "${term}"</p></div>`;
        document.getElementById('contador-causas').textContent = '(0)';
    } else {
        const original = causas;
        causas = filtradas;
        renderizarCausas();
        causas = original;
        document.getElementById('contador-causas').textContent = `(${filtradas.length})`;
    }
}

// ============================================================
// FUNCIONES DE CRUD
// ============================================================
function nuevaCausa() {
    causaActualId = null;
    hechosAgregados = [];
    seccionesGuardadas = { tab1: false, tab2: false, tab3: false, tab4: false };
    document.getElementById('form-title').innerHTML = '<i class="fas fa-plus"></i> Nueva Causa';
    document.getElementById('estado-causa').textContent = '';
    document.getElementById('form-container').classList.add('active');
    document.getElementById('listado-view').style.display = 'none';
    limpiarFormulario();
    actualizarPestanas();
    document.querySelectorAll('.badge-guardado').forEach(b => b.style.display = 'none');
    document.querySelectorAll('.footer-seccion .estado').forEach(el => {
        el.textContent = 'Sin guardar';
        el.className = 'estado';
    });
    document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });
}

function abrirCausa(id) {
    const causa = causas.find(c => c.id === id);
    if (!causa) return alert('Causa no encontrada.');
    causaActualId = id;
    hechosAgregados = JSON.parse(JSON.stringify(causa.hechosAgregados || []));
    seccionesGuardadas = { tab1: true, tab2: true, tab3: true, tab4: true };
    document.getElementById('form-title').innerHTML = '<i class="fas fa-edit"></i> Editar Causa';
    document.getElementById('estado-causa').textContent = 'Cargada';
    document.getElementById('form-container').classList.add('active');
    document.getElementById('listado-view').style.display = 'none';
    cargarCausaEnFormulario(causa);
    actualizarPestanas();
    document.querySelectorAll('.badge-guardado').forEach(b => b.style.display = 'inline');
    document.querySelectorAll('.footer-seccion .estado').forEach(el => {
        el.textContent = 'Guardado';
        el.className = 'estado guardado';
    });
    document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });
}

function eliminarCausa(id) {
    if (!confirm('¿Eliminar esta causa permanentemente?')) return;
    causas = causas.filter(c => c.id !== id);
    guardarEnLocalStorage();
    renderizarCausas();
}

function eliminarTodasLasCausas() {
    if (!confirm('¿Eliminar TODAS las causas? Esta acción no se puede deshacer.')) return;
    causas = [];
    guardarEnLocalStorage();
    renderizarCausas();
    cerrarFormulario();
}

function cerrarFormulario() {
    document.getElementById('form-container').classList.remove('active');
    document.getElementById('listado-view').style.display = 'block';
    causaActualId = null;
    renderizarCausas();
}

// ============================================================
// CARGAR CAUSA EN FORMULARIO
// ============================================================
function cargarCausaEnFormulario(causa) {
    // Tab1
    setValueSafe('num-causa', causa.numero || '');
    setValueSafe('imputado', causa.imputado || '');
    setValueSafe('ci-imputado', causa.ciImputado || '');
    setValueSafe('domicilio-imputado', causa.domicilio || '');
    setValueSafe('telefono-imputado', causa.telefono || '');
    setCheckedSafe('reincidente', causa.reincidente || false);
    setValueSafe('num-reincidencias', causa.numReincidencias || 0);
    setValueSafe('lugar-hecho', causa.lugarHecho || '');
    setValueSafe('fecha-hecho', causa.fechaHecho || '');
    setValueSafe('hora-hecho', causa.horaHecho || '');
    setValueSafe('descripcion-hecho', causa.descripcion || '');
    setValueSafe('observaciones-generales', causa.observaciones || '');
    // Víctimas
    const victimasContainer = document.getElementById('victimas-container');
    victimasContainer.innerHTML = '';
    (causa.victimas || [{ nombre: '', ci: '', telefono: '', domicilio: '', edad: '' }]).forEach((v, i) => {
        const div = document.createElement('div');
        div.className = 'victima-block';
        div.innerHTML = `
            <div class="form-row">
                <div class="form-group"><label>Nombre completo</label><input type="text" class="victima-nombre" value="${v.nombre || ''}" placeholder="Nombre de la víctima"></div>
                <div class="form-group"><label>Cédula de identidad</label><input type="text" class="victima-ci" value="${v.ci || ''}" placeholder="CI"></div>
                <div class="form-group"><label>Teléfono</label><input type="text" class="victima-telefono" value="${v.telefono || ''}" placeholder="Teléfono"></div>
            </div>
            <div class="form-row">
                <div class="form-group"><label>Domicilio</label><input type="text" class="victima-domicilio" value="${v.domicilio || ''}" placeholder="Dirección"></div>
                <div class="form-group"><label>Edad</label><input type="number" class="victima-edad" value="${v.edad || ''}" placeholder="Edad" min="0"></div>
                <div class="form-group" style="justify-content:flex-end;"><button class="btn-remover" onclick="eliminarVictima(this)"><i class="fas fa-times"></i> Eliminar</button></div>
            </div>
        `;
        victimasContainer.appendChild(div);
    });
    // Testigos
    const testigosContainer = document.getElementById('testigos-container');
    testigosContainer.innerHTML = '';
    (causa.testigos || [{ nombre: '', ci: '', telefono: '' }]).forEach((t, i) => {
        const div = document.createElement('div');
        div.className = 'testigo-block';
        div.innerHTML = `
            <div class="form-row">
                <div class="form-group"><label>Nombre completo</label><input type="text" class="testigo-nombre" value="${t.nombre || ''}" placeholder="Nombre del testigo"></div>
                <div class="form-group"><label>Cédula de identidad</label><input type="text" class="testigo-ci" value="${t.ci || ''}" placeholder="CI"></div>
                <div class="form-group"><label>Teléfono</label><input type="text" class="testigo-telefono" value="${t.telefono || ''}" placeholder="Teléfono"></div>
                <div class="form-group" style="justify-content:flex-end;"><button class="btn-remover" onclick="eliminarTestigo(this)"><i class="fas fa-times"></i> Eliminar</button></div>
            </div>
        `;
        testigosContainer.appendChild(div);
    });
    // Hechos
    renderizarHechosAgregados();
    generarCaratula();

    // Tab2
    setValueSafe('fecha-imputacion', causa.fechaImputacion || '');
    setValueSafe('num-ai', causa.numAI || '');
    setValueSafe('fecha-ai', causa.fechaAI || '');
    setValueSafe('num-juzgado', causa.numJuzgado || '');
    setValueSafe('estado-causa-select', causa.estado || 'activa');
    setValueSafe('observaciones-estado', causa.observacionesEstado || '');
    setValueSafe('plazo-investigacion', causa.plazoInvestigacion || 6);
    setValueSafe('fecha-vencimiento-input', causa.fechaVencimiento || '');
    setCheckedSafe('medida-notificacion', causa.medidaNotificacion || false);
    setCheckedSafe('medida-alternativas', causa.medidaAlternativas || false);
    setCheckedSafe('medida-privativas', causa.medidaPrivativas || false);
    setValueSafe('fecha-prorroga-ordinaria', causa.fechaProrrogaOrdinaria || '');
    setValueSafe('prorroga-ordinaria-otorgada', causa.prorrogaOrdinariaOtorgada || '');
    setValueSafe('nueva-fecha-ordinaria', causa.nuevaFechaOrdinaria || '');
    setValueSafe('fundamento-ordinaria', causa.fundamentoOrdinaria || '');
    setValueSafe('fecha-prorroga-extraordinaria', causa.fechaProrrogaExtraordinaria || '');
    setValueSafe('prorroga-extraordinaria-otorgada', causa.prorrogaExtraordinariaOtorgada || '');
    setValueSafe('nueva-fecha-extraordinaria', causa.nuevaFechaExtraordinaria || '');
    setValueSafe('fundamento-extraordinaria', causa.fundamentoExtraordinaria || '');
    setCheckedSafe('rebeldia-activa', causa.rebeldiaActiva || false);
    toggleRebeldia();
    setValueSafe('fecha-rebeldia', causa.fechaRebeldia || '');
    setValueSafe('num-resolucion-rebeldia', causa.numResolucionRebeldia || '');
    setValueSafe('fecha-levantamiento-rebeldia', causa.fechaLevantamientoRebeldia || '');
    setCheckedSafe('anticipo-camara-gessell', causa.anticipoCamaraGessell || false);
    setCheckedSafe('anticipo-pericia', causa.anticipoPericia || false);
    setCheckedSafe('anticipo-inspeccion', causa.anticipoInspeccion || false);
    setCheckedSafe('anticipo-reconocimiento', causa.anticipoReconocimiento || false);
    setCheckedSafe('anticipo-testigos-vulnerables', causa.anticipoTestigosVulnerables || false);
    setValueSafe('anticipo-otro', causa.anticipoOtro || '');

    // Tab3
    actualizarIntervenciones();
    if (causa.intervenciones) {
        if (causa.intervenciones.tipo === 'cuestionario') {
            restaurarCuestionario(causa.intervenciones);
        } else if (causa.intervenciones.tipo === 'liquidacion') {
            restaurarLiquidacion(causa.intervenciones);
        }
    }
    // Tab4
    if (causa.evaluaciones) {
        setValueSafe('psi-fecha', causa.evaluaciones.psi.fecha || '');
        setValueSafe('psi-profesional', causa.evaluaciones.psi.profesional || '');
        setValueSafe('psi-resultado', causa.evaluaciones.psi.resultado || 'Pendiente');
        setValueSafe('psi-observaciones', causa.evaluaciones.psi.observaciones || '');
        setValueSafe('med-fecha', causa.evaluaciones.med.fecha || '');
        setValueSafe('med-profesional', causa.evaluaciones.med.profesional || '');
        setValueSafe('med-resultado', causa.evaluaciones.med.resultado || 'Pendiente');
        setValueSafe('med-observaciones', causa.evaluaciones.med.observaciones || '');
    }
    // Recalcular fechas
    calcularVencimiento();
    actualizarFechaRequerimientoConclusivo();
    calcularDiasSuspendidos();
}

// ============================================================
// LIMPIAR FORMULARIO
// ============================================================
function limpiarFormulario() {
    document.querySelectorAll('#form-container input, #form-container select, #form-container textarea').forEach(el => {
        if (el.type !== 'checkbox' && el.type !== 'radio') {
            el.value = '';
        } else if (el.type === 'checkbox') {
            el.checked = false;
        }
    });
    const victimasContainer = document.getElementById('victimas-container');
    victimasContainer.innerHTML = `
        <div class="victima-block" data-index="0">
            <div class="form-row">
                <div class="form-group"><label>Nombre completo</label><input type="text" class="victima-nombre" placeholder="Nombre de la víctima"></div>
                <div class="form-group"><label>Cédula de identidad</label><input type="text" class="victima-ci" placeholder="CI"></div>
                <div class="form-group"><label>Teléfono</label><input type="text" class="victima-telefono" placeholder="Teléfono"></div>
            </div>
            <div class="form-row">
                <div class="form-group"><label>Domicilio</label><input type="text" class="victima-domicilio" placeholder="Dirección"></div>
                <div class="form-group"><label>Edad</label><input type="number" class="victima-edad" placeholder="Edad" min="0"></div>
                <div class="form-group" style="justify-content:flex-end;"><button class="btn-remover" onclick="eliminarVictima(this)"><i class="fas fa-times"></i> Eliminar</button></div>
            </div>
        </div>
    `;
    const testigosContainer = document.getElementById('testigos-container');
    testigosContainer.innerHTML = `
        <div class="testigo-block" data-index="0">
            <div class="form-row">
                <div class="form-group"><label>Nombre completo</label><input type="text" class="testigo-nombre" placeholder="Nombre del testigo"></div>
                <div class="form-group"><label>Cédula de identidad</label><input type="text" class="testigo-ci" placeholder="CI"></div>
                <div class="form-group"><label>Teléfono</label><input type="text" class="testigo-telefono" placeholder="Teléfono"></div>
                <div class="form-group" style="justify-content:flex-end;"><button class="btn-remover" onclick="eliminarTestigo(this)"><i class="fas fa-times"></i> Eliminar</button></div>
            </div>
        </div>
    `;
    hechosAgregados = [];
    renderizarHechosAgregados();
    generarCaratula();
    document.getElementById('incisos-opciones').innerHTML = '<span class="text-muted">Seleccione un hecho punible</span>';
    document.querySelectorAll('.badge-guardado').forEach(b => b.style.display = 'none');
    document.querySelectorAll('.footer-seccion .estado').forEach(el => {
        el.textContent = 'Sin guardar';
        el.className = 'estado';
    });
    document.getElementById('rebeldia-campos').classList.add('hidden');
    document.getElementById('dias-suspendidos').textContent = '--';
    document.getElementById('dias-restantes').textContent = '--';
    document.getElementById('nueva-fecha-rebeldia').value = '';
    document.getElementById('intervencion-contenido').innerHTML = '<p class="text-muted">Seleccione un hecho del Grupo A para ver las intervenciones.</p>';
}

// ============================================================
// GUARDAR PESTAÑA 1: DATOS GENERALES
// ============================================================
function guardarPestana1() {
    const id = causaActualId || 'causa-' + Date.now();
    let causa = causas.find(c => c.id === id);
    if (!causa) {
        causa = { id: id, hechosAgregados: [] };
        causas.push(causa);
    }
    causa.numero = document.getElementById('num-causa').value.trim();
    causa.imputado = document.getElementById('imputado').value.trim();
    causa.ciImputado = document.getElementById('ci-imputado').value.trim();
    causa.domicilio = document.getElementById('domicilio-imputado').value.trim();
    causa.telefono = document.getElementById('telefono-imputado').value.trim();
    causa.reincidente = document.getElementById('reincidente').checked;
    causa.numReincidencias = parseInt(document.getElementById('num-reincidencias').value) || 0;
    causa.lugarHecho = document.getElementById('lugar-hecho').value.trim();
    causa.fechaHecho = document.getElementById('fecha-hecho').value;
    causa.horaHecho = document.getElementById('hora-hecho').value;
    causa.descripcion = document.getElementById('descripcion-hecho').value.trim();
    causa.observaciones = document.getElementById('observaciones-generales').value.trim();
    const victimas = [];
    document.querySelectorAll('.victima-block').forEach(block => {
        const nombre = block.querySelector('.victima-nombre')?.value.trim() || '';
        const ci = block.querySelector('.victima-ci')?.value.trim() || '';
        const telefono = block.querySelector('.victima-telefono')?.value.trim() || '';
        const domicilio = block.querySelector('.victima-domicilio')?.value.trim() || '';
        const edad = parseInt(block.querySelector('.victima-edad')?.value) || '';
        victimas.push({ nombre, ci, telefono, domicilio, edad });
    });
    causa.victimas = victimas;
    const testigos = [];
    document.querySelectorAll('.testigo-block').forEach(block => {
        const nombre = block.querySelector('.testigo-nombre')?.value.trim() || '';
        const ci = block.querySelector('.testigo-ci')?.value.trim() || '';
        const telefono = block.querySelector('.testigo-telefono')?.value.trim() || '';
        testigos.push({ nombre, ci, telefono });
    });
    causa.testigos = testigos;
    causa.hechosAgregados = JSON.parse(JSON.stringify(hechosAgregados));
    seccionesGuardadas.tab1 = true;
    document.getElementById('badge-tab1').style.display = 'inline';
    document.getElementById('estado-tab1').textContent = 'Guardado';
    document.getElementById('estado-tab1').className = 'estado guardado';
    causaActualId = causa.id;
    guardarEnLocalStorage();
    renderizarCausas();
    alert('Datos generales guardados correctamente.');
}

// ============================================================
// GUARDAR PESTAÑA 2: JUZGADO
// ============================================================
function guardarPestana2() {
    const causa = getCausaActual();
    if (!causa) {
        alert('No hay causa seleccionada. Guarde primero los Datos Generales.');
        return;
    }
    causa.fechaImputacion = document.getElementById('fecha-imputacion').value;
    causa.numAI = document.getElementById('num-ai').value.trim();
    causa.fechaAI = document.getElementById('fecha-ai').value;
    causa.numJuzgado = document.getElementById('num-juzgado').value.trim();
    causa.estado = document.getElementById('estado-causa-select').value;
    causa.observacionesEstado = document.getElementById('observaciones-estado').value.trim();
    causa.plazoInvestigacion = parseInt(document.getElementById('plazo-investigacion').value) || 6;
    causa.fechaVencimiento = document.getElementById('fecha-vencimiento-input').value;
    causa.medidaNotificacion = document.getElementById('medida-notificacion').checked;
    causa.medidaAlternativas = document.getElementById('medida-alternativas').checked;
    causa.medidaPrivativas = document.getElementById('medida-privativas').checked;
    causa.fechaProrrogaOrdinaria = document.getElementById('fecha-prorroga-ordinaria').value;
    causa.prorrogaOrdinariaOtorgada = document.getElementById('prorroga-ordinaria-otorgada').value;
    causa.nuevaFechaOrdinaria = document.getElementById('nueva-fecha-ordinaria').value;
    causa.fundamentoOrdinaria = document.getElementById('fundamento-ordinaria').value.trim();
    causa.fechaProrrogaExtraordinaria = document.getElementById('fecha-prorroga-extraordinaria').value;
    causa.prorrogaExtraordinariaOtorgada = document.getElementById('prorroga-extraordinaria-otorgada').value;
    causa.nuevaFechaExtraordinaria = document.getElementById('nueva-fecha-extraordinaria').value;
    causa.fundamentoExtraordinaria = document.getElementById('fundamento-extraordinaria').value.trim();
    causa.rebeldiaActiva = document.getElementById('rebeldia-activa').checked;
    causa.fechaRebeldia = document.getElementById('fecha-rebeldia').value;
    causa.numResolucionRebeldia = document.getElementById('num-resolucion-rebeldia').value.trim();
    causa.fechaLevantamientoRebeldia = document.getElementById('fecha-levantamiento-rebeldia').value;
    causa.anticipoCamaraGessell = document.getElementById('anticipo-camara-gessell').checked;
    causa.anticipoPericia = document.getElementById('anticipo-pericia').checked;
    causa.anticipoInspeccion = document.getElementById('anticipo-inspeccion').checked;
    causa.anticipoReconocimiento = document.getElementById('anticipo-reconocimiento').checked;
    causa.anticipoTestigosVulnerables = document.getElementById('anticipo-testigos-vulnerables').checked;
    causa.anticipoOtro = document.getElementById('anticipo-otro').value.trim();
    seccionesGuardadas.tab2 = true;
    document.getElementById('badge-tab2').style.display = 'inline';
    document.getElementById('estado-tab2').textContent = 'Guardado';
    document.getElementById('estado-tab2').className = 'estado guardado';
    guardarEnLocalStorage();
    renderizarCausas();
    alert('Datos del Juzgado guardados correctamente.');
}

// ============================================================
// GUARDAR PESTAÑA 3: INTERVENCIONES
// ============================================================
function guardarPestana3() {
    const causa = getCausaActual();
    if (!causa) { alert('No hay causa seleccionada.'); return; }
    const hechoPrincipal = hechosAgregados.length > 0 ? hechosAgregados[0].hecho : '';
    if (hechoPrincipal === '229') {
        const respuestas = {};
        preguntasRiesgo.forEach(p => {
            const sel = document.getElementById(`riesgo-${p.id}`);
            if (sel) respuestas[p.id] = sel.value;
        });
        const otros = document.getElementById('riesgo-otros')?.value || '';
        causa.intervenciones = { tipo: 'cuestionario', respuestas, otros, puntaje: riesgoPuntaje, nivel: riesgoNivel };
    } else if (hechoPrincipal === '225') {
        const montoDebido = parseFloat(document.getElementById('monto-debido')?.value) || 0;
        const montoAbonado = parseFloat(document.getElementById('monto-abonado')?.value) || 0;
        const diligencias = obtenerDiligenciasMarcadas();
        causa.intervenciones = { tipo: 'liquidacion', montoDebido, montoAbonado, diligencias };
    } else {
        alert('No hay intervenciones específicas para este tipo de causa.');
        return;
    }
    seccionesGuardadas.tab3 = true;
    document.getElementById('badge-tab3').style.display = 'inline';
    document.getElementById('estado-tab3').textContent = 'Guardado';
    document.getElementById('estado-tab3').className = 'estado guardado';
    guardarEnLocalStorage();
    alert('Intervenciones guardadas correctamente.');
}

// ============================================================
// GUARDAR PESTAÑA 4: EVALUACIONES
// ============================================================
function guardarPestana4() {
    const causa = getCausaActual();
    if (!causa) { alert('No hay causa seleccionada.'); return; }
    causa.evaluaciones = {
        psi: {
            fecha: document.getElementById('psi-fecha').value,
            profesional: document.getElementById('psi-profesional').value.trim(),
            resultado: document.getElementById('psi-resultado').value,
            observaciones: document.getElementById('psi-observaciones').value.trim()
        },
        med: {
            fecha: document.getElementById('med-fecha').value,
            profesional: document.getElementById('med-profesional').value.trim(),
            resultado: document.getElementById('med-resultado').value,
            observaciones: document.getElementById('med-observaciones').value.trim()
        }
    };
    seccionesGuardadas.tab4 = true;
    document.getElementById('badge-tab4').style.display = 'inline';
    document.getElementById('estado-tab4').textContent = 'Guardado';
    document.getElementById('estado-tab4').className = 'estado guardado';
    guardarEnLocalStorage();
    alert('Evaluaciones guardadas correctamente.');
}

// ============================================================
// OBTENER CAUSA ACTUAL
// ============================================================
function getCausaActual() {
    if (!causaActualId) {
        const num = document.getElementById('num-causa').value.trim();
        const imp = document.getElementById('imputado').value.trim();
        if (num && imp) {
            let c = causas.find(c => c.numero === num && c.imputado === imp);
            if (!c) {
                c = { id: 'causa-' + Date.now(), numero: num, imputado: imp, hechosAgregados: [] };
                causas.push(c);
                causaActualId = c.id;
            }
            return c;
        }
        return null;
    }
    return causas.find(c => c.id === causaActualId) || null;
}

// ============================================================
// FUNCIONES DE FECHAS Y PLAZOS
// ============================================================
function calcularVencimiento() {
    const inputFechaVenc = document.getElementById('fecha-vencimiento-input');
    const elDias = document.getElementById('dias-restantes');
    const fechaImputacion = document.getElementById('fecha-imputacion').value;
    const plazo = parseInt(document.getElementById('plazo-investigacion').value) || 0;
    const rebeldiaActiva = document.getElementById('rebeldia-activa').checked;
    const fechaLevantamiento = document.getElementById('fecha-levantamiento-rebeldia').value;
    let diasSuspendidos = 0;

    if (!fechaImputacion || plazo <= 0) {
        inputFechaVenc.value = '';
        elDias.textContent = '--';
        return;
    }

    if (rebeldiaActiva && fechaLevantamiento) {
        const fechaDeclaracion = document.getElementById('fecha-rebeldia').value;
        if (fechaDeclaracion) {
            const ini = new Date(fechaDeclaracion);
            const fin = new Date(fechaLevantamiento);
            if (fin >= ini) {
                diasSuspendidos = Math.ceil((fin - ini) / (1000 * 60 * 60 * 24));
            }
        }
    }

    if (rebeldiaActiva && !fechaLevantamiento) {
        inputFechaVenc.value = '';
        elDias.textContent = 'SUSPENDIDO';
        elDias.style.color = '#b8860b';
        return;
    }

    const fecha = new Date(fechaImputacion);
    fecha.setMonth(fecha.getMonth() + plazo);
    fecha.setDate(fecha.getDate() + diasSuspendidos);
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    inputFechaVenc.value = `${year}-${month}-${day}`;
    calcularDiasRestantesDesdeFecha();
}

function actualizarFechaRequerimientoConclusivo() {
    const fechaImputacion = document.getElementById('fecha-imputacion').value;
    const plazo = parseInt(document.getElementById('plazo-investigacion').value) || 0;
    const rebeldiaActiva = document.getElementById('rebeldia-activa').checked;
    const fechaLevantamiento = document.getElementById('fecha-levantamiento-rebeldia').value;
    const el = document.getElementById('nueva-fecha-rebeldia');

    if (!fechaImputacion || plazo <= 0) {
        el.value = '';
        return;
    }
    const fecha = new Date(fechaImputacion);
    let diasSuspendidos = 0;
    if (rebeldiaActiva && fechaLevantamiento) {
        const fechaDeclaracion = document.getElementById('fecha-rebeldia').value;
        if (fechaDeclaracion) {
            const ini = new Date(fechaDeclaracion);
            const fin = new Date(fechaLevantamiento);
            if (fin >= ini) {
                diasSuspendidos = Math.ceil((fin - ini) / (1000 * 60 * 60 * 24));
            }
        }
    }
    fecha.setMonth(fecha.getMonth() + plazo);
    fecha.setDate(fecha.getDate() + diasSuspendidos);
    el.value = fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    if (diasSuspendidos > 0) {
        el.value += ` (+${diasSuspendidos} días suspendidos)`;
    }
}

function calcularDiasRestantesDesdeFecha() {
    const fechaVenc = document.getElementById('fecha-vencimiento-input').value;
    const elDias = document.getElementById('dias-restantes');
    if (!fechaVenc) {
        elDias.textContent = '--';
        return;
    }
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const venc = new Date(fechaVenc);
    venc.setHours(0, 0, 0, 0);
    const diff = Math.ceil((venc - hoy) / (1000 * 60 * 60 * 24));
    if (diff < 0) {
        elDias.textContent = `VENCIDO (hace ${Math.abs(diff)} días)`;
        elDias.style.color = '#b33c3c';
    } else {
        elDias.textContent = `Faltan ${diff} días`;
        elDias.style.color = diff <= 15 ? '#b8860b' : '#2a7d4f';
    }
}

function calcularDiasSuspendidos() {
    const fechaDeclaracion = document.getElementById('fecha-rebeldia').value;
    const fechaLevantamiento = document.getElementById('fecha-levantamiento-rebeldia').value;
    const elDias = document.getElementById('dias-suspendidos');
    const elTranscurridos = document.getElementById('dias-transcurridos-rebeldia');
    const elSuspendidosDetalle = document.getElementById('dias-suspendidos-detalle');
    const elRestantesDetalle = document.getElementById('dias-restantes-detalle');
    const fechaImputacion = document.getElementById('fecha-imputacion').value;
    const plazoMeses = parseInt(document.getElementById('plazo-investigacion').value) || 0;

    if (!fechaDeclaracion || !fechaLevantamiento) {
        elDias.textContent = '--';
        elTranscurridos.textContent = '--';
        elSuspendidosDetalle.textContent = '--';
        elRestantesDetalle.textContent = '--';
        return;
    }
    const ini = new Date(fechaDeclaracion);
    const fin = new Date(fechaLevantamiento);
    if (fin < ini) {
        elDias.textContent = 'Fecha de levantamiento anterior a declaración';
        elDias.style.color = '#b33c3c';
        return;
    }
    const diff = Math.ceil((fin - ini) / (1000 * 60 * 60 * 24));
    elDias.textContent = `${diff} días`;
    elDias.style.color = '#1a2a4a';

    if (fechaImputacion && plazoMeses > 0) {
        const fechaImput = new Date(fechaImputacion);
        const transcurridos = Math.ceil((ini - fechaImput) / (1000 * 60 * 60 * 24));
        elTranscurridos.textContent = `⏳ Días transcurridos antes de la rebeldía: ${transcurridos} días (desde imputación hasta declaración)`;
        elSuspendidosDetalle.textContent = `⏸️ Días suspendidos por rebeldía: ${diff} días (desde declaración hasta levantamiento)`;
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const fechaFinal = new Date(fechaImput);
        fechaFinal.setMonth(fechaFinal.getMonth() + plazoMeses);
        fechaFinal.setDate(fechaFinal.getDate() + diff);
        const restantes = Math.ceil((fechaFinal - hoy) / (1000 * 60 * 60 * 24));
        elRestantesDetalle.textContent = `📅 Días restantes después del levantamiento: ${restantes} días (hasta el vencimiento final)`;
    } else {
        elTranscurridos.textContent = '⏳ Complete fecha de imputación y plazo para ver desglose.';
        elSuspendidosDetalle.textContent = '⏸️ --';
        elRestantesDetalle.textContent = '📅 --';
    }
}

function toggleRebeldia() {
    const activa = document.getElementById('rebeldia-activa').checked;
    document.getElementById('rebeldia-campos').classList.toggle('hidden', !activa);
    if (activa) {
        calcularDiasSuspendidos();
        calcularVencimiento();
        actualizarFechaRequerimientoConclusivo();
    } else {
        calcularVencimiento();
        document.getElementById('nueva-fecha-rebeldia').value = '';
        document.getElementById('dias-suspendidos').textContent = '--';
        document.getElementById('dias-transcurridos-rebeldia').textContent = '--';
        document.getElementById('dias-suspendidos-detalle').textContent = '--';
        document.getElementById('dias-restantes-detalle').textContent = '--';
    }
}

function toggleReincidencia() {
    const checked = document.getElementById('reincidente').checked;
    document.getElementById('num-reincidencias').disabled = !checked;
    if (!checked) document.getElementById('num-reincidencias').value = 0;
}

// ============================================================
// VÍCTIMAS Y TESTIGOS
// ============================================================
function agregarVictima() {
    const container = document.getElementById('victimas-container');
    const div = document.createElement('div');
    div.className = 'victima-block';
    div.innerHTML = `
        <div class="form-row">
            <div class="form-group"><label>Nombre completo</label><input type="text" class="victima-nombre" placeholder="Nombre de la víctima"></div>
            <div class="form-group"><label>Cédula de identidad</label><input type="text" class="victima-ci" placeholder="CI"></div>
            <div class="form-group"><label>Teléfono</label><input type="text" class="victima-telefono" placeholder="Teléfono"></div>
        </div>
        <div class="form-row">
            <div class="form-group"><label>Domicilio</label><input type="text" class="victima-domicilio" placeholder="Dirección"></div>
            <div class="form-group"><label>Edad</label><input type="number" class="victima-edad" placeholder="Edad" min="0"></div>
            <div class="form-group" style="justify-content:flex-end;"><button class="btn-remover" onclick="eliminarVictima(this)"><i class="fas fa-times"></i> Eliminar</button></div>
        </div>
    `;
    container.appendChild(div);
}
function eliminarVictima(btn) {
    const block = btn.closest('.victima-block');
    if (document.querySelectorAll('.victima-block').length > 1) block.remove();
    else alert('Debe haber al menos una víctima.');
}
function agregarTestigo() {
    const container = document.getElementById('testigos-container');
    const div = document.createElement('div');
    div.className = 'testigo-block';
    div.innerHTML = `
        <div class="form-row">
            <div class="form-group"><label>Nombre completo</label><input type="text" class="testigo-nombre" placeholder="Nombre del testigo"></div>
            <div class="form-group"><label>Cédula de identidad</label><input type="text" class="testigo-ci" placeholder="CI"></div>
            <div class="form-group"><label>Teléfono</label><input type="text" class="testigo-telefono" placeholder="Teléfono"></div>
            <div class="form-group" style="justify-content:flex-end;"><button class="btn-remover" onclick="eliminarTestigo(this)"><i class="fas fa-times"></i> Eliminar</button></div>
        </div>
    `;
    container.appendChild(div);
}
function eliminarTestigo(btn) {
    const block = btn.closest('.testigo-block');
    if (document.querySelectorAll('.testigo-block').length > 1) block.remove();
    else alert('Debe haber al menos un testigo.');
}

// ============================================================
// HECHOS PUNIBLES – CON INCISOS Y NUMERALES
// ============================================================
function actualizarIncisos() {
    const hecho = document.getElementById('hecho-selector').value;
    const container = document.getElementById('incisos-opciones');
    container.innerHTML = '';
    if (!hecho || !CONFIG.hechos[hecho]) {
        container.innerHTML = '<span class="text-muted">Seleccione un hecho punible</span>';
        return;
    }
    const config = CONFIG.hechos[hecho];
    if (config.incisos.length === 0) {
        container.innerHTML = '<span class="text-muted">Este artículo no tiene incisos</span>';
        return;
    }
    let html = '<div style="display:flex;flex-direction:column;gap:8px;padding:5px 0;">';
    config.incisos.forEach(inc => {
        const tieneNumerales = inc.numerales && inc.numerales.length > 0;
        html += `<div class="inciso-group">`;
        html += `<label style="display:flex;align-items:flex-start;gap:8px;font-size:13px;line-height:1.4;padding:2px 0;">
                    <input type="checkbox" value="${inc.id}" class="inciso-check" data-hecho="${hecho}" data-inciso="${inc.id}" style="margin-top:2px;">
                    <span class="inciso-check-label">${inc.label}</span>
                 </label>`;
        if (tieneNumerales) {
            html += `<div class="numerales-container" id="numerales-${inc.id}" style="padding-left:30px;display:none;margin-top:4px;">`;
            inc.numerales.forEach(num => {
                html += `<label style="display:flex;align-items:flex-start;gap:8px;font-size:12px;line-height:1.3;padding:2px 0;color:#444;">
                            <input type="checkbox" value="${num.id}" class="numeral-check" data-hecho="${hecho}" data-inciso="${inc.id}" data-numeral="${num.id}" style="margin-top:2px;">
                            <span class="numeral-check-label">${num.label}</span>
                         </label>`;
            });
            html += `</div>`;
        }
        html += `</div>`;
    });
    html += '</div>';
    container.innerHTML = html;

    document.querySelectorAll('.inciso-check').forEach(el => {
        el.addEventListener('change', function() {
            const incisoId = this.dataset.inciso;
            const numeralContainer = document.getElementById(`numerales-${incisoId}`);
            if (numeralContainer) {
                numeralContainer.style.display = this.checked ? 'block' : 'none';
                if (!this.checked) {
                    numeralContainer.querySelectorAll('.numeral-check').forEach(cb => cb.checked = false);
                }
            }
            generarCaratula();
        });
    });
    document.querySelectorAll('.numeral-check').forEach(el => {
        el.addEventListener('change', generarCaratula);
    });
}
function agregarHecho() {
    const hecho = document.getElementById('hecho-selector').value;
    if (!hecho) { alert('Seleccione un hecho punible.'); return; }
    const config = CONFIG.hechos[hecho];
    if (!config) return;

    const incisosSeleccionados = [];
    document.querySelectorAll('.inciso-check:checked').forEach(el => {
        const incisoId = el.value;
        const inciso = config.incisos.find(i => i.id === incisoId);
        if (inciso) {
            const numerales = [];
            const numeralContainer = document.getElementById(`numerales-${incisoId}`);
            if (numeralContainer) {
                numeralContainer.querySelectorAll('.numeral-check:checked').forEach(numEl => {
                    numerales.push(numEl.value);
                });
            }
            incisosSeleccionados.push({ id: incisoId, numerales: numerales });
        }
    });

    if (incisosSeleccionados.length === 0 && config.incisos.length > 0) {
        alert('Seleccione al menos un inciso.');
        return;
    }

    const yaExiste = hechosAgregados.some(h => {
        if (h.hecho !== hecho) return false;
        if (h.incisos.length !== incisosSeleccionados.length) return false;
        return h.incisos.every((inc, idx) => {
            const otro = incisosSeleccionados[idx];
            if (inc.id !== otro.id) return false;
            if (inc.numerales.length !== otro.numerales.length) return false;
            return inc.numerales.every((n, i) => n === otro.numerales[i]);
        });
    });
    if (yaExiste) { alert('Esta combinación ya fue agregada.'); return; }

    hechosAgregados.push({ hecho, incisos: incisosSeleccionados });
    renderizarHechosAgregados();
    generarCaratula();
    actualizarPestanas();
    document.getElementById('hecho-selector').value = '';
    document.getElementById('incisos-opciones').innerHTML = '<span class="text-muted">Seleccione un hecho punible</span>';
}
function renderizarHechosAgregados() {
    const container = document.getElementById('lista-hechos');
    if (hechosAgregados.length === 0) {
        container.innerHTML = '<span class="text-muted">No hay hechos punibles agregados.</span>';
        return;
    }
    let html = '<div style="display:flex;flex-direction:column;gap:4px;">';
    hechosAgregados.forEach((h, index) => {
        const config = CONFIG.hechos[h.hecho];
        const label = config ? config.label : h.hecho;
        let detalles = '';
        h.incisos.forEach(inc => {
            const incData = config ? config.incisos.find(i => i.id === inc.id) : null;
            if (incData) {
                let incLabel = incData.label.substring(0, 60) + (incData.label.length > 60 ? '…' : '');
                detalles += `<div style="padding-left:15px;font-size:12px;color:#555;">✓ ${incLabel}`;
                if (inc.numerales && inc.numerales.length > 0) {
                    const nums = inc.numerales.map(id => {
                        const numData = incData.numerales ? incData.numerales.find(n => n.id === id) : null;
                        return numData ? numData.label.substring(0, 40) + (numData.label.length > 40 ? '…' : '') : id;
                    });
                    detalles += ` (numerales: ${nums.join(', ')})`;
                }
                detalles += `</div>`;
            }
        });
        html += `<div class="list-item"><span class="label">${label}</span><button class="btn-remover" onclick="quitarHecho(${index})"><i class="fas fa-times"></i> Eliminar</button></div>`;
        if (detalles) html += `<div style="padding-left:20px;margin-bottom:4px;">${detalles}</div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}
function quitarHecho(index) {
    hechosAgregados.splice(index, 1);
    renderizarHechosAgregados();
    generarCaratula();
    actualizarPestanas();
}

// ============================================================
// CARÁTULA
// ============================================================
function generarCaratula() {
    const num = document.getElementById('num-causa').value.trim();
    const imputado = document.getElementById('imputado').value.trim();
    const preview = document.getElementById('caratula-preview');
    if (!num || !imputado) {
        preview.innerHTML = '<span class="text-muted">Complete Nº causa e Imputado</span>';
        return;
    }
    if (hechosAgregados.length === 0) {
        preview.innerHTML = '<span class="text-muted">Agregue al menos un hecho punible</span>';
        return;
    }
    const hechosText = hechosAgregados.map(h => {
        const config = CONFIG.hechos[h.hecho];
        return config ? config.label.replace(/^Art\.\s*\d+\s*[–-]\s*/, '') : h.hecho;
    }).join('; ');
    preview.textContent = `Causa Nº ${num} "${imputado}" S/ ${hechosText}`;
}

// ============================================================
// PESTAÑAS (dinámicas)
// ============================================================
function actualizarPestanas() {
    const hechoPrincipal = hechosAgregados.length > 0 ? hechosAgregados[0].hecho : '';
    const esA = esGrupoA(hechoPrincipal);
    const container = document.getElementById('tabs-container');
    let tabs = [
        { id: 'tab1', icon: 'fa-file-alt', label: 'Datos Generales' },
        { id: 'tab2', icon: 'fa-balance-scale', label: 'Juzgado' }
    ];
    if (esA) {
        tabs.push({ id: 'tab3', icon: 'fa-clipboard-list', label: 'Intervenciones' });
        tabs.push({ id: 'tab4', icon: 'fa-notes-medical', label: 'Evaluaciones' });
    }
    tabs.push({ id: 'tab5', icon: 'fa-file-signature', label: 'Informe' });
    tabs.push({ id: 'tab6', icon: 'fa-exclamation-triangle', label: 'Alertas' });

    let html = '';
    tabs.forEach((t, idx) => {
        const active = idx === 0 ? 'active' : '';
        const badgeId = `badge-${t.id}`;
        html += `<button class="tab-btn ${active}" data-tab="${t.id}" onclick="activarTab('${t.id}')">
                    <i class="fas ${t.icon}"></i> ${t.label}
                    <span class="badge-guardado" id="${badgeId}" style="display:none;">✓</span>
                 </button>`;
    });
    container.innerHTML = html;

    document.querySelectorAll('.tab-pane').forEach(el => {
        el.style.display = 'none';
    });
    tabs.forEach(t => {
        const pane = document.getElementById(t.id);
        if (pane) pane.style.display = 'block';
    });
    if (tabs.length > 0) {
        const firstId = tabs[0].id;
        document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
        document.getElementById(firstId).classList.add('active');
        document.querySelector(`[data-tab="${firstId}"]`).classList.add('active');
    }
    if (esA) {
        actualizarIntervenciones();
    }
}

function activarTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    if (tabId === 'tab5') actualizarInforme();
    if (tabId === 'tab6') actualizarAlertas();
}

// ============================================================
// INTERVENCIONES (Tab3)
// ============================================================
function actualizarIntervenciones() {
    const hechoPrincipal = hechosAgregados.length > 0 ? hechosAgregados[0].hecho : '';
    const container = document.getElementById('intervencion-contenido');
    if (hechoPrincipal === '229') {
        container.innerHTML = generarCuestionarioRiesgo();
        const causa = getCausaActual();
        if (causa && causa.intervenciones && causa.intervenciones.tipo === 'cuestionario') {
            restaurarCuestionario(causa.intervenciones);
        }
    } else if (hechoPrincipal === '225') {
        container.innerHTML = generarLiquidacionYdiligencias();
        const causa = getCausaActual();
        if (causa && causa.intervenciones && causa.intervenciones.tipo === 'liquidacion') {
            restaurarLiquidacion(causa.intervenciones);
        }
    } else {
        container.innerHTML = '<p class="text-muted">No hay intervenciones específicas para este tipo de causa.</p>';
    }
}

// ============================================================
// CUESTIONARIO DE RIESGO (Art. 229)
// ============================================================
function generarCuestionarioRiesgo() {
    let html = `<h4 style="color:#1a2a4a;margin-bottom:12px;">Cuestionario de Nivel de Riesgo</h4><p class="text-muted">Complete todas las preguntas para obtener el nivel de riesgo y las medidas sugeridas.</p>`;
    const secciones = [
        { titulo: '1. Relación entre víctima y supuesto agresor', ids: ['r1.1', 'r1.2', 'r1.3', 'r1.4'] },
        { titulo: '2. Antecedentes de intimidación', ids: ['r2.1', 'r2.2', 'r2.3', 'r2.4'] },
        { titulo: '3. Perfil del supuesto agresor', ids: ['r3.1', 'r3.2', 'r3.3', 'r3.4', 'r3.5', 'r3.6', 'r3.7', 'r3.8', 'r3.9', 'r3.10'] },
        { titulo: '4. Vulnerabilidad de la víctima', ids: ['r4.1', 'r4.2', 'r4.3', 'r4.4', 'r4.5', 'r4.6', 'r4.7', 'r4.8'] },
        { titulo: '5. Trascendencia del dato', ids: ['r5.1', 'r5.2', 'r5.3'] }
    ];
    secciones.forEach(sec => {
        html += `<div class="cuestionario-section"><h4>${sec.titulo}</h4>`;
        sec.ids.forEach(id => {
            const p = preguntasRiesgo.find(q => q.id === id);
            if (p) {
                html += `<div class="cuestionario-pregunta"><span class="pregunta-texto">${p.label}</span>`;
                html += `<select id="riesgo-${p.id}" onchange="calcularRiesgo()"><option value="">-- Seleccionar --</option>`;
                p.opciones.forEach(op => {
                    html += `<option value="${op.valor}">${op.texto}</option>`;
                });
                html += `</select></div>`;
            }
        });
        html += `</div>`;
    });
    html += `
        <div class="form-group"><label>6. Otros factores o circunstancias</label><textarea id="riesgo-otros" rows="2" placeholder="Otras circunstancias relevantes..."></textarea></div>
        <button class="btn btn-primary mt-10" onclick="calcularRiesgo()"><i class="fas fa-calculator"></i> Calcular Riesgo</button>
        <div id="resultado-riesgo-container" class="mt-20"></div>
        <div class="espacio-firma">
            <p><strong>Firma de la víctima (o responsable)</strong></p>
            <div class="firma-line"></div>
            <div class="firma-texto">_________________________</div>
            <div style="font-size:11px;color:#888;margin-top:4px;">Aclaración y CI</div>
        </div>
        <button class="btn btn-success mt-10" onclick="imprimirCuestionario()"><i class="fas fa-print"></i> Imprimir Cuestionario</button>
    `;
    return html;
}

function restaurarCuestionario(datos) {
    if (!datos) return;
    if (datos.respuestas) {
        Object.keys(datos.respuestas).forEach(key => {
            const el = document.getElementById(`riesgo-${key}`);
            if (el) el.value = datos.respuestas[key];
        });
    }
    const otrosEl = document.getElementById('riesgo-otros');
    if (otrosEl) otrosEl.value = datos.otros || '';
    if (datos.puntaje) {
        riesgoPuntaje = datos.puntaje;
        riesgoNivel = datos.nivel || '';
        setTimeout(() => calcularRiesgo(), 100);
    }
}

function calcularRiesgo() {
    let total = 0, respondidas = 0;
    preguntasRiesgo.forEach(p => {
        const sel = document.getElementById(`riesgo-${p.id}`);
        if (sel && sel.value !== '') {
            total += parseInt(sel.value);
            respondidas++;
        }
    });
    const container = document.getElementById('resultado-riesgo-container');
    if (respondidas < preguntasRiesgo.length) {
        container.innerHTML = `<div class="resultado-riesgo" style="background:#fff3cd;color:#856404;border-left-color:#ffc107;"><strong>Faltan ${preguntasRiesgo.length - respondidas} preguntas.</strong><br>Complete todas para calcular el nivel de riesgo.</div>`;
        riesgoPuntaje = 0;
        riesgoNivel = '';
        return;
    }
    let nivel = '',
        clase = '';
    if (total <= 25) { nivel = 'BAJO';
        clase = 'bajo'; } else if (total <= 55) { nivel = 'MEDIO';
        clase = 'medio'; } else { nivel = 'ALTO';
        clase = 'alto'; }
    riesgoPuntaje = total;
    riesgoNivel = nivel;
    const medidas = obtenerMedidasProteccion(nivel);
    container.innerHTML = `
        <div class="resultado-riesgo ${clase}"><strong>Puntaje total: ${total} puntos</strong><br><span style="font-size:20px;">Nivel de Riesgo: ${nivel}</span></div>
        <div class="medidas-proteccion"><h5>Medidas de Protección Sugeridas</h5><ul>${medidas.map(m => `<li>${m}</li>`).join('')}</ul></div>
    `;
}

function obtenerMedidasProteccion(nivel) {
    const medidas = {
        'BAJO': [
            'Priorizar la realización de actos o diligencias en los que participe la víctima.',
            'Convocar a la víctima solo en casos necesarios e imprescindibles.',
            'Informar a la víctima acerca de sus derechos y de las instituciones de asistencia gratuita.',
            'Informar a las víctimas acerca de las medidas de autoprotección.',
            'De ser necesario, propiciar la elaboración de un plan personal de seguridad.'
        ],
        'MEDIO': [
            'Impedir que se individualice al sujeto protegido mediante fotografías, grabaciones u otros medios.',
            'Citar a declarar a la víctima en un lugar distinto al domicilio de la sede fiscal.',
            'Solicitar el resguardo policial de la víctima en sus traslados.',
            'Omitir el domicilio, reemplazándolo por el de la sede fiscal.',
            'Requerir rondas periódicas aleatorias de la Policía Nacional del domicilio de la víctima.',
            'Requerir rondas periódicas aleatorias de la escuela donde frecuentan los hijos/as.',
            'Propiciar el contacto telefónico prioritario de la víctima con la Policía Nacional.'
        ],
        'ALTO': [
            'Solicitar la aplicación de la medida cautelar de prisión preventiva del supuesto agresor.',
            'En caso de no ser aplicable, solicitar la prohibición de acercarse a la víctima y a su entorno.',
            'Excepcionalmente, el agente fiscal podrá ordenar custodia permanente de la víctima.',
            'Solicitar la contención, la evaluación psicológica o psiquiátrica y la inspección física de la víctima.',
            'Solicitar al juzgado la producción de la prueba anticipada.',
            'Solicitar al juzgado la reserva de actuaciones, en casos imprescindibles.',
            'Requerir al tribunal la realización del juicio oral y público en forma parcial o totalmente privada.'
        ]
    };
    let todas = [...medidas[nivel]];
    if (nivel === 'ALTO') todas = [...medidas['ALTO'], ...medidas['MEDIO'], ...medidas['BAJO']];
    else if (nivel === 'MEDIO') todas = [...medidas['MEDIO'], ...medidas['BAJO']];
    return todas;
}

function imprimirCuestionario() {
    window.print();
}

// ============================================================
// LIQUIDACIÓN Y DILIGENCIAS (Art. 225)
// ============================================================
function generarLiquidacionYdiligencias() {
    let html = `
        <h4 style="color:#1a2a4a;margin-bottom:12px;">Liquidación de Alimentos</h4>
        <p class="text-muted">Complete los montos para calcular el saldo pendiente.</p>
        <div class="form-row">
            <div class="form-group"><label>Monto que debía abonar (Gs.)</label>
                <input type="number" id="monto-debido" min="0" step="1" value="0" oninput="calcularLiquidacion()">
            </div>
            <div class="form-group"><label>Monto abonado (Gs.)</label>
                <input type="number" id="monto-abonado" min="0" step="1" value="0" oninput="calcularLiquidacion()">
            </div>
        </div>
        <div class="liquidacion-resultado" id="liquidacion-resultado">Saldo: 0 Gs.</div>
        <div class="liquidacion-link">
            <i class="fas fa-external-link-alt" style="color:#1a2a4a;"></i>
            <span><strong>Calcular liquidación alimentaria:</strong></span>
            <a href="https://calculo-incumplimiento.waroiapy.workers.dev" target="_blank">https://calculo-incumplimiento.waroiapy.workers.dev</a>
            <button class="btn btn-primary btn-sm" onclick="window.open('https://calculo-incumplimiento.waroiapy.workers.dev','_blank')"><i class="fas fa-arrow-right"></i> Abrir</button>
        </div>
        
        <hr style="margin:20px 0;border-color:#e0e4ea;">
        
        <h4 style="color:#1a2a4a;margin-bottom:12px;">Diligencias Realizadas</h4>
        <p class="text-muted">Marque las diligencias que ya se han cumplido en la etapa investigativa.</p>
        <div class="diligencias-grid" id="diligencias-container">
    `;

    DILIGENCIAS_ALIMENTOS.forEach(d => {
        html += `
            <div class="diligencia-item">
                <input type="checkbox" id="${d.id}" value="${d.id}" class="diligencia-check">
                <label for="${d.id}" class="diligencia-check-label">${d.label}</label>
            </div>
        `;
    });

    html += `
        </div>
        <div style="margin-top:10px;">
            <button class="btn btn-sm btn-outline" onclick="marcarTodasDiligencias(true)"><i class="fas fa-check-double"></i> Marcar todas</button>
            <button class="btn btn-sm btn-outline" onclick="marcarTodasDiligencias(false)"><i class="fas fa-times"></i> Desmarcar todas</button>
        </div>
    `;
    return html;
}

function restaurarLiquidacion(datos) {
    if (!datos) return;
    const montoDebidoEl = document.getElementById('monto-debido');
    const montoAbonadoEl = document.getElementById('monto-abonado');
    if (montoDebidoEl) montoDebidoEl.value = datos.montoDebido || 0;
    if (montoAbonadoEl) montoAbonadoEl.value = datos.montoAbonado || 0;
    calcularLiquidacion();
    if (datos.diligencias) {
        restaurarDiligencias(datos.diligencias);
    }
}

function marcarTodasDiligencias(estado) {
    document.querySelectorAll('.diligencia-check').forEach(cb => {
        cb.checked = estado;
    });
}

function obtenerDiligenciasMarcadas() {
    const marcadas = [];
    document.querySelectorAll('.diligencia-check:checked').forEach(cb => {
        marcadas.push(cb.value);
    });
    return marcadas;
}

function restaurarDiligencias(marcadas) {
    document.querySelectorAll('.diligencia-check').forEach(cb => {
        cb.checked = marcadas.includes(cb.value);
    });
}

function calcularLiquidacion() {
    const debido = parseFloat(document.getElementById('monto-debido').value) || 0;
    const abonado = parseFloat(document.getElementById('monto-abonado').value) || 0;
    const saldo = debido - abonado;
    const el = document.getElementById('liquidacion-resultado');
    if (saldo > 0) {
        el.textContent = `Saldo pendiente: ${saldo.toLocaleString()} Gs.`;
        el.style.color = '#b33c3c';
    } else if (saldo < 0) {
        el.textContent = `Saldo a favor: ${Math.abs(saldo).toLocaleString()} Gs.`;
        el.style.color = '#2a7d4f';
    } else {
        el.textContent = 'Saldo: 0 Gs. (Totalmente pagado)';
        el.style.color = '#1a2a4a';
    }
}

// ============================================================
// INFORME (Tab5)
// ============================================================
function actualizarInforme() {
    const container = document.getElementById('informe-contenido');
    const causa = getCausaActual();
    if (!causa) {
        container.innerHTML = '<p class="text-muted">Seleccione o cree una causa para generar el informe.</p>';
        return;
    }
    let html = `
        <div class="informe-header">
            <h2 style="color:#1a2a4a;margin-bottom:4px;">INFORME DE CAUSA</h2>
            <p><strong>Nº Causa:</strong> ${causa.numero || 'No especificado'}</p>
            <p><strong>Imputado:</strong> ${causa.imputado || 'No especificado'}</p>
            <p><strong>Carátula:</strong> ${generarCaratulaTexto(causa)}</p>
            <p><strong>Estado:</strong> ${obtenerEstadoLabel(causa.estado || 'activa')}</p>
            ${causa.rebeldiaActiva ? `<p><strong>Rebeldía:</strong> Activa desde ${causa.fechaRebeldia ? new Date(causa.fechaRebeldia).toLocaleDateString('es-ES') : 'fecha no especificada'}</p>` : ''}
            ${causa.fechaVencimiento ? `<p><strong>Vencimiento:</strong> ${new Date(causa.fechaVencimiento).toLocaleDateString('es-ES')}</p>` : ''}
        </div>
        <div style="margin:15px 0;border-top:1px solid #e0e4ea;"></div>
    `;
    if (causa.hechosAgregados && causa.hechosAgregados.length > 0) {
        html += `<h4>Hechos Punibles</h4><ul style="margin:10px 0;padding-left:20px;">`;
        causa.hechosAgregados.forEach(h => {
            const config = CONFIG.hechos[h.hecho];
            html += `<li><strong>${config ? config.label : h.hecho}</strong>`;
            if (h.incisos && h.incisos.length > 0) {
                html += `<ul>`;
                h.incisos.forEach(inc => {
                    const incData = config ? config.incisos.find(i => i.id === inc.id) : null;
                    html += `<li>${incData ? incData.label : inc.id}`;
                    if (inc.numerales && inc.numerales.length > 0) {
                        html += ` (numerales: ${inc.numerales.join(', ')})`;
                    }
                    html += `</li>`;
                });
                html += `</ul>`;
            }
            html += `</li>`;
        });
        html += `</ul>`;
    }
    if (causa.victimas && causa.victimas.length > 0) {
        html += `<h4>Víctimas</h4><ul style="margin:10px 0;padding-left:20px;">`;
        causa.victimas.forEach(v => {
            html += `<li>${v.nombre || 'Sin nombre'}${v.ci ? ' (CI: ' + v.ci + ')' : ''}${v.telefono ? ' - Tel: ' + v.telefono : ''}</li>`;
        });
        html += `</ul>`;
    }
    if (causa.testigos && causa.testigos.length > 0) {
        html += `<h4>Testigos</h4><ul style="margin:10px 0;padding-left:20px;">`;
        causa.testigos.forEach(t => {
            html += `<li>${t.nombre || 'Sin nombre'}${t.ci ? ' (CI: ' + t.ci + ')' : ''}${t.telefono ? ' - Tel: ' + t.telefono : ''}</li>`;
        });
        html += `</ul>`;
    }
    html += `<div style="margin-top:15px;border-top:1px solid #e0e4ea;padding-top:15px;">`;
    html += `<h4>Datos del Juzgado</h4>`;
    html += `<p><strong>Fecha Imputación:</strong> ${causa.fechaImputacion ? new Date(causa.fechaImputacion).toLocaleDateString('es-ES') : 'No especificada'}</p>`;
    html += `<p><strong>AI N°:</strong> ${causa.numAI || 'No especificado'}</p>`;
    html += `<p><strong>Juzgado:</strong> ${causa.numJuzgado || 'No especificado'}</p>`;
    html += `<p><strong>Plazo:</strong> ${causa.plazoInvestigacion || 6} meses</p>`;
    if (causa.rebeldiaActiva) {
        html += `<p><strong>Rebeldía:</strong> Declarada el ${causa.fechaRebeldia ? new Date(causa.fechaRebeldia).toLocaleDateString('es-ES') : 'no especificada'}, resolución N° ${causa.numResolucionRebeldia || 'no especificada'}</p>`;
        if (causa.fechaLevantamientoRebeldia) {
            html += `<p><strong>Levantamiento:</strong> ${new Date(causa.fechaLevantamientoRebeldia).toLocaleDateString('es-ES')}</p>`;
        }
    }
    html += `</div>`;
    html += `
        <div class="espacio-firma">
            <p><strong>Fiscalía N° ____</strong></p>
            <div class="firma-line"></div>
            <div class="firma-texto">Firma y sello</div>
        </div>
    `;
    container.innerHTML = html;
}

// ============================================================
// ALERTAS (Tab6)
// ============================================================
function actualizarAlertas() {
    const container = document.getElementById('alertas-contenido');
    if (causas.length === 0) {
        container.innerHTML = '<p class="text-muted">No hay causas registradas.</p>';
        return;
    }
    let html = '';
    causas.forEach(c => {
        const dias = c.fechaVencimiento ? calcularDiasRestantes(c.fechaVencimiento) : null;
        const estado = c.estado || 'activa';
        let alerta = '';
        if (dias !== null && dias < 0) {
            alerta = '<span class="badge-danger">⚠️ PLAZO VENCIDO</span>';
        } else if (dias !== null && dias <= 15) {
            alerta = '<span class="badge-warning">⏳ Próximo a vencer</span>';
        } else if (c.rebeldiaActiva) {
            alerta = '<span class="badge-danger">🔴 En rebeldía</span>';
        }
        if (!alerta) alerta = '<span class="badge-success">✅ Sin alertas</span>';

        html += `
            <div class="alert-card">
                <div class="alert-card-header" onclick="this.nextElementSibling.classList.toggle('collapsed')">
                    <h4>${c.numero || 'Sin número'} - ${c.imputado || 'Sin imputado'}</h4>
                    <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="alert-card-body">
                    <div class="alert-item"><span class="label">Estado</span><span class="value">${obtenerEstadoLabel(estado)} ${alerta}</span></div>
                    <div class="alert-item"><span class="label">Vencimiento</span><span class="value">${c.fechaVencimiento ? new Date(c.fechaVencimiento).toLocaleDateString('es-ES') : 'No definido'} ${dias !== null ? (dias < 0 ? ` (VENCIDO hace ${Math.abs(dias)} días)` : ` (faltan ${dias} días)`) : ''}</span></div>
                    ${c.rebeldiaActiva ? `<div class="alert-item"><span class="label">Rebeldía</span><span class="value">Activa desde ${c.fechaRebeldia ? new Date(c.fechaRebeldia).toLocaleDateString('es-ES') : 'no especificada'}</span></div>` : ''}
                    <div class="alert-item"><span class="label">Hechos</span><span class="value">${c.hechosAgregados ? c.hechosAgregados.length : 0}</span></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// ============================================================
// IMPRIMIR INFORME
// ============================================================
function imprimirInforme() {
    actualizarInforme();
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
    document.getElementById('tab5').classList.add('active');
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.querySelector('[data-tab="tab5"]').classList.add('active');
    window.print();
}

// ============================================================
// EXPORTAR / IMPORTAR DATOS
// ============================================================
function exportarDatos() {
    const data = JSON.stringify(causas, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `causas_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importarDatos() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(ev) {
            try {
                const data = JSON.parse(ev.target.result);
                if (Array.isArray(data)) {
                    if (confirm(`Se importarán ${data.length} causas. ¿Continuar?`)) {
                        causas = data;
                        guardarEnLocalStorage();
                        renderizarCausas();
                        alert('Datos importados correctamente.');
                    }
                } else {
                    alert('El archivo no contiene un array de causas válido.');
                }
            } catch (err) {
                alert('Error al leer el archivo: ' + err.message);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    cargarDatos();
    renderizarCausas();
    document.getElementById('hecho-selector').addEventListener('change', function() {
        actualizarIncisos();
        actualizarPestanas();
    });
    ['num-causa', 'imputado'].forEach(id => {
        document.getElementById(id).addEventListener('input', generarCaratula);
    });
    document.getElementById('incisos-opciones').addEventListener('change', generarCaratula);
    document.getElementById('fecha-imputacion').addEventListener('change', function() {
        calcularVencimiento();
        actualizarFechaRequerimientoConclusivo();
    });
    document.getElementById('plazo-investigacion').addEventListener('change', function() {
        calcularVencimiento();
        actualizarFechaRequerimientoConclusivo();
    });
    document.getElementById('fecha-rebeldia').addEventListener('change', function() {
        calcularDiasSuspendidos();
        calcularVencimiento();
        actualizarFechaRequerimientoConclusivo();
    });
    document.getElementById('fecha-levantamiento-rebeldia').addEventListener('change', function() {
        calcularDiasSuspendidos();
        calcularVencimiento();
        actualizarFechaRequerimientoConclusivo();
    });
    document.getElementById('rebeldia-activa').addEventListener('change', function() {
        toggleRebeldia();
        calcularVencimiento();
        actualizarFechaRequerimientoConclusivo();
    });
    document.getElementById('fecha-vencimiento-input').addEventListener('change', function() {
        calcularDiasRestantesDesdeFecha();
    });
    actualizarPestanas();
    setTimeout(() => {
        if (causas.length > 0) {
            actualizarAlertas();
        }
    }, 500);
});