export default {
  global: {
    Name: 'Fundamentos para el desarrollo de aplicaciones <em>web</em>',
    Description:
      'Este componente es una guía técnica y pedagógica para desarrollar competencias en maquetación, estructuración y despliegue de soluciones <em>web</em>. En diferentes unidades temáticas aborda fundamentos de arquitectura web, comunicación cliente-servidor (<em>client-server</em>), desarrollo <em>frontend</em> y <em>backend</em>, especificación de requerimientos técnicos y analítica de información, aplicando estándares de interoperabilidad y protocolos de red para la mejora continua del <em>software</em>.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Arquitectura <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos y características',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de arquitectura <em>web</em>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Mapas de navegación y procedimiento para diseñar',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Técnicas de integración y sintaxis de contenidos <em>web</em>',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Características y licenciamiento de la plataforma',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación y diseño <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de comunicación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Protocolos de comunicación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características del diseño <em>web</em>',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Desarrollo <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas de desarrollo <em>web</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas de desarrollo <em>web</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características de las herramientas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sitio <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Definición y características',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos y categorías',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Características de los elementos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Requerimientos funcionales y no funcionales',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Parámetros de configuración, descripción y palabras clave',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de análisis de información',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Procedimientos de análisis',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Modelos de resultados',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Técnicas de evaluación',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Conclusiones',
            hash: 't_5_5',
          },
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228126_CF08_CFA_DU.pdf',
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
  glosario: [
    {
      termino: 'API (Application Programming Interface)',
      terminoHtml: 'API (<em>Application Programming Interface</em>)',
      significado:
        'conjunto de definiciones y mecanismos que permiten la comunicación e integración entre diferentes aplicaciones o componentes de <em>software</em>.',
    },
    {
      termino: 'DNS (Domain Name System)',
      terminoHtml: 'DNS (<em>Domain Name System</em>)',
      significado:
        'sistema que permite asociar nombres de dominio con las direcciones necesarias para localizar recursos y servicios en una red.',
    },
    {
      termino: 'DOM (Document Object Model)',
      terminoHtml: 'DOM (<em>Document Object Model</em>)',
      significado:
        'modelo que representa la estructura de un documento HTML y permite acceder y modificar sus elementos, contenido y propiedades mediante programación.',
    },
    {
      termino: 'Framework',
      terminoHtml: '<em>Framework</em>',
      significado:
        'estructura de desarrollo que proporciona componentes, reglas y herramientas reutilizables para facilitar la construcción y organización de aplicaciones.',
    },
    {
      termino: 'JSON (JavaScript Object Notation)',
      terminoHtml: 'JSON (<em>JavaScript Object Notation</em>)',
      significado:
        'formato ligero de intercambio de datos utilizado para estructurar y transmitir información entre diferentes componentes o sistemas.',
    },
    {
      termino: 'KPI (Key Performance Indicator)',
      terminoHtml: 'KPI (<em>Key Performance Indicator</em>)',
      significado:
        'indicador clave de rendimiento utilizado para medir y analizar el comportamiento de un proceso, sistema o aplicación respecto de objetivos definidos.',
    },
    {
      termino: 'Refactorización',
      significado:
        'proceso de reorganización y mejora de la estructura interna del código sin modificar su comportamiento funcional esperado.',
    },
    {
      termino: 'SLA (Service Level Agreement)',
      terminoHtml: 'SLA (<em>Service Level Agreement</em>)',
      significado:
        'acuerdo que establece niveles y condiciones de servicio esperados, como disponibilidad, rendimiento o tiempos de respuesta.',
    },
    {
      termino: 'TLS (Transport Layer Security)',
      terminoHtml: 'TLS (<em>Transport Layer Security</em>)',
      significado:
        'protocolo criptográfico utilizado para proteger la comunicación mediante mecanismos de cifrado, integridad y autenticación.',
    },
    {
      termino: 'Wireframe',
      terminoHtml: '<em>Wireframe</em>',
      significado:
        'representación esquemática de una interfaz que permite definir la distribución y jerarquía de sus principales elementos antes de su desarrollo visual.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chacon, S. &amp; Straub, B. (2014). Pro Git (2.ª ed.). Apress.',
      link: '',
    },
    {
      referencia:
        'Docker, Inc. (s. f.). Docker Documentation: Get started. Docker Documentation.',
      link: '',
    },
    {
      referencia:
        'ECMA International. (2023). ECMA-262: ECMAScript® 2023 Language Specification (14.ª ed.). ECMA International.',
      link: '',
    },
    {
      referencia:
        'Fielding, R., Nottingham, M. &amp; Reschke, J. (2022). HTTP Semantics (RFC 9110). Internet Engineering Task Force.',
      link: '',
    },
    {
      referencia: 'MDN Web Docs. (s. f.). Web Developer Guides. Mozilla.',
      link: '',
    },
    {
      referencia: 'NGINX. (s. f.). Beginner’s Guide. NGINX Documentation.',
      link: '',
    },
    {
      referencia:
        'World Wide Web Consortium (W3C). (2025). Web Content Accessibility Guidelines (WCAG) 2.1. W3C.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
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
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
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
