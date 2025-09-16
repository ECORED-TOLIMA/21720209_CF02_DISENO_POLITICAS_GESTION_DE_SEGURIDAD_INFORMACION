export default {
  global: {
    componenteFormativo:
      'Formulación de políticas de seguridad de la información',
    descripcionCurso:
      'Este componente enseña a formular, implementar y gestionar políticas de seguridad de la información adaptadas a cada organización. Incluye conceptos, estructuras, redacción y objetivos claros. Aborda el diseño, aprobación, comunicación, implementación y revisión de políticas, promoviendo medidas estratégicas que protejan los activos y fortalezcan la cultura de seguridad en el entorno productivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Políticas de seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Estructura', hash: 't_1_2' },
          { numero: '1.3', titulo: 'Técnica de redacción', hash: 't_1_3' },
          {
            numero: '1.4',
            titulo:
              'Criterios de alineación con características de la organización',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Objetivos de seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Concepto', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Importancia', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Requisitos', hash: 't_2_3' },
          { numero: '2.4', titulo: 'Metodología de diseño', hash: 't_2_4' },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de políticas de seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Concepto', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Diseño', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Aprobación', hash: 't_3_3' },
          { numero: '3.4', titulo: 'Comunicación', hash: 't_3_4' },
          { numero: '3.5', titulo: 'Proceso de implementación', hash: 't_3_5' },
          { numero: '3.6', titulo: 'Revisión', hash: 't_3_6' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_21720209_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Políticas de seguridad de la información',
      referencia:
        'Cámara de Comercio de Honda. (s.f.). <em>Política de seguridad</em>.',
      tipo: 'Documento',
      link:
        'https://www.camarahonda.org.co/wp-content/uploads/2017/09/POLITICADESEGURIDADDELAINFORMACION.pdf',
    },
    {
      tema: 'Gestión de políticas de seguridad de la información',
      referencia:
        'Acuña, G. (s.f.). <em>Guía para escribir una política de Ciberseguridad en una empresa pequeña y mediana</em>. Jaiva Technologies.',
      tipo: 'Sitio <em>web</em>',
      link:
        'https://jaivatechnologies.com/guia-para-politica-de-ciberseguridad-en-pequena-mediana-empresa/',
    },
    {
      tema: 'Proceso de implementación',
      referencia:
        'LATAM Certificaciones TI. (2025, 10 de julio). <em>CISO: Seguridad de la Información: Plan de Implementación de Controles y Política de Seguridad de TI</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=O3I8FXam9FE',
    },
  ],
  glosario: [
    {
      termino: 'Cultura organizacional',
      significado:
        'Conjunto de valores, creencias y normas compartidas por los miembros de una organización, que influyen en su forma de trabajar y en la toma de decisiones. En seguridad de la información, determina el grado de compromiso de todos con la protección de los activos.',
    },
    {
      termino: 'Gestión de políticas',
      significado:
        'Proceso que abarca el diseño, aprobación, comunicación, implementación y revisión de políticas. En seguridad de la información, asegura que las políticas sean efectivas, actualizadas y alineadas con los objetivos de la organización.',
    },
    {
      termino: 'Metodología',
      significado:
        'Conjunto estructurado de pasos, técnicas y herramientas para desarrollar una tarea. En seguridad de la información, guía la formulación de políticas y la aplicación de medidas para proteger los datos.',
    },
    {
      termino: 'Normativa',
      significado:
        'Conjunto de leyes, estándares técnicos y buenas prácticas que orientan a las organizaciones en el diseño, implementación y cumplimiento de políticas de seguridad de la información.',
    },
    {
      termino: 'Objetivo de seguridad',
      significado:
        'Meta específica que busca proteger la confidencialidad, integridad y disponibilidad de la información. Debe ser clara, medible y alineada con las necesidades y requisitos legales de la organización.',
    },
    {
      termino: 'Política de seguridad de la información',
      significado:
        'Documento que establece las directrices y responsabilidades para proteger los activos de información. Sirve de base para políticas más específicas y para la gestión integral de la seguridad.',
    },
    {
      termino: 'Pyme',
      significado:
        'Organizaciones con recursos y personal limitados. En seguridad de la información, requieren políticas adaptadas a su tamaño y capacidades.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'Disciplina que implementa medidas para proteger los datos de una organización, garantizando que se mantengan confidenciales, íntegros y disponibles ante cualquier tipo de amenaza.',
    },
  ],
  referencias: [
    {
      referencia:
        'CYBERZONI. (s.f.). <em>ISO27001 control 5.1 policies for information security</em>.',
      link: 'https://cyberzoni.com/standards/iso-27001/control-5-1/',
    },
    {
      referencia:
        'Duran, L. (2025, 11 de febrero). <em>¿Cómo se elabora la política general de seguridad?</em> Docusign.com.',
      link:
        'https://www.docusign.com/es-mx/blog/desarrolladores/politica-seguridad',
    },
    {
      referencia:
        'Escuela Europea de Excelencia (EEE). (2022, 25 de octubre). <em>Objetivos de seguridad de la información: guía de implementación para sistemas ISO 27001</em>.',
      link:
        'https://www.escuelaeuropeaexcelencia.com/2022/10/objetivos-de-seguridad-de-la-informacion-guia-de-implementacion-para-sistemas-iso-27001/',
    },
    {
      referencia:
        'ESGinnova. (s.f.). 6.2. <em>Objetivos de Seguridad de la información y planes para lograrlos</em>.',
      link:
        'https://www.pmg-ssi.com/norma-27001/6-2-objetivos-de-seguridad-de-la-informacion-y-planes-para-lograrlos/',
    },
    {
      referencia:
        'Fortinet. (s.f.). <em>¿Qué es una política de seguridad de TI?</em>',
      link:
        'https://www.fortinet.com/lat/resources/cyberglossary/it-security-policy',
    },
    {
      referencia:
        'Función Pública. (2020, marzo). <em>Políticas de Operación Proceso de Tecnologías de la Información</em>.',
      link:
        'https://www1.funcionpublica.gov.co/documents/418537/36701283/politica-de-seguridad-de-la-informacion.pdf.pdf/325019e5-a92f-0b44-3676-2356bd71240c?',
    },
    {
      referencia: 'Morgan Hill. (s.f.). <em>ISO/IEC 27002:2022</em>.',
      link:
        'https://www.morganhillcg.com/blog/item/iso-iec-27002-2022-5-1-policies-for-information-security-template',
    },
    {
      referencia: 'Orsys. (s.f.). <em>Política de seguridad</em>.',
      link:
        'https://www.orsys.fr/orsys-lemag/es/glosario/politica-de-seguridad-%F0%9F%9F%A9-documento/',
    },
    {
      referencia:
        'Parker, A. (s.f.). <em>ISO 27001 control 5.1: Policies for information security</em>. Iseo Blue.',
      link: 'https://iseoblue.com/post/iso-27001-control-5-1/',
    },
    {
      referencia:
        'Piranirisk. (2022). <em>Guía para hacer una Política de Seguridad de la Información</em>.',
      link:
        'https://www.piranirisk.com/es/academia/especiales/guia-politica-de-seguridad-de-la-informacion',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Armando Javier López Sierra',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
