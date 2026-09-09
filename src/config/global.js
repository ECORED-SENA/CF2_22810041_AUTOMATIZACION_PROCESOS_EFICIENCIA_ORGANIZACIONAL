export default {
  global: {
    Name: 'Creación de la automatización del proceso',
    Description:
      'El componente está orientado a la construcción de un robot de <i>software</i> con UiPath: instalación de la herramienta en su versión vigente, reconocimiento del entorno de trabajo, manejo de variables y control de flujo, desarrollo de una automatización a partir de un caso de estudio y orquestación de procesos.',
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
        titulo: 'Conceptos y herramientas de automatización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y características de la automatización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas de automatización',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'UiPath como herramienta de automatización (RPA)',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Creación de la automatización con UiPath',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Entorno de trabajo (<b>workflow</b>)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Variables y tipos de datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Variables y tipos de datos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Control de flujo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Desarrollo de la automatización (caso de estudio)',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Verificación de la automatización',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Manual del proceso automatizado',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Recomendaciones para la elaboración del manual',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Orquestación de procesos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elementos del orquestador',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Publicación y monitoreo de la automatización',
            hash: 't_3_2',
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
        download: 'downloads/dist.pdf',
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
      termino: 'Argumento',
      significado:
        'Elemento que permite intercambiar información entre distintos flujos de trabajo de un proyecto.',
    },
    {
      termino: 'Atendidos',
      significado:
        'Procesos de automatización que requieren intervención humana para su ejecución.',
    },
    {
      termino: 'Automatización',
      significado:
        'Conjunto de procesos que operan con mínima o nula intervención humana para optimizar tareas.',
    },
    {
      termino: 'Casos de prueba',
      significado:
        'Descripción de las pruebas que determinan entradas, condiciones de ejecución y resultados esperados.',
    },
    {
      termino: 'Cola',
      significado:
        'Estructura del orquestador que almacena los elementos de trabajo pendientes de procesar.',
    },
    {
      termino: 'Command Palette',
      significado:
        'Herramienta de la interfaz vigente de UiPath Studio que permite buscar y ejecutar comandos y actividades rápidamente.',
    },
    {
      termino: 'Data Manager',
      significado:
        'Espacio de la versión vigente de UiPath Studio para gestionar variables, argumentos y constantes.',
    },
    {
      termino: 'Desatendidos',
      significado:
        'Procesos de automatización que se ejecutan sin intervención humana.',
    },
    {
      termino: 'Orquestación',
      significado:
        'Estrategia para ejecutar automatizaciones de forma coordinada, encadenando flujos de distintos entornos.',
    },
    {
      termino: 'RPA',
      significado:
        'Automatización robótica de procesos, por sus siglas en inglés.',
    },
    {
      termino: 'Selector',
      significado:
        'Identificador que permite al robot ubicar un elemento dentro de la interfaz de una aplicación.',
    },
    {
      termino: 'UiPath',
      significado: 'Plataforma de automatización robótica de procesos (RPA).',
    },
    {
      termino: 'Variable',
      significado:
        'Valor de un objeto que puede cambiar; se declara con nombre, tipo de dato y alcance.',
    },
    {
      termino: 'Workflow',
      significado:
        'Flujo de trabajo donde se diseña la automatización combinando actividades.',
    },
  ],
  referencias: [
    {
      referencia:
        'International Organization for Standardization. (2021). ISO/IEC/IEEE 29119-3:2021: Software and systems engineering—Software testing—Part 3: Test documentation.',
      link: 'https://www.iso.org/standard/79429.html',
    },
    {
      referencia:
        'International Organization for Standardization. (2021). ISO/IEC/IEEE 29119-4:2021: Software and systems engineering—Software testing—Part 4: Test techniques.',
      link: 'https://www.iso.org/standard/79430.html',
    },
    {
      referencia:
        'International Organization for Standardization. (2022). ISO/IEC/IEEE 29119-1:2022: Software and systems engineering—Software testing—Part 1: General concepts.',
      link: 'https://www.iso.org/standard/81291.html',
    },
    {
      referencia: 'Logicbus. (2021). ¿Qué es automatización?',
      link: 'https://www.logicbus.com.mx/automatizacion.php',
    },
    {
      referencia:
        'Netcall. (s. f.). Liberty RPA: Smarter automation, powered by AI.',
      link: 'https://www.netcall.com/platform/liberty-rpa/',
    },
    {
      referencia:
        'ProcessMaker. (2021, 19 de enero). Automatización de la nube vs. orquestación de la nube: Entendiendo las diferencias.',
      link: 'https://www.processmaker.com/es/blog/cloud-automation-vs-cloud-orchestration/',
    },
    {
      referencia: 'Robocorp. (s. f.). Automation without boundaries.',
      link: '',
    },
    {
      referencia: 'Selenium. (s. f.). Selenium automates browsers. That’s it!',
      link: 'https://www.selenium.dev/',
    },
    {
      referencia: 'UiPath. (s. f.). UiPath Business Automation Platform.',
      link: 'https://www.uipath.com/product',
    },
    {
      referencia: 'UiPath. (s. f.). Install Studio. UiPath Documentation.',
      link: 'https://docs.uipath.com/studio/standalone/latest/user-guide/install-studio',
    },
    {
      referencia:
        'Yooz. (2024, 17 de julio). La importancia y los beneficios de la automatización de procesos.',
      link: 'https://www.getyooz.com/es/blog/la-importancia-de-la-automatizacion-de-procesos',
    },
    {
      referencia: 'Zapier. (s. f.). The easiest way to automate your work.',
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
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
