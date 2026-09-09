<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Creación de la automatización con UiPath
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img1.png', alt='', style="width: 300px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 La creación de una automatización en <b>UiPath</b> comprende una serie de etapas que permiten pasar desde la preparación del entorno hasta la construcción, ejecución y administración del robot de software. En esta sección se desarrolla, paso a paso, el proceso de instalación y configuración inicial de la herramienta, de acuerdo con la versión vigente utilizada para el desarrollo de las actividades prácticas.
      p(data-aos="fade-left") Antes de iniciar el trabajo en <b>UiPath Studio</b>, es conveniente reconocer el <b>ciclo de vida de una automatización</b>, debido a que la construcción del robot corresponde únicamente a una de sus etapas. Este ciclo comprende la identificación del proceso candidato, su análisis y documentación, el diseño de la solución, la construcción del robot, las pruebas, la publicación y, finalmente, el monitoreo y mantenimiento.
      p(data-aos="fade-left") Considerar estas etapas desde el inicio contribuye a construir automatizaciones más estables y facilita su adaptación ante posibles cambios en las aplicaciones involucradas. Omitir el análisis y el diseño puede generar dificultades cuando se modifican las condiciones, interfaces o componentes del proceso automatizado.
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Instalación de UiPath Studio (versión vigente)
      p(data-aos="fade-left") Para comenzar el desarrollo de las automatizaciones, es necesario instalar <b>UiPath Studio</b>, entorno desde el cual se diseñarán posteriormente los flujos de trabajo.
      p(data-aos="fade-left") El procedimiento de instalación comienza con el acceso a la plataforma de <b>UiPath</b> y la creación o utilización de una cuenta. A partir de esta cuenta se ingresa a <b>UiPath Automation Cloud</b>, desde donde se obtiene el instalador de Studio. Para completar este proceso, se deben seguir los siguientes pasos:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 1. Acceder a UiPath
                      p Ingresar al sitio oficial de UiPath y seleccionar la opción “<i>Try UiPath for Free</i>” para iniciar el proceso de registro o acceder a la plataforma mediante una cuenta existente.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta01_1.svg').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta01_2.svg').img125
                    .col-12.col-lg.text-start
                      h4 Paso 2. Iniciar sesión o registrarse
                      p Utilizar una cuenta de UiPath para acceder a <i>Automation Cloud</i>. El correo empleado durante el registro queda asociado a la cuenta desde la cual se administrará el acceso a los servicios disponibles.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 3. Acceder a <i>Automation Cloud</i>
                      p Una vez iniciada la sesión, ingresar al entorno de UiPath <i>Automation Cloud</i>, desde donde se encuentran las opciones necesarias para obtener las herramientas de desarrollo.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta01_3.svg').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta01_4.svg').img125
                    .col-12.col-lg.text-start
                      h4 Paso 4. Descargar UiPath Studio
                      p Ingresar al R<i>esource Center</i> y seleccionar la opción “<i>Download Studio</i>” para descargar el instalador de UiPath Studio.
                  .row.align-items-center
                    .col-12.col-lg
                      h5 Paso 5. Ejecutar el instalador
                      p Abrir el instalador descargado y seguir las instrucciones que aparecen en pantalla para continuar con la instalación de UiPath.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta01_5.svg').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta01_6.svg').img125
                    .col-12.col-lg.text-start
                      h4 Paso 6. Seleccionar la licencia
                      p Durante la instalación, seleccionar la <i>modalidad Community License</i>, utilizada para el proceso de aprendizaje y práctica.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 7. Seleccionar UiPath Studio
                      p Elegir el perfil correspondiente a UiPath Studio y continuar con la configuración de la instalación. Cuando se solicite el canal de actualización, seleccionar <i>Stable</i> y finalizar el proceso.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta01_7.svg').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta01_8.svg').img125
                    .col-12.col-lg.text-start
                      h4 Paso 8. Iniciar UiPath Studio
                      p Una vez terminada la instalación, abrir UiPath Studio y comprobar que el entorno se encuentre disponible para comenzar a crear proyectos de automatización.
            //- Linea de tiempo
      p(data-aos="fade-left") Una vez completados estos pasos, es necesario realizar una verificación básica de la instalación antes de continuar con la creación del proyecto.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación de la instalación
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img2.png', alt='', style="width: 400px;")
        .col-12.col-lg-8.order-2.order-lg-1.p-4(data-aos="fade-left")
          p Después de instalar la herramienta, es conveniente comprobar que <b>UiPath Studio</b> se inicia correctamente y que la pantalla principal permite acceder a las opciones necesarias para crear un proyecto.
          p.mb-0 También se debe verificar que <b>UiPath Assistant</b> esté disponible en el equipo y que, cuando se vaya a trabajar con aplicaciones <i>web</i>, la extensión correspondiente del navegador se encuentre habilitada. Una vez completada esta verificación, el entorno estará preparado para continuar con el siguiente paso: reconocer la interfaz de <b>UiPath Studio</b> y crear el proyecto de automatización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Requisitos del entorno
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Antes de instalar <b>UiPath</b>, es recomendable verificar que el equipo cumpla los requisitos establecidos para la versión de la herramienta que se utilizará. Estos pueden incluir un sistema operativo compatible, memoria disponible, espacio de almacenamiento, conexión a internet y un navegador compatible cuando la automatización involucre aplicaciones web. Los principales requisitos del entorno son los siguientes:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sistema operativo
                p Windows 10 u 11 de 64 bits. Debe ser compatible con la versión de <b>UiPath Studio</b> que se utilizará durante el desarrollo de las automatizaciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Memoria RAM
                p Mínimo 4 GB; se recomiendan 8 GB o más para proyectos que requieran manejo de datos o una mayor cantidad de actividades y dependencias.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Espacio en disco
                p Se requiere espacio suficiente para la instalación de la herramienta y para las dependencias asociadas con los paquetes de actividades utilizados en los proyectos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Navegador
                p Chrome, Edge o Firefox, con la extensión de <b>UiPath</b> habilitada cuando se requiera automatizar páginas <i>web</i>.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conectividad
                p Conexión a internet para realizar el registro, descargar paquetes y acceder a los servicios disponibles mediante <b><i>Automation Cloud</i></b>.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Cuenta
                p Cuenta de <b>UiPath <i>Automation Cloud</i></b> asociada al correo utilizado durante el proceso de registro y acceso a la plataforma.
      //- Fin Slideshow
      p(data-aos="fade-left") El cumplimiento de estos requisitos facilita la instalación y el funcionamiento adecuado de las herramientas necesarias para desarrollar las automatizaciones.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Consideraciones y problemas frecuentes durante la instalación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Durante el proceso de instalación o configuración inicial pueden presentarse algunas situaciones que impidan utilizar correctamente determinadas funciones de la plataforma. Los siguientes casos sirven como apoyo para identificar posibles causas y acciones recomendadas:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img3.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="No aparece la licencia gratuita")
                p.mb-4 Puede estar relacionado con el uso de un instalador o una cuenta incorrectos. Se recomienda verificar la cuenta utilizada y descargar nuevamente el instalador desde <b><i>Automation Cloud</i></b>.
              .row(titulo="Studio no conecta con la nube")
                p.mb-4 Puede deberse a que la sesión no se ha iniciado correctamente o a la ausencia de conexión a internet. Se recomienda comprobar la conectividad e iniciar sesión con la cuenta registrada.
              .row(titulo="El navegador no responde a la automatización")
                p.mb-4 Puede ocurrir cuando la extensión de <b>UiPath</b> no está instalada o se encuentra deshabilitada. Se recomienda instalarla o habilitarla en el navegador correspondiente.
              .row(titulo="No aparecen algunas actividades")
                p.mb-4 Puede indicar que el paquete correspondiente no está instalado. Se recomienda revisar el administrador de paquetes e instalar el paquete requerido para el proyecto.
      //- Fin Accordion 1
      p(data-aos="fade-left") Estas situaciones deben considerarse como <b>apoyo para la solución de problemas</b> y no como parte del procedimiento principal de instalación. Su identificación permite atender inconvenientes frecuentes antes de avanzar hacia el reconocimiento de la interfaz y la creación del primer proyecto de automatización.
      p(data-aos="fade-left") Para realizar la instalación y configuración inicial de UiPath Studio, es necesario seguir una serie de pasos que permiten acceder a la plataforma, descargar la herramienta y seleccionar las opciones adecuadas para comenzar a desarrollar procesos de automatización:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-2
                .row.justify-content-center.mb-5(data-aos="fade-right")
                  .col-md-auto.col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 2.
                      span Sitio oficial de UiPath con la opción de prueba gratuita
                    figure
                    img(src='@/assets/curso/temas/t2/tarjeta03_1.png', alt='Captura de pantalla del sitio <i>web</i> de UiPath con la opción de prueba gratuita, utilizada como punto de acceso para iniciar el registro o ingresar a los servicios de la plataforma.', style="width: 100%;").mx-auto
              .col-lg-5.order-1.mb-3.mb-lg-0
                h4 Acceso a UiPath
                p En el sitio oficial de <b>UiPath</b> se encuentra disponible la opción de prueba gratuita, que permite iniciar el proceso de acceso a la plataforma y explorar las herramientas disponibles para el desarrollo de automatizaciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-2
                .row.justify-content-center.mb-5(data-aos="fade-right")
                  .col-md-auto.col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 3.
                      span Resource Center de UiPath <i>Automation Cloud</i> con la opción de descarga de Studio
                    figure
                    img(src='@/assets/curso/temas/t2/tarjeta03_2.png', alt='Captura de pantalla de UiPath Automation Cloud correspondiente al Resource Center, donde se encuentra la edición Community y la opción de descarga necesaria para obtener UiPath Studio. ', style="width: 100%;").mx-auto
              .col-lg-5.order-1.mb-3.mb-lg-0
                h4 Descarga de UiPath Studio
                p Desde el Resource Center de UiPath Automation Cloud es posible acceder a los recursos de instalación y realizar la descarga de UiPath Studio, herramienta utilizada para diseñar, configurar y ejecutar procesos automatizados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-2
                .row.justify-content-center.mb-5(data-aos="fade-right")
                  .col-md-auto.col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 4.
                      span Selección de la licencia Community y del perfil UiPath Studio durante la instalación
                    figure
                    img(src='@/assets/curso/temas/t2/tarjeta03_3.png', alt='Captura de pantalla del proceso de instalación de UiPath con las opciones relacionadas con la licencia Community y el perfil UiPath Studio, utilizados para configurar el entorno de desarrollo de automatizaciones. ', style="width: 100%;").mx-auto
              .col-lg-5.order-1.mb-3.mb-lg-0
                h4 Configuración de la licencia y el perfil
                p Durante la configuración inicial se selecciona la licencia Community y el perfil UiPath Studio, opciones que permiten disponer de un entorno adecuado para el aprendizaje, la práctica y el desarrollo de proyectos de automatización.
      //- Fin Slideshow
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Entorno de trabajo (<i>workflow</i>)
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img4.png', alt='', style="width: 500px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p El <i>workflow</i> o <b>flujo de trabajo</b> es el espacio de <b>UiPath Studio</b> en el que se construye una automatización mediante la incorporación y organización de actividades. UiPath Studio permite crear proyectos, diseñar los flujos de trabajo y acceder a diferentes herramientas para configurar, administrar y revisar los elementos que forman parte de la automatización.
          p.mb-0 Desde la pantalla de inicio de <b>UiPath Studio</b> se pueden crear diferentes tipos de proyectos. Entre las opciones disponibles se encuentran <b>Proceso, Biblioteca, Prueba de automatización y Plantilla.</b> Para desarrollar el caso práctico se selecciona <b>Proceso</b>, opción que permite comenzar un nuevo proyecto destinado al diseño de una automatización.
      p(data-aos="fade-left") Al seleccionar <b>Proceso</b>, Studio presenta el formulario de creación del proyecto, en el que se configuran datos como el <b>nombre, la descripción, la ubicación, la compatibilidad y el idioma</b>. Para el caso práctico se crea el proyecto denominado <b>cambiomoneda</b> y, posteriormente, se selecciona <b>Crear</b>.
      p(data-aos="fade-left") Una vez creado el proyecto, <b>UiPath Studio</b> presenta el entorno de diseño. En el panel <b>Explorar</b> se puede consultar la estructura del proyecto, en la que se encuentran elementos como <b>Dependencias, Entidades, Plantillas, Main.xaml y project.json.</b> El archivo <b>Main.xaml</b> corresponde al <i>workflow</i> principal del proyecto.
      p(data-aos="fade-left") En el área central del entorno de diseño se encuentra <b>Main Sequence</b>, estructura inicial en la que se incorporan las actividades que formarán parte de la automatización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Paneles y elementos del entorno
      //- Inicio Accordion 1
      p(data-aos="fade-left") El entorno de <b>UiPath Studio</b> integra diferentes paneles y elementos que facilitan la construcción, configuración y validación del proyecto:
      .bg--img_03
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img5.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Explorar / Project")
                p.mb-4 Permite consultar la estructura del proyecto y acceder a sus elementos, como Main.xaml, project.json y las dependencias. Facilita la navegación entre los componentes que conforman la automatización.
              .row(titulo="Designer")
                p.mb-4 Corresponde al área central en la que se construye el <i>workflow</i>. En el proyecto se presenta inicialmente <b>Main Sequence</b>, estructura en la que se incorporan y organizan las actividades.
              .row(titulo="Properties / Propiedades")
                p.mb-4 Permite consultar y modificar las propiedades del elemento seleccionado. Desde este panel se configuran los parámetros asociados con las actividades y demás componentes del proyecto.
              .row(titulo="Data Manager / Gestor de datos")
                p.mb-4 Permite consultar y administrar los elementos de datos del proyecto, entre ellos <b>variables, argumentos, espacios de nombres y conexiones</b>. Estos elementos apoyan el manejo de la información dentro del flujo de trabajo.
              .row(titulo="Output / Salida")
                p.mb-4 Permite consultar la información generada durante la ejecución del proyecto. Este panel facilita el seguimiento del comportamiento de la automatización durante las pruebas.
              .row(titulo="Error List / Errores")
                p.mb-4 Permite consultar los errores identificados durante el desarrollo y la validación del proyecto. Su uso contribuye a localizar situaciones que deben corregirse antes de ejecutar la automatización.
              .row(titulo="Command Palette")
                p.mb-4 Permite buscar rápidamente comandos y actividades disponibles en <b>UiPath Studio</b>. Facilita la incorporación de elementos al flujo de trabajo sin recorrer los diferentes menús del entorno.
      //- Fin Accordion 1
      p(data-aos="fade-left") Estos componentes permiten trabajar de manera integrada con la estructura, los datos, las actividades y la validación del proyecto.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Command Palette
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img6.png', alt='', style="width: 350px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p La <b>Command Palette</b> permite localizar rápidamente comandos y actividades disponibles en <b>UiPath Studio</b>. En el recurso se utiliza el buscador para localizar actividades y se incluyen opciones como <b>Bandeja de mensajes, Secuencia, Extraer texto, Asignar, If, For Each, Do While y While</b>, entre otras.
          p.mb-0 Esta herramienta facilita la incorporación de elementos al <i>workflow</i> y agiliza la búsqueda de las actividades necesarias para construir la automatización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de proyectos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") <b>UiPath Studio</b> ofrece diferentes opciones para iniciar un proyecto, de acuerdo con el objetivo de la automatización. Entre las alternativas disponibles se encuentran las siguientes:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta04_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Proceso
                            p.text-start Permite comenzar un proyecto destinado al desarrollo de un proceso de automatización. Esta opción se utiliza para estructurar y ejecutar las actividades que conforman el flujo de trabajo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta04_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Biblioteca
                            p.text-start Permite crear componentes reutilizables que pueden incorporarse posteriormente en otros proyectos. Favorece el aprovechamiento de elementos que cumplen funciones comunes en diferentes automatizaciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta04_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Prueba de automatización
                            p.text-start Permite crear un proyecto orientado a la automatización de pruebas. Su propósito es organizar actividades relacionadas con la validación de aplicaciones o procesos mediante flujos automatizados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta04_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Plantilla
                            p.text-start Permite crear una estructura reutilizable para iniciar otros proyectos de automatización. Facilita el uso de una configuración base que puede adaptarse a distintos desarrollos.
            //- Fin Carrusel
            p(data-aos="fade-left") Para el desarrollo del caso práctico se selecciona <b>Proceso</b>, debido a que esta opción permite construir la automatización que se desarrollará durante el componente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura inicial del proyecto
      //- Título nivel 3 - Imagen 
      p(data-aos="fade-left") Después de crear el proyecto <b>cambiomoneda</b>, Studio dispone inicialmente los siguientes elementos:
      .row.justify-content-center.g-3.mb-4(data-aos="fade-up")
        .col-12.col-sm-6.col-md-4.col-lg-2
          .bg-color-3.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
            p.mb-0.fw-bold Dependencias
        .col-12.col-sm-6.col-md-4.col-lg-2
          .bg-color-3.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
            p.mb-0.fw-bold Entidades
        .col-12.col-sm-6.col-md-4.col-lg-2
          .bg-color-3.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
            p.mb-0.fw-bold Plantillas
        .col-12.col-sm-6.col-md-4.col-lg-2
          .bg-color-3.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
            p.mb-0.fw-bold Main.xaml
        .col-12.col-sm-6.col-md-4.col-lg-2
          .bg-color-3.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
            p.mb-0.fw-bold project.json
      p(data-aos="fade-left") Esta estructura organiza los archivos y componentes principales que forman parte del proyecto.
      p(data-aos="fade-left") Al abrir <b>Main.xaml</b>, el diseñador contiene inicialmente los siguientes elementos: <b>Main. Main Sequence.</b>
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-8.bg-color-4.p-4
          p La <b>Main Sequence</b> constituye el espacio inicial en el que se incorporarán las actividades que conformarán posteriormente la automatización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Organización del entorno de trabajo
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img7.png', alt='', style="width: 300px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p.mb-2 El entorno de <b>UiPath Studio</b> permite trabajar de manera integrada con el explorador del proyecto, el diseñador, las propiedades y las herramientas disponibles para administrar los diferentes elementos. Durante el desarrollo también se puede consultar el <b>Gestor de datos</b>, la <b>Salida</b> y la sección de <b>Errores</b>, lo que facilita la construcción y validación del <i>workflow</i>.
          p.mb-0 Esta organización permite desarrollar la automatización de manera progresiva, incorporando las actividades necesarias al diseñador y configurando cada elemento desde sus propiedades correspondientes. A partir de este entorno se estructura el flujo de trabajo que posteriormente ejecutará el robot de <i>software</i>.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 5.
            span  Interfaz de UiPath Studio en su versión vigente, con la cinta compacta y la Command Palette.
        figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img8.png', alt='Captura de pantalla de la interfaz de UiPath Studio con el explorador del proyecto, el área de diseño, el panel de propiedades, el gestor de datos y la Command Palette, componentes utilizados para construir, configurar y administrar un flujo de automatización. ', style="width: 1000px;")
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 6.
            span  Creación de un proyecto de tipo Process: nombre, ubicación y descripción.
        figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img9.png', alt='Captura de pantalla del formulario de creación de un proyecto en UiPath Studio con campos para definir nombre, descripción, ubicación, compatibilidad e idioma antes de generar el nuevo proceso de automatización.', style="width: 1000px;")
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Variables y tipos de datos
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img10.png', alt='', style="width: 400px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p.mb-3 Una <b>variable</b> permite almacenar información que puede cambiar durante la ejecución de una automatización. Cada variable tiene un <b>nombre, un tipo de dato y un alcance</b>, y puede utilizarse para almacenar temporalmente los valores que necesita el flujo de trabajo.
          p En la versión vigente de <b>UiPath</b>, la gestión de variables, argumentos y constantes puede realizarse mediante el <b>Data Manager</b>, que permite administrar estos elementos de manera organizada. Las variables también pueden crearse directamente desde los campos de las actividades cuando se requiere almacenar un valor durante el diseño del flujo.
      p(data-aos="fade-left") En el caso de estudio, las variables permiten almacenar los valores utilizados durante la conversión de monedas y los resultados obtenidos desde la aplicación web. Los principales elementos empleados son los siguientes:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-10
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="resultado (String)")
                p.mb-4 Almacena el texto obtenido mediante la actividad Obtener texto después de realizar la conversión. Se utiliza para conservar temporalmente el resultado recuperado desde la aplicación <i>web</i>.
              .row(titulo="currentItem (String)")
                p.mb-4 Representa el monto correspondiente a cada iteración de la estructura For Each. Su valor cambia a medida que la estructura procesa cada uno de los elementos de la colección.
              .row(titulo="Colección de montos (Array / List de String)")
                p.mb-4 Contiene los diferentes valores que serán procesados mediante For Each. Permite agrupar los montos que ingresarán de manera sucesiva al flujo de automatización.
              .row(titulo="Ruta del archivo (String)")
                p.mb-4 Puede utilizarse para identificar la ubicación del archivo de Excel en el que se registran los resultados generados durante la ejecución del proceso.
      //- Fin Accordion 1
      p(data-aos="fade-left") Estos elementos permiten conservar y transferir la información necesaria entre las diferentes actividades que conforman el flujo de trabajo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Variable resultado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La variable <b>resultado</b> es de tipo <b>String</b>, debido a que la actividad <b>Obtener texto</b> devuelve como texto el contenido capturado desde la aplicación <i>web</i>. Esta variable permite conservar el valor recuperado para utilizarlo posteriormente dentro del flujo. El flujo asociado con esta variable puede representarse mediante:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-6
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 7.
            span Flujo de obtención y almacenamiento de texto desde una aplicación <i>web</i>
        figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img11.png', alt='Diagrama de flujo para obtener información desde una aplicación <i>web</i>que conecta la aplicación con la actividad Obtener texto, recupera el contenido mediante TextString y lo almacena en la variable resultado para utilizarlo posteriormente en la automatización.', style="width: 400px;")
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de datos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") <b>UiPath</b> permite trabajar con diferentes tipos de datos según la información que deba almacenarse o procesarse. Algunos de los más utilizados son los siguientes:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta05_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold String
                            p.text-start Almacena texto. Puede utilizarse, por ejemplo, para conservar un resultado obtenido desde una aplicación <i>web</i> o cualquier información compuesta por caracteres.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta05_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Int32
                            p.text-start Almacena números enteros. Puede emplearse para representar cantidades de elementos, posiciones o contadores dentro de una automatización.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta05_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Double
                            p.text-start Almacena valores numéricos con decimales. Resulta apropiado cuando el proceso requiere trabajar con cantidades que incluyen una parte decimal.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta05_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Boolean
                            p.text-start Almacena uno de dos valores posibles: verdadero o falso. Se utiliza principalmente para representar el resultado de una condición dentro del flujo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta05_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold DateTime
                            p.text-start Almacena información correspondiente a fecha y hora. Puede utilizarse para registrar el momento en que se realiza una ejecución o una determinada actividad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta05_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Array / List
                            p.text-start Almacena una colección de valores. En el caso de estudio, este tipo de estructura puede contener los montos que serán procesados sucesivamente mediante <b>For Each.</b>
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta05_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold DataTable
                            p.text-start Almacena información estructurada en filas y columnas. Puede utilizarse para trabajar con conjuntos de datos obtenidos, por ejemplo, desde archivos de Excel. 
            //- Fin Carrusel
            p(data-aos="fade-left") La selección del tipo de dato debe corresponder con la naturaleza de la información que se requiere almacenar y con las operaciones que se realizarán durante la automatización.
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-8.bg-color-4.p-4
          p <b>Nota</b>. Los tipos <b>Int32, Double, Boolean, DateTime y DataTable</b> se presentan como opciones disponibles para el trabajo con datos en UiPath, pero no deben interpretarse como variables utilizadas directamente en el flujo principal del caso de estudio. En los recursos del caso se emplean principalmente <b>String</b> y una colección asociada con la estructura <b>For Each</b>.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Argumentos y constantes
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Además de las variables, UiPath permite utilizar argumentos y constantes como elementos complementarios para administrar la información dentro de una automatización.
      .row.justify-content-center.g-4.mb-4(data-aos="fade-up")
        .col-12.col-md-6
          .tarjeta.rounded-4.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta06_1.png', alt='', style='object-fit: cover;')
            .bg-color-9.p-4.flex-grow-1
              h4.fw-bold.mb-3.text-white Argumentos
              p.mb-0.text-white Permiten intercambiar información entre diferentes <i><i>workflows</i></i>. Pueden ser de entrada, de salida o de entrada y salida, según la dirección en la que se transmite la información entre los flujos de trabajo.
        .col-12.col-md-6
          .tarjeta.rounded-4.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta06_2.png', alt='', style='object-fit: cover;')
            .bg-color-10.p-4.flex-grow-1
              h4.fw-bold.mb-3 Constantes
              p.mb-0 Permiten representar valores que deben permanecer sin modificaciones durante la ejecución del proceso. Se utilizan cuando determinada información debe conservarse de manera fija dentro de la automatización.
      p.mb-5(data-aos="fade-left") Aunque estos elementos son importantes dentro de <b>UiPath</b>, no forman parte de la lógica principal desarrollada en los recursos del caso de estudio; por esta razón, se presentan como conceptos complementarios.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 8.
            span Data Manager de UiPath Studio con variables, argumentos y constantes del proyecto
        figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img12.png', alt='Captura de pantalla del Data Manager de UiPath Studio con los elementos destinados a administrar variables, argumentos y constantes que permiten almacenar, intercambiar y gestionar información dentro del proyecto de automatización.', style="width: 1000px;")
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Control de flujo
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img13.png', alt='', style="width: 500px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p Las <b>estructuras de control de flujo</b> permiten dirigir el orden en que se ejecutan las actividades de una automatización, tomar decisiones y repetir acciones según las condiciones definidas. Entre las estructuras disponibles en <b>UiPath</b> se encuentran las secuncias, los condicionales y los ciclos.
          p.mb-0 En el caso de estudio se utilizan principalmente las estructuras <b>If y For Each</b>, que permiten validar el resultado obtenido y procesar diferentes valores de conversión de manera repetitiva. Las principales estructuras de control y sus aplicaciones se describen a continuación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-10
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="If")
                p.mb-4 Evalúa una condición y ejecuta una de dos ramas según el resultado. En el caso de estudio, permite verificar si la variable resultado contiene información antes de presentar o registrar el resultado de la conversión.
              .row(titulo="Switch")
                p.mb-4 Selecciona una rama entre varias según el valor de una expresión. Puede utilizarse cuando un proceso necesita ejecutar acciones diferentes de acuerdo con una categoría o un valor determinado.
              .row(titulo="For Each")
                p.mb-4 Recorre cada elemento de una colección y ejecuta las actividades definidas para cada uno. En el caso de estudio, permite procesar los diferentes montos establecidos para realizar las conversiones.
              .row(titulo="While")
                p.mb-4 Repite un bloque de actividades mientras se cumpla una condición y realiza la evaluación antes de cada iteración. Puede emplearse cuando una actividad debe repetirse mientras se mantenga una condición determinada.
              .row(titulo="Do While")
                p.mb-4 Ejecuta el bloque de actividades al menos una vez y evalúa la condición al final de cada iteración. Puede utilizarse cuando una acción debe ejecutarse inicialmente y repetirse mientras se cumpla una condición.
              .row(titulo="Break / Continue")
                p.mb-4 Permite interrumpir un ciclo o continuar con la siguiente iteración. Puede utilizarse para controlar el recorrido de una colección cuando se identifica una condición determinada.
              .row(titulo="Try Catch")
                p.mb-4 Permite capturar errores y definir acciones para su tratamiento. Puede incorporarse para gestionar inconvenientes durante la interacción con una aplicación <i>web</i> o durante la escritura de información en Excel.
              .row(titulo="Retry Scope")
                p.mb-4 Repite una actividad o un bloque hasta que se cumpla una condición o se alcance el número de reintentos configurado. Puede utilizarse como mecanismo de recuperación ante fallos temporales, por ejemplo, cuando un elemento de una página tarda en estar disponible.
      //- Fin Accordion 1
      p(data-aos="fade-left") La selección de estas estructuras depende de la lógica del proceso y del comportamiento que se requiera durante la ejecución de la automatización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 For Each en el caso de estudio
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") En el caso de estudio, la estructura For Each permite procesar varios montos sin duplicar las actividades de conversión. La colección contiene los valores que serán procesados y currentItem representa el valor correspondiente a cada iteración.
      p(data-aos="fade-left") Por ejemplo, se puede utilizar una colección como la siguiente:
      .row.justify-content-center.text-center.text-white.mb-5(data-aos="fade-right")
        .col-lg-4.bg-color-9.p-4
          p.fw-bold New String() {"1000","5000","10000"}
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-4
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 9.
            span Flujo de conversión de valores numéricos
        figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img14.png', alt='Diagrama de flujo de una conversión de valores numéricos basado en un ciclo For Each, donde la variable currentItem toma sucesivamente los montos de una colección para procesarlos mediante las mismas actividades de automatización.', style="width: 400px;")
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            p(data-aos="fade-left") Durante la ejecución, currentItem toma sucesivamente cada uno de los valores contenidos en la colección. De esta manera, las mismas actividades de la automatización se reutilizan para procesar cada monto sin necesidad de construir un flujo independiente para cada valor.      
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 If en el caso de estudio
            //- Título nivel 3 - Imagen
            p(data-aos="fade-left") Después de ejecutar la conversión, la actividad <b>Obtener texto</b> permite capturar el resultado generado por la aplicación web. Este valor se almacena en la variable <b>resultado</b>, de tipo <b>String</b>.
            p(data-aos="fade-left") La estructura <b>If</b> permite verificar que la variable contenga información antes de continuar con el procesamiento. La condición utilizada en el caso de estudio es:
            .row.justify-content-center.text-center.text-white.mb-5(data-aos="fade-right")
              .col-lg-4.bg-color-9.p-4
                p.fw-bold resultado <> ""
            p(data-aos="fade-left") Esta condición comprueba que <b>resultado</b> sea diferente de una cadena vacía. Cuando la condición es verdadera, se puede presentar o registrar el resultado obtenido. Si la condición es falsa, se puede generar un mensaje que indique que no fue posible obtener el resultado.
            p(data-aos="fade-left") De esta manera, <b>If</b> permite tomar una decisión dentro del flujo a partir del contenido almacenado en la variable.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-5
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 10.
            span Validación del resultado obtenido desde una aplicación <i>web</i>
        figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img15.png', alt='Diagrama de validación del resultado obtenido desde una aplicación <i>web</i> mediante una estructura If que comprueba si la variable resultado contiene información y dirige el flujo según se haya obtenido o no un valor de la conversión.', style="width: 500px;")
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo de excepciones
      //- Título nivel 3 - Imagen 
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img16.png', alt='', style="width: 400px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p.mb-3 El <b>manejo de excepciones</b> constituye una consideración importante en el diseño de automatizaciones. En el caso de estudio pueden presentarse situaciones como dificultades para localizar un elemento de la aplicación web, ausencia del resultado de la conversión o inconvenientes durante la escritura de información en Excel.
          p.mb-0 Estas situaciones deben identificarse durante las pruebas y, cuando sea necesario, pueden gestionarse mediante estructuras como <b>Try Catch</b> o mecanismos de reintento. Estas herramientas representan alternativas para mejorar la robustez del proceso, aunque no forman parte del flujo principal implementado en el caso de estudio presentado en los recursos.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios para seleccionar una estructura de control
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La elección de una estructura de control depende de la lógica del proceso que se desea automatizar. Cada tipo de estructura responde a una necesidad específica dentro del flujo:
      .row.justify-content-center.g-4.mb-4(data-aos="fade-up")
        .col-12.col-sm-6.col-lg-4
          .bg-color-11.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t2/tarjeta07_1.svg', alt='', style='max-width: 140px; width: 100%;')
            h4.fw-bold.mb-3 Secuencias
            p.mb-0 Se utilizan cuando las actividades siguen un flujo lineal y deben ejecutarse en un orden determinado. Permiten organizar acciones consecutivas dentro de la automatización.
        .col-12.col-sm-6.col-lg-4
          .bg-color-11.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t2/tarjeta07_2.svg', alt='', style='max-width: 140px; width: 100%;')
            h4.fw-bold.mb-3 Condicionales
            p.mb-0 Permiten tomar decisiones de acuerdo con el cumplimiento de una condición. La ejecución continúa por una ruta u otra según el resultado obtenido.
        .col-12.col-sm-6.col-lg-4
          .bg-color-11.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t2/tarjeta07_3.svg', alt='', style='max-width: 140px; width: 100%;')
            h4.fw-bold.mb-3 Ciclos
            p.mb-0 Permiten repetir actividades cuando es necesario procesar varios elementos o ejecutar una acción mientras se cumpla una condición determinada.
      p(data-aos="fade-left") En el caso de estudio, For Each se utiliza para recorrer los diferentes montos y If para validar que el resultado de la conversión haya sido obtenido antes de continuar con su procesamiento o registro.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 11.
            span Estructuras de control de flujo en el lienzo de diseño de UiPath Studio
        figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img17.png', alt='Captura de pantalla del lienzo de UiPath Studio con estructuras de control de flujo que incluye secuencias para ordenar actividades, condicionales para tomar decisiones y ciclos para repetir acciones durante la ejecución de una automatización.', style="width: 1000px;")
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Desarrollo de la automatización (caso de estudio)
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img18.png', alt='', style="width: 500px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 El caso de estudio consiste en la automatización de un proceso de <b>conversión de monedas</b> mediante una aplicación web. El robot recibe diferentes valores monetarios, ingresa cada monto en la aplicación, selecciona la moneda de origen y la moneda de destino, y ejecuta la conversión. Posteriormente, captura el resultado generado por la aplicación, lo almacena en una variable y valida que la información haya sido obtenida correctamente. Finalmente, el resultado se registra en un archivo de Excel y la automatización se publica en <b>UiPath Orchestrator</b> para su ejecución.
      p(data-aos="fade-left") Antes de construir la automatización, es necesario analizar el proceso e identificar las entradas requeridas, las reglas que debe cumplir, las salidas esperadas y las posibles excepciones. Para el caso de estudio, estos elementos se definen de la siguiente manera:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-10
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Entradas")
                p.mb-4 Comprenden la aplicación <i>web</i> de conversión de monedas, la colección de montos que serán procesados, la moneda de origen, la moneda de destino y la ruta del archivo de Excel en el que se registrarán los resultados.
              .row(titulo="Reglas")
                p.mb-4 Para cada monto de la colección, el robot debe ingresarlo en el campo Amount, seleccionar la moneda de origen y la moneda de destino, ejecutar la conversión y obtener el resultado generado por la aplicación.
              .row(titulo="Salidas")
                p.mb-4 Corresponden al resultado de cada conversión almacenado en la variable resultado, presentado mediante una Bandeja de mensajes y registrado posteriormente en el archivo de Excel.
              .row(titulo="Excepciones")
                p.mb-4 Pueden presentarse cuando la aplicación <i>web</i> no carga, un elemento de la interfaz no está disponible, no se obtiene el texto del resultado o el archivo de Excel no puede utilizarse correctamente.
      //- Fin Accordion 1      
      p(data-aos="fade-left") La definición de estos elementos permite delimitar el comportamiento esperado del robot antes de iniciar la construcción del flujo de trabajo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Variables utilizadas en el caso de estudio
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Con el análisis del proceso definido, se establecen las variables que soportan la automatización. Esta definición permite mantener nombres y tipos de datos coherentes durante la construcción del flujo y facilita posteriormente su mantenimiento.
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t2/tarjeta08_1.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column
              h4.mb-3.text-center resultado
              p.mb-0 String. Almacena el texto obtenido de la aplicación <i>web</i> después de realizar la conversión. Su contenido se utiliza posteriormente para validar y registrar el resultado obtenido.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t2/tarjeta08_2.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column
              h4.mb-3.text-center currentItem
              p.mb-0 String. Representa el monto actual que se procesa en cada iteración del ciclo For Each y permite ingresar sucesivamente los diferentes valores de la colección.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t2/tarjeta08_3.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column
              h4.mb-3.text-center rutaArchivo
              p.mb-0 String. Contiene la ruta del archivo de Excel utilizado para registrar los resultados generados durante la ejecución de la automatización.
      //- Fin Tarjetas
      p(data-aos="fade-left") La variable <b>resultado</b> almacena la salida textual obtenida mediante la actividad <b>Obtener texto</b>. La variable <b>currentItem</b> permite recorrer los diferentes montos definidos en la colección del ciclo <b>For Each</b>, mientras que <b>rutaArchivo</b> permite identificar el archivo de Excel utilizado para registrar los resultados del proceso.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Construcción del flujo de automatización
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La construcción del robot se realiza siguiendo una secuencia definida. Se recomienda ejecutar y verificar el comportamiento del flujo por bloques, en lugar de esperar hasta el final para realizar una única prueba completa.
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img19.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Crear el proyecto")
                p.mb-4 Crear un proyecto de tipo Proceso en UiPath Studio y preparar la secuencia principal en la que se desarrollará la automatización de conversión de monedas.
              .row(titulo="Preparar la aplicación web")
                p.mb-4 Abrir la aplicación <i>web</i> de conversión de monedas y comprobar que los elementos necesarios para la interacción puedan ser identificados desde <b>UiPath Studio</b>.
              .row(titulo="Crear el ciclo For Each")
                p.mb-4 Incorporar una estructura <b>For Each</b> para recorrer la colección de montos que serán procesados. Para el caso práctico se utiliza una colección como New String() {"1000","5000","10000"}.
              .row(titulo="Configurar currentItem")
                p.mb-4 Establecer la variable <b>currentItem</b> como elemento actual del ciclo <b>For Each</b>. En cada iteración, esta variable contiene el monto que será ingresado en la aplicación web.
              .row(titulo="Ingresar el monto")
                p.mb-4 Dentro del <b>For Each</b>, utilizar la actividad de escritura sobre el campo <b>Amount</b> y establecer <b>currentItem</b> como el valor que debe ingresar el robot.
              .row(titulo="Seleccionar las monedas")
                p.mb-4 Seleccionar la moneda de origen y la moneda de destino mediante las actividades de interacción correspondientes. En las pruebas del caso se realizan conversiones como <b>USD → COP</b> y <b>EUR → COP</b>.
      //- Fin Accordion 1
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Ejecutar la conversión")
                p.mb-4 Activar el botón correspondiente de la aplicación <i>web</i> y esperar a que el sistema genere el resultado de la conversión.
              .row(titulo="Capturar el resultado")
                p.mb-4 Utilizar la actividad <b>Obtener texto</b> para recuperar el resultado generado por la aplicación y almacenar su salida <b>TextString</b> en la variable <b>resultado</b>, de tipo <b>String</b>.
              .row(titulo="Validar el resultado")
                p.mb-4 Incorporar una estructura <b>If</b> con la condición resultado <> "" para comprobar que se haya obtenido información antes de utilizar el resultado.
              .row(titulo="Gestionar las ramas del If")
                p.mb-4 En la rama <b>Then</b>, presentar el contenido de <b>resultado</b> mediante una <b>Bandeja de mensajes</b> y utilizarlo para registrar la información en Excel. En la rama <b>Else</b>, presentar un mensaje que indique que no fue posible obtener el resultado.
              .row(titulo="Registrar en Excel")
                p.mb-4 Utilizar la actividad <b>Utilice el archivo de Excel</b> y las actividades de escritura correspondientes para registrar los resultados de las conversiones en las celdas definidas para el ejercicio.
              .row(titulo="Ejecutar y comprobar")
                p.mb-4 Ejecutar el proceso desde <b>UiPath Studio</b> y comprobar que el ciclo recorra los diferentes montos, que la conversión se realice correctamente, que <b>resultado</b> reciba el texto obtenido y que la información se registre en Excel.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img20.png", alt="").img400.m-auto
      //- Fin Accordion 1
      p(data-aos="fade-left") Esta secuencia integra las actividades principales del caso de estudio y permite construir el flujo de manera progresiva, validando cada etapa antes de continuar con la siguiente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro de resultados en Excel
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img21.png', alt='', style="width: 500px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p El archivo de <b>Excel</b> se utiliza para registrar los resultados obtenidos durante la ejecución de la automatización. Para trabajar con este archivo se emplea la actividad <b>Utilice el archivo de Excel</b>, dentro de la cual se incorporan las actividades necesarias para escribir la información. 
          p.mb-0 Mediante la actividad <b>Escribir celda</b> se establece el contenido que debe registrarse y la celda en la que será almacenado. En el caso desarrollado, se utiliza la información contenida en la variable <b>resultado</b> para registrar el valor de la conversión.
      p(data-aos="fade-left") Para organizar la información, también puede establecerse un encabezado en una celda, por ejemplo, <b>RESULTADO DE LA CONVERSIÓN</b>, y registrar posteriormente el resultado obtenido en la celda correspondiente.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                    
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
                p Durante la verificación del registro en Excel, es necesario comprobar los siguientes aspectos:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Que el archivo seleccionado corresponda al configurado en la actividad <b>Utilice el archivo de Excel</b>. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Que las actividades <b>Escribir celda</b> tengan correctamente definidos el contenido y la celda de destino. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Que los cambios realizados en el archivo se guarden al finalizar la ejecución. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Que la información registrada corresponda con los resultados obtenidos durante la automatización. 
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t2/img22.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
      p(data-aos="fade-left") Esta comprobación final permite confirmar que los resultados generados por el robot fueron almacenados correctamente y que el flujo completo, desde la entrada de los montos hasta su registro en Excel, funciona de acuerdo con la lógica definida para el caso de estudio.
      p(data-aos="fade-left") A continuación, se presenta el proceso de construcción y ejecución de la automatización en <b>UiPath Studio</b>, desde la organización de las actividades en el flujo de trabajo hasta la captura de información, su almacenamiento en Excel y la verificación de los resultados obtenidos.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-2
                .row.justify-content-center.mb-5(data-aos="fade-right")
                  .col-md-auto.col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 12.
                      span Secuencia principal de la automatización en el lienzo de diseño
                    figure
                    img(src='@/assets/curso/temas/t2/tarjeta09_1.png', alt='Captura de pantalla de la secuencia principal de la automatización en UiPath Studio con las actividades que integran el proceso de conversión de monedas, desde el procesamiento de los montos hasta la captura, validación y registro de los resultados.', style="width: 100%;").mx-auto
              .col-lg-5.order-1.mb-3.mb-lg-0
                h4 Construcción de la secuencia de automatización
                p La secuencia principal organiza las actividades que conforman el proceso automatizado y permite visualizar el orden en que se ejecutan las acciones definidas dentro del lienzo de diseño.
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-2
                .row.justify-content-center.mb-5(data-aos="fade-right")
                  .col-md-auto.col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 13.
                      span Configuración de la actividad de captura de datos sobre la página de consulta
                    figure
                    img(src='@/assets/curso/temas/t2/tarjeta09_2.png', alt='Captura de pantalla de UiPath Studio con la configuración de una actividad de captura de datos asociada con la página <i>web</i> de consulta, utilizada para recuperar el resultado generado durante la conversión.', style="width: 100%;").mx-auto
              .col-lg-5.order-1.mb-3.mb-lg-0
                h4 Captura de los datos
                p La actividad de captura se configura sobre la página de consulta para identificar y obtener los datos requeridos, estableciendo los elementos que serán procesados posteriormente por la automatización.
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-2
                .row.justify-content-center.mb-5(data-aos="fade-right")
                  .col-md-auto.col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 14.
                      span Escritura de los valores obtenidos en el archivo de Excel de destino
                    figure
                    img(src='@/assets/curso/temas/t2/tarjeta09_3.png', alt='Captura de pantalla de la configuración para registrar información en Excel mediante actividades que escriben los valores obtenidos por la automatización en las celdas definidas del archivo de destino.', style="width: 100%;").mx-auto
              .col-lg-5.order-1.mb-3.mb-lg-0
                h4 Registro de la información en Excel
                p Los valores obtenidos durante la captura se transfieren al archivo de Excel definido como destino, permitiendo almacenar y organizar automáticamente la información generada durante el proceso.
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-2
                .row.justify-content-center.mb-5(data-aos="fade-right")
                  .col-md-auto.col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 15.
                      span Resultado de la ejecución en el panel de salida y en el archivo generado
                    figure
                    img(src='@/assets/curso/temas/t2/tarjeta09_3.png', alt='Captura de pantalla de los resultados de la automatización con información de la ejecución en el panel de salida y los valores almacenados en el archivo generado, utilizados para comprobar el funcionamiento del flujo.', style="width: 100%;").mx-auto
              .col-lg-5.order-1.mb-3.mb-lg-0
                h4 Verificación de los resultados
                p Finalmente, la ejecución permite comprobar el funcionamiento de la automatización mediante la información presentada en el panel de salida y la revisión del archivo generado con los datos procesados.
      //- Fin Slideshow
      Separador
      //- Inicio Tema2.6
      .row
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 Verificación de la automatización
      p(data-aos="fade-left") Que el robot termine su ejecución sin errores no significa necesariamente que cumpla con lo solicitado. La <b>verificación</b> es la etapa en la que se comprueba, de manera documentada, que la automatización responde a los requerimientos acordados con la organización. Se realiza una vez construido el flujo y antes de llevarlo a producción; su resultado constituye la evidencia con la que el cliente puede aceptar o rechazar la solución.
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img23.png', alt='', style="width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-left")
          p Las pruebas aplicadas en esta etapa son <b>pruebas funcionales</b>, también denominadas <b>pruebas de caja negra</b>. Estas se centran en el comportamiento externo de la automatización, sin examinar la forma en que está construido internamente el flujo. Para ello, se proporcionan determinados datos de entrada, se ejecuta la automatización y se compara el resultado obtenido con el resultado esperado.
          p.mb-0 Este enfoque resulta pertinente porque la validación corresponde a la persona responsable del proceso y no exclusivamente a quien desarrolló el robot. El marco de referencia para estas actividades es la norma <b>ISO/IEC/IEEE 29119</b>, cuya parte 3 establece aspectos relacionados con la documentación de las pruebas y cuya parte 4 aborda técnicas para el diseño de casos de prueba. Para comprender el proceso de verificación, es necesario reconocer los siguientes conceptos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta10_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Caso de prueba
                p Conjunto de entradas, condiciones de ejecución y resultados esperados mediante el cual se comprueba el cumplimiento de un requisito específico. Permite establecer de manera estructurada qué se debe probar y bajo qué condiciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta10_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Resultado esperado
                p Comportamiento que debe presentar la automatización cuando el requisito ha sido implementado correctamente. Debe definirse antes de ejecutar la prueba para evitar que se ajuste posteriormente a lo ocurrido.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta10_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Resultado obtenido
                p Comportamiento que efectivamente presenta la automatización durante la ejecución del caso de prueba. Se registra tal como ocurre y posteriormente se compara con el resultado esperado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta10_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Defecto
                p Diferencia identificada entre el resultado obtenido y el resultado esperado. Su registro permite determinar qué aspecto de la automatización debe corregirse.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta10_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Severidad
                p Medida del impacto que tiene un defecto sobre la operación del proceso. Permite priorizar su tratamiento de acuerdo con las consecuencias que puede generar.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta10_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Cobertura
                p Proporción de requisitos que cuentan, al menos, con un caso de prueba destinado a comprobar su cumplimiento. Permite establecer qué parte de los requerimientos ha sido incluida en las pruebas.
      //- Fin Slideshow
      p(data-aos="fade-left") Estos conceptos permiten documentar la verificación de manera consistente y establecer criterios comunes para interpretar sus resultados.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diseño de los casos de prueba
      //- Título nivel 3 - Imagen
      //- Inicio Tarjetas
      p(data-aos="fade-left") Los casos de prueba no deben improvisarse durante la ejecución. Se derivan de los <b>requerimientos identificados en la caracterización del proceso</b>, de manera que cada requisito funcional cuente, como mínimo, con un caso destinado a comprobarlo. Esta correspondencia debe registrarse para sustentar la cobertura alcanzada.
      p(data-aos="fade-left") Para el diseño de los casos pueden utilizarse distintas técnicas. En los procesos administrativos susceptibles de automatización, las siguientes permiten abordar situaciones representativas del comportamiento esperado:

      .row(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta11_1.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Partición de equivalencia
              p.mb-0 Agrupa los datos de entrada en clases que el sistema procesa de manera equivalente y selecciona un representante de cada grupo. En el caso de estudio pueden emplearse, por ejemplo, un valor de divisa válido, un valor vacío y un valor no numérico.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta11_2.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Análisis de valores límite
              p.mb-0 Se concentra en los extremos de los rangos o condiciones definidas, debido a que estos puntos pueden presentar una mayor probabilidad de errores. En el caso de estudio puede aplicarse a la primera ejecución del día y a una ejecución cuando el archivo de control ya contiene registros.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta11_3.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Prueba de escenarios de excepción
              p.mb-0 Consiste en generar de manera controlada una condición anómala para comprobar cómo responde el flujo. Por ejemplo, puede interrumpirse la conexión de red para comprobar que el robot aplique el mecanismo definido, registre el error y evite escribir una fila incompleta.                                 
      //- Fin Tarjetas
      p(data-aos="fade-left") La aplicación de estas técnicas contribuye a diseñar casos de prueba que incluyan tanto el comportamiento esperado como situaciones límite o excepcionales.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                    
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
                p Cada caso debe documentarse con la información necesaria para garantizar su trazabilidad. Como mínimo, debe contener:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Un <b>identificador</b> único. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span El <b>requisito</b> que comprueba. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Las <b>precondiciones</b> necesarias para ejecutarlo. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Los <b>datos de entrada</b>. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Los <b>pasos de ejecución</b>. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span El <b>resultado esperado</b>. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span El <b>resultado obtenido</b>. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span El <b>estado del caso</b>. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span La <b>evidencia</b> que respalda el resultado. 
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t2/img24.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
      p(data-aos="fade-left") La plantilla de ejecución de pruebas anexa a este componente recoge esta estructura y permite consolidar el resumen de la ejecución y la cobertura de los requisitos.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejecución y registro
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La ejecución de las pruebas debe seguir un orden definido. Primero, se prepara el ambiente y los datos requeridos; posteriormente, se ejecuta el caso conforme a lo documentado, se registra lo ocurrido sin modificar el criterio previamente establecido y, finalmente, se adjunta la evidencia correspondiente.
      p(data-aos="fade-left") El <b>resultado esperado</b> debe redactarse antes de ejecutar la prueba. Si se formula después de conocer lo ocurrido, el ejercicio deja de cumplir su función de comprobación y se convierte únicamente en una descripción del comportamiento presentado.
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img25.png', alt='', style="width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p Cuando el resultado obtenido no coincide con el esperado, se debe registrar el defecto, asignar su severidad, corregir el flujo y ejecutar nuevamente el caso completo. Probar únicamente la actividad corregida puede generar riesgos, debido a que una modificación en un punto del flujo puede afectar las actividades posteriores.
          p.mb-0 Después de una corrección, también es conveniente repetir los casos que ya habían sido aprobados para comprobar que los cambios no hayan afectado otras funcionalidades. Esta repetición se denomina <b>prueba de regresión</b>. El estado asignado a cada caso orienta la acción que debe realizarse posteriormente:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta12_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Aprobado
                            p.text-start El resultado obtenido coincide con el resultado esperado. El caso cumple el criterio definido y se puede continuar con la siguiente prueba.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta12_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Fallido
                            p.text-start El resultado obtenido difiere del esperado. Se debe registrar el defecto, asignar su severidad, aplicar la corrección correspondiente y ejecutar nuevamente el caso.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta12_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Bloqueado
                            p.text-start El caso no pudo ejecutarse porque alguna de sus precondiciones no se cumplió. Se debe resolver la condición que impide la prueba y reprogramar su ejecución.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta12_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold No ejecutado
                            p.text-start El caso se encuentra diseñado y documentado, pero aún no ha sido ejecutado. Debe programarse su ejecución dentro del ciclo de pruebas.
            p(data-aos="fade-left") La clasificación permite mantener un registro uniforme del avance de la verificación y facilita la consolidación posterior de los resultados.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Severidad de los defectos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Cuando se identifica un defecto, es necesario determinar su severidad, es decir, el nivel de impacto que puede generar sobre la operación del proceso. Esta clasificación permite priorizar las correcciones antes de la puesta en operación.
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t2/tarjeta13_1.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column
              h4.mb-3.text-center Crítica
              p.mb-0 La automatización se detiene o entrega un dato incorrecto sin generar una advertencia. Este tipo de defecto impide la puesta en operación hasta que se aplique la corrección correspondiente.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t2/tarjeta13_2.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column
              h4.mb-3.text-center Mayor
              p.mb-0 Una funcionalidad no opera de acuerdo con lo especificado, aunque existe una alternativa que permite continuar con el proceso. Debe corregirse antes de la entrega de la solución.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t2/tarjeta13_3.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column
              h4.mb-3.text-center Menor
              p.mb-0 Afecta aspectos de presentación o registro sin comprometer el resultado principal del proceso. Puede documentarse y programarse para una versión posterior, de acuerdo con los criterios establecidos para la entrega.
      //- Fin Tarjetas
      p(data-aos="fade-left") La severidad debe asignarse en función del impacto del defecto y no únicamente de la dificultad técnica necesaria para corregirlo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Informe de resultados
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img26.png', alt='', style="width: 350px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p El cierre de la verificación se formaliza mediante un <b>informe de resultados</b>, cuyo propósito es consolidar la evidencia obtenida durante las pruebas y establecer si la automatización se encuentra en condiciones de pasar a operación.
          p.mb-0 El informe debe responder, como mínimo, a tres aspectos: <b>cuántos casos se diseñaron y aprobaron, qué defectos fueron identificados y cuáles permanecen pendientes, y si la automatización cumple las condiciones necesarias para su puesta en operación.</b> La estructura del informe puede organizarse de la siguiente manera:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta14_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Alcance de la prueba
                p Incluye el proceso sometido a verificación, la versión de la automatización y el ambiente en el que se realizó la ejecución. Permite delimitar las condiciones bajo las cuales se obtuvieron los resultados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Diseño de las pruebas
                p Registra los requisitos comprobados, las técnicas utilizadas y la cantidad de casos asociados con cada requisito. Permite establecer la relación entre requerimientos y cobertura.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Resultados
                p Consolida los casos aprobados, fallidos, bloqueados y no ejecutados, junto con el porcentaje de cumplimiento obtenido durante la ejecución.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Defectos
                p Contiene el listado de los defectos identificados, su nivel de severidad y el estado de las correcciones aplicadas o pendientes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conclusión y recomendación
                p Presenta el concepto final sobre la puesta en operación de la automatización y señala las acciones que deben completarse antes de su aceptación definitiva.
      //- Fin Slideshow
      p(data-aos="fade-left") El informe de resultados, junto con la plantilla de pruebas diligenciada y la secuencia construida, constituye la evidencia documental del cumplimiento de los requerimientos definidos para la automatización.
      Separador
      //- Inicio Tema2.7
      .row
        #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.7 Manual del proceso automatizado
      p(data-aos="fade-left") Una automatización que solo puede ser comprendida por la persona que la construyó genera una dependencia que puede afectar su operación y mantenimiento. Si esa persona cambia de rol o deja de participar en el proceso, la organización puede quedar con un robot difícil de operar, ajustar o detener. El <b>manual del proceso automatizado</b> permite reducir esta dependencia, ya que documenta el proceso tal como quedó implementado y reúne la información necesaria para su operación y mantenimiento.
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img27.png', alt='', style="width: 350px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p Este manual no debe confundirse con el <b>documento de definición del proceso</b>, debido a que este último describe la situación previa y sirve como insumo para la construcción de la automatización. El manual, en cambio, se elabora al finalizar el desarrollo, una vez que la automatización ha superado las pruebas, y debe reflejar la solución que efectivamente quedó en operación.
          p.mb-0  Uno de sus elementos centrales es el <b>diagrama del proceso</b>, en el que se representa el modelo propuesto e incluyen las actividades asumidas por el robot dentro de su propio carril, junto con los puntos en los que intervienen las personas. Las principales secciones que debe contener el manual son las siguientes:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img28.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Identificación")
                p.mb-4 Incluye el nombre del proceso, el área responsable, la versión del documento y la fecha de elaboración. Estos datos permiten reconocer y controlar el documento dentro de la organización.
              .row(titulo="Objetivo")
                p.mb-4 Describe qué resuelve la automatización, preferiblemente en una o dos frases y mediante un lenguaje comprensible para el negocio.
              .row(titulo="Alcance")
                p.mb-4 Define el punto en el que inicia y termina el proceso automatizado, así como las actividades o situaciones que quedan por fuera de su cobertura.
              .row(titulo="Responsables")
                p.mb-4 Identifica quién opera la automatización, quién realiza su supervisión y quién se encarga de su mantenimiento. Esta asignación facilita la continuidad operativa.
              .row(titulo="Diagrama del proceso")
                p.mb-4 Presenta el modelo del proceso propuesto, con el carril correspondiente al robot y los puntos en los que interviene una persona. Permite comprender la distribución de responsabilidades dentro del flujo.
      //- Fin Accordion 1
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Descripción de las actividades")
                p.mb-4 Explica qué hace el robot en cada etapa, junto con los sistemas y las pantallas que utiliza durante la ejecución.
              .row(titulo="Datos y sistemas involucrados")
                p.mb-4 Registra las fuentes de información, los archivos de entrada y salida, y las rutas en las que se encuentran ubicados.
              .row(titulo="Reglas de negocio")
                p.mb-4 Contiene las condiciones que el proceso debe cumplir en todos los casos y que determinan parte del comportamiento de la automatización.
              .row(titulo="Excepciones y su tratamiento")
                p.mb-4 Describe las situaciones que se apartan del flujo normal e indica la respuesta que debe ejecutar el robot en cada caso.
              .row(titulo="Requisitos de ejecución")
                p.mb-4 Especifica las condiciones necesarias para operar la automatización, como equipo, credenciales, permisos, horario y frecuencia de ejecución.
              .row(titulo="Control de versiones")
                p.mb-4 Registra los cambios realizados sobre la automatización y la fecha correspondiente. Permite mantener trazabilidad sobre las modificaciones efectuadas.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img29.png", alt="").img400.m-auto
      //- Fin Accordion 1
      p(data-aos="fade-left") Esta estructura permite que el manual funcione como un recurso de consulta para la operación, el seguimiento y el mantenimiento de la automatización.
      Separador
      //- Inicio Tema2.8
      .row
        #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.8 Recomendaciones para la elaboración del manual
      p(data-aos="fade-left") Al redactar el manual del proceso automatizado, es conveniente considerar las siguientes recomendaciones:
      .row.justify-content-center.g-4.mb-4.pt-5(data-aos="fade-up")
        .col-12.col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta.bg-color-3.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t2/tarjeta15_1.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Redactar para una persona que no construyó el robot
            p.mb-0 Las instrucciones deben ser comprensibles sin necesidad de conocer el interior del flujo de automatización.
        .col-12.col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta.bg-color-3.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t2/tarjeta15_1.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Evitar duplicar información que ya se encuentra en el proyecto.
            p.mb-0 El manual debe remitir a los elementos del flujo cuando corresponda, en lugar de transcribir innecesariamente su contenido.
        .col-12.col-sm-6.col-lg-4
          .tarjeta.bg-color-3.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t2/tarjeta15_1.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Actualizar el manual cuando cambie la automatización.
            p.mb-0 Cada modificación relevante del proceso debe reflejarse en el documento para evitar inconsistencias entre la solución implementada y la información utilizada para operarla.
      p(data-aos="fade-left") Mantener el manual actualizado favorece la continuidad operativa y reduce el riesgo de errores derivados del uso de instrucciones que ya no corresponden con el comportamiento real de la automatización.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
