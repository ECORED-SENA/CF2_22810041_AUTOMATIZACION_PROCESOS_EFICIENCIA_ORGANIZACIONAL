<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Conceptos y herramientas de automatización
      .row.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img1.png', alt='', style="width: 330px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 La <b>automatización</b> permite estructurar y ejecutar tareas y procesos mediante herramientas tecnológicas, con una mínima intervención humana. Su aplicación en el ámbito informático comprende desde la ejecución de acciones repetitivas hasta la construcción de flujos de trabajo mediante robots de <i>software</i>. En este apartado se abordan sus principales conceptos y características, así como el uso de herramientas de <b>Automatización Robótica de Procesos (RPA)</b> para diseñar y ejecutar este tipo de soluciones.
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Definición y características de la automatización
      p(data-aos="fade-left") La <b>automatización</b> consiste en utilizar herramientas y tecnologías para ejecutar tareas y procesos con una mínima intervención humana. En el ámbito informático, permite configurar una serie de acciones para que sean ejecutadas de manera ordenada y repetitiva por un sistema de <i>software</i>.
      p(data-aos="fade-left") Es importante distinguir entre una <b>tarea</b> y un <b>proceso</b>, ya que ambos conceptos cumplen funciones diferentes dentro de una automatización:
      //- Inicio Tarjetas
      .row.justify-content-center.g-0.mb-3(data-aos="fade-right")
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-5(style="border-radius: 25px 0 0 25px; background-color: #5c657a;")
            .row.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.svg', alt='' style="width:100px").m-auto
            h4.text-white Tarea
            p.text-white Corresponde a una acción específica que debe ejecutar el sistema, como abrir una página <b>web</b>, ingresar un dato o realizar una consulta. Constituye una unidad puntual dentro de una automatización.
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 0 25px 25px 0; background-color: #9af0f3;")
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.svg', style="width:100px").m-auto
            h4.card-title.mb-2 Proceso
            p Puede estar compuesto por varias tareas relacionadas que se ejecutan siguiendo una secuencia determinada para alcanzar un resultado. Integra las diferentes acciones que conforman el flujo de trabajo.
          //- Fin Tarjetas
      p(data-aos="fade-left") Esta distinción permite comprender cómo se estructuran las acciones que posteriormente ejecutará el sistema. En una automatización de <i>software</i>, las acciones que debe realizar el sistema se definen previamente. El robot ejecuta las actividades configuradas y puede utilizar <b>variables, condiciones y estructuras de control</b> para determinar cómo continuar el flujo de trabajo.
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 En este contexto se encuentra la <b>Automatización Robótica de Procesos (RPA)</b>, que utiliza robots de <i>software</i> para realizar actividades que normalmente serían ejecutadas por una persona mediante aplicaciones informáticas. Estos robots pueden interactuar con aplicaciones de escritorio, páginas <i>web</i> y otros sistemas para ejecutar las instrucciones definidas en una automatización.
      p(data-aos="fade-left") Una de las plataformas utilizadas para desarrollar este tipo de soluciones es UiPath. Esta plataforma permite diseñar automatizaciones mediante un entorno en el que se incorporan actividades y se configuran los elementos necesarios para construir el flujo de trabajo. Además, está compuesta por diferentes herramientas que permiten diseñar, ejecutar y administrar las automatizaciones.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.align-items-stretch.mb-3.g-0(data-aos="fade-right")
              .col-lg-6.bg-color-2.d-flex.flex-column.justify-content-center.p-4
                p Una automatización puede aportar los siguientes beneficios:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span <b>Reducción del tiempo</b> empleado en tareas repetitivas. 
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span <b>Disminución de errores</b> asociados a la digitación o transcripción manual. 
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span <b>Ejecución constante</b> de actividades que siguen reglas previamente definidas. 
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span <b>Mayor trazabilidad</b> de las acciones realizadas por el robot. 
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span <b>Liberación de tiempo</b> para que las personas puedan concentrarse en actividades que requieren análisis o toma de decisiones.
              .col-lg-4.d-flex
                figure.mb-0.w-100
                  img.h-100.w-100(src='@/assets/curso/temas/t1/img3.png', alt='', style="object-fit: cover;")
            p(data-aos="fade-left") Estos beneficios permiten reconocer el aporte de la automatización en la ejecución de actividades repetitivas y previamente estructuradas. Para que un proceso pueda ser considerado candidato para una automatización, es conveniente analizar previamente sus características. Generalmente, resultan apropiados aquellos procesos que presentan:
            .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
              .col-lg-4.d-flex
                figure.mb-0.w-100
                  img.h-100.w-100(src='@/assets/curso/temas/t1/img4.png', alt='', style="object-fit: cover;")
              .col-lg-6.bg-color-2.d-flex.flex-column.justify-content-center.p-4
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span Alto volumen de ejecuciones o alta frecuencia. 
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span Reglas de negocio claras y previamente definidas. 
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span Información disponible en formato digital. 
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span Actividades repetitivas que siguen una secuencia determinada. 
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span Pocas excepciones que requieran decisiones basadas en el criterio de una persona. 
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span Aplicaciones y páginas que mantengan una estructura relativamente estable. 
                  li.d-flex.mb-2
                    i.fas.fa-check-circle.me-3
                    span Un beneficio que pueda medirse en términos de tiempo, costo, calidad o reducción de errores.
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img5.png', alt='', style="width: 350px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-6.p-4(data-aos="fade-left")
          p El análisis de estas condiciones permite establecer si las características del proceso son adecuadas para implementar una solución de automatización. En el caso de <b>UiPath</b>, la automatización se construye mediante un <i>workflow</i> o <b>flujo de trabajo</b>, en el cual se organizan las actividades que debe ejecutar el robot. El entorno de <b>UiPath Studio</b> permite crear proyectos, incorporar actividades y administrar elementos como <b>variables, argumentos y estructuras de control.</b>
          p.mb-0 Este componente aborda el concepto de manera práctica. Inicialmente, se realiza la instalación de <b>UiPath</b> y la configuración necesaria para utilizar la herramienta. Posteriormente, se explora el entorno de <b>UiPath Studio</b> y sus principales elementos. Finalmente, se inicia la construcción de una automatización mediante un caso práctico relacionado con la consulta y conversión de valores de moneda.
      p.mb-5(data-aos="fade-left") De esta manera, el proceso de aprendizaje parte del conocimiento general de la automatización y continúa con el uso de una herramienta <b>RPA</b> para construir un robot de <i>software</i> capaz de ejecutar las actividades definidas en un flujo de trabajo.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1.
            span  Esquema general de un sistema automatizado: entradas, procesamiento, salidas y retroalimentación
        figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img6.png', alt='Diagrama explicativo de un sistema automatizado organizado en entradas de datos, documentos y eventos; procesamiento mediante actividades, reglas y variables; y salidas asociadas con resultados, registros y acciones ejecutadas. El control del flujo incorpora condiciones, ciclos y manejo de excepciones que orientan la ejecución del proceso. ', style="width: 1000px;")
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Herramientas de automatización
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img7.png', alt='', style="width: 380px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p La <b>automatización de procesos</b> es una de las características asociadas con la <b>Revolución Industrial 4.0</b> y se apoya en un conjunto de herramientas que permiten controlar, corregir y presentar el estado de diversas tareas y flujos de trabajo, además de generar reportes sobre los procesos de una organización.
          p.mb-0 Existen diferentes herramientas y plataformas destinadas a la automatización de tareas y procesos. Estas soluciones pueden variar según el tipo de proceso que se desea automatizar, las aplicaciones involucradas, la forma de construir la automatización y el nivel de conocimientos técnicos requerido.
      p(data-aos="fade-right") Algunas herramientas están orientadas a la automatización de flujos de trabajo mediante interfaces gráficas, mientras que otras requieren programación para definir las acciones que debe ejecutar el sistema. También existen soluciones especializadas en la automatización de aplicaciones <i>web</i>, pruebas de <i>software</i>, manejo de archivos o integración entre diferentes servicios y aplicaciones.
      p(data-aos="fade-left") La selección de una herramienta debe realizarse de acuerdo con las características y necesidades del proceso que se desea automatizar. Para ello, es conveniente considerar los siguientes aspectos:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            .row.justify-content-center.g-3.mb-4(data-aos="fade-up")
              .col-12.col-sm-6.col-md-4.col-lg-2
                .bg-color-7.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Las aplicaciones que intervienen en el proceso.
              .col-12.col-sm-6.col-md-4.col-lg-2
                .bg-color-7.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 La facilidad de aprendizaje de la herramienta.
              .col-12.col-sm-6.col-md-4.col-lg-2
                .bg-color-7.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Los conocimientos técnicos disponibles.
              .col-12.col-sm-6.col-md-4.col-lg-2
                .bg-color-7.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Las posibilidades de integración con los sistemas existentes.
              .col-12.col-sm-6.col-md-4.col-lg-2
                .bg-color-7.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Las opciones de seguimiento y mantenimiento.
              .col-12.col-sm-6.col-md-4.col-lg-2
                .bg-color-7.p-4.rounded-0.h-100.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Los recursos necesarios para su implementación.
            p(data-aos="fade-left") Estos criterios permiten orientar la elección de una herramienta de acuerdo con las condiciones particulares del proceso y del entorno tecnológico en el que se implementará la automatización.
            p.mb-5(data-aos="fade-left") En este componente se utilizará <b>UiPath</b> como herramienta principal para el desarrollo de automatizaciones mediante <b>Automatización Robótica de Procesos (RPA)</b>. La elección de esta plataforma permite abordar de manera práctica la construcción de un robot de <i>software</i> y recorrer las diferentes etapas necesarias para llevar una automatización desde su diseño hasta su ejecución y administración.
            .row.mb-5.justify-content-center.align-items-center
              .col-12.col-sm-9.col-lg-4.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
                figure.mb-0.text-center
                  img.mx-auto(src='@/assets/curso/temas/t1/img8.png', alt='', style="width: 350px;")
              .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
                p Es importante precisar que <b>UiPath</b> es una de las diferentes alternativas disponibles en el campo de la automatización. Su selección en este componente responde a la necesidad de contar con una plataforma que permita desarrollar los ejercicios y el caso de estudio mediante un entorno gráfico y actividades configurables.
                p.mb-0 Para el desarrollo práctico, se parte de la instalación y configuración de la herramienta y, posteriormente, se avanza hacia la construcción de la automatización. En las siguientes secciones se estudiará específicamente <b>UiPath</b> como plataforma RPA y su entorno de desarrollo, para luego abordar, paso a paso, la creación del robot de <i>software</i>.
            Separador
            //- Inicio Tema1.3
            .row
              #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.3 UiPath como herramienta de automatización (RPA)
            .row.justify-content-center.align-items-center
              .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
                figure.mb-0.text-center
                  img.mx-auto(src='@/assets/curso/temas/t1/img9.png', alt='', style="width: 330px;")
              .col-12.col-lg-8.order-2.order-lg-1.bg-color-3.p-4(data-aos="fade-left")
                p.mb-0 <b>UiPath</b> es una plataforma de <b>Automatización Robótica de Procesos (RPA)</b> que permite diseñar, construir y ejecutar automatizaciones mediante robots de <i>software</i>. A diferencia de un robot físico, el robot de <i>software</i> ejecuta las instrucciones definidas para un proceso e interactúa con las aplicaciones y los sistemas que forman parte de la automatización.
      p(data-aos="fade-left") En el desarrollo de una automatización, <b>UiPath</b> permite representar las acciones que debe realizar el robot mediante un <i>workflow</i> o <b>flujo de trabajo</b>. Este flujo organiza las actividades que se ejecutarán durante el proceso y permite establecer el orden en que deben realizarse las diferentes acciones.
      p(data-aos="fade-left") La plataforma permite trabajar con distintos tipos de aplicaciones, entre ellas, aplicaciones de escritorio y páginas web. El robot de <i>software</i> ejecuta las actividades definidas en el flujo de trabajo y produce los resultados establecidos para el proceso. La plataforma <b>UiPath</b> está compuesta por diferentes elementos que participan en el ciclo de una automatización:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.g-4.mb-4(data-aos="fade-up")              
              .col-12.col-md-4
                .bg-color-8.p-4.h-100.d-flex.flex-column.align-items-center
                  h4.fw-bold.mb-3 UiPath Studio
                  figure.mb-3
                    img.mx-auto(src='@/assets/curso/temas/t1/tarjeta02_1.png', alt='', style='max-width: 250px; width: 100%;')
                  p.mb-0 Entorno en el que se diseñan y construyen las automatizaciones mediante actividades y flujos de trabajo. Permite estructurar las acciones que posteriormente ejecutará el robot de <i>software.</i>              
              .col-12.col-md-4
                .bg-color-8.p-4.h-100.d-flex.flex-column.align-items-center
                  h4.fw-bold.mb-3 Robot
                  figure.mb-3
                    img.mx-auto(src='@/assets/curso/temas/t1/tarjeta02_2.png', alt='', style='max-width: 250px; width: 100%;')
                  p.mb-0 Componente encargado de ejecutar las instrucciones definidas en la automatización. Desarrolla las actividades configuradas en el flujo de trabajo de acuerdo con la secuencia establecida.
            .row.justify-content-center.g-4.mb-4(data-aos="fade-up")
              .col-12.col-md-4
                .bg-color-8.p-4.h-100.d-flex.flex-column.align-items-center
                  h4.fw-bold.mb-3 Assistant
                  figure.mb-3
                    img.mx-auto(src='@/assets/curso/temas/t1/tarjeta02_3.png', alt='', style='max-width: 250px; width: 100%;')
                  p.mb-0 Aplicación que permite al usuario iniciar y gestionar las automatizaciones disponibles desde el equipo. Facilita el acceso a los procesos que han sido configurados para su ejecución.              
              .col-12.col-md-4
                .bg-color-8.p-4.h-100.d-flex.flex-column.align-items-center
                  h4.fw-bold.mb-3 Orchestrator
                  figure.mb-3
                    img.mx-auto(src='@/assets/curso/temas/t1/tarjeta02_4.png', alt='', style='max-width: 250px; width: 100%;')
                  p.mb-0 Consola de administración que permite publicar, programar, ejecutar y supervisar las automatizaciones. Apoya la gestión de los procesos automatizados durante su ejecución.           
      p(data-aos="fade-left") Estos elementos cumplen funciones complementarias y permiten desarrollar una automatización desde su construcción hasta su ejecución y administración.
      .row.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img10.png', alt='', style="width: 330px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 El proceso de aprendizaje se inicia con la instalación de <b>UiPath</b> y el acceso a <b>Automation Cloud</b>. Posteriormente, se reconoce el entorno de <b>UiPath Studio</b> y se crea un proyecto de automatización. Finalmente, se construye y ejecuta un flujo de trabajo utilizando las actividades necesarias para resolver el caso de estudio.
          p La elección de una herramienta de automatización debe considerar aspectos como el tipo de proceso, las aplicaciones que intervienen, la facilidad de integración, los conocimientos requeridos, las posibilidades de seguimiento y mantenimiento y los recursos disponibles para su implementación. Estos criterios permiten seleccionar una solución acorde con las características y necesidades del proceso que se desea automatizar.

</template>

<script>
export default {
  name: 'Tema1',
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