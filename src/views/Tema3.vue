<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Orquestación de procesos 
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img1.png', alt='', style="width: 300px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 La <b>orquestación de procesos</b> es la estrategia que permite ejecutar automatizaciones de manera coordinada y eficiente, incluso cuando funcionan en diferentes entornos. Su propósito es identificar tareas, establecer su secuencia y articular flujos de trabajo que pueden ejecutarse de forma paralela para mejorar la velocidad y la eficiencia del proceso.
      p(data-aos="fade-left") De manera análoga a un conductor que coordina los diferentes componentes de un sistema, la orquestación reúne las automatizaciones bajo un mismo control y facilita la comunicación entre ellas. Mientras la <b>automatización</b> se orienta a ejecutar tareas con una mínima intervención humana, la <b>orquestación</b> coordina, organiza y direcciona esas automatizaciones dentro de un entorno común.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Elementos del orquestador
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            p(data-aos="fade-left") En <b>UiPath Orchestrator</b>, la orquestación se administra desde una consola central que permite gestionar los paquetes publicados, las máquinas, las cuentas de robot, las carpetas, los procesos, las ejecuciones y los disparadores de las automatizaciones.
            p(data-aos="fade-left") En el caso práctico, <b>Orchestrator</b> se utiliza para publicar el proyecto <b>cambiomoneda</b>, configurar la infraestructura de ejecución desatendida, crear el proceso, ejecutar un <b>Job</b> y establecer un disparador programado. Los principales elementos que intervienen en la orquestación son los siguientes:
          //- Inicio Accordion 1
          .bg--img_03
            .row.justify-content-center
              .col-lg-10
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                  .row(titulo="Carpetas")
                    p.mb-4 Organizan los recursos de Orchestrator y determinan el contexto en el que se encuentran disponibles los procesos y robots. En el caso práctico se utiliza la carpeta Shared.
                  .row(titulo="Machine Template")
                    p.mb-4 Representa la configuración de la máquina que puede utilizarse para ejecutar automatizaciones. En el caso práctico se configura una máquina <b>Self-hosted</b> con capacidad <b>Production (Unattended)</b>.
                  .row(titulo="Robot Account")
                    p.mb-4 Representa la identidad utilizada para ejecutar la automatización. En el caso práctico se crea una cuenta de robot asociada con una cuenta de Windows de la máquina de ejecución.
                  .row(titulo="Packages")
                    p.mb-4 Contienen las versiones publicadas de los proyectos desarrollados en <b>UiPath Studio</b>. En el caso práctico se publica el paquete <b>cambiomoneda</b>.
                  .row(titulo="Processes")
                    p.mb-4 Permiten disponer en <b>Orchestrator</b> de un paquete publicado para su ejecución. En el caso práctico se utiliza el proceso <b>cambiomoneda</ b>.
                  .row(titulo="Jobs")
                    p.mb-4 Representan ejecuciones concretas de un proceso. En el caso práctico se inicia un <b>Job</b> mediante el <i>Runtime</i> <b>Production (Unattended)</b>.
                  .row(titulo="Triggers")
                    p.mb-4 Permiten programar la ejecución automática de un proceso. En el caso práctico se configura un <b>Time Trigger</b> para <b>cambiomoneda</b>.
                  .row(titulo="Monitoring")
                    p.mb-4 Permite consultar el estado de las ejecuciones y la información relacionada con los <b>Jobs</b>, facilitando el seguimiento de la automatización.
          //- Fin Accordion 1
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img2.png', alt='', style="width: 300px;")
        .col-12.col-lg-8.order-2.order-lg-1.p-4(data-aos="fade-left")
          p Estos elementos permiten administrar de manera centralizada el ciclo de ejecución de una automatización, desde la publicación del paquete hasta su programación y seguimiento.
          p.mb-0 Otros recursos de Orchestrator, como las colas de trabajo, los activos y los mecanismos de alertas, pueden utilizarse en automatizaciones de mayor complejidad. Sin embargo, estos recursos no forman parte de la implementación del caso de estudio.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Publicación y monitoreo de la automatización
      p(data-aos="fade-left") Publicar una automatización consiste en generar desde <b>UiPath Studio</b> un paquete versionado que posteriormente puede ser administrado y ejecutado desde <b>UiPath Orchestrator</b>. En el caso práctico, el proyecto <b>cambiomoneda</b> se publica desde Studio y, posteriormente, se configura como un proceso dentro de la carpeta correspondiente de Orchestrator.
      p(data-aos="fade-left") Antes de ejecutar el proceso, es necesario configurar la infraestructura requerida para la ejecución desatendida. Esta configuración comprende una <b>Machine Template</b>, un <b>Robot Account</b> y su asociación con la carpeta <b>Shared</b>. Posteriormente, la máquina se conecta con <b>Orchestrator</b> mediante <b>UiPath Assistant</b>, utilizando el <b>Client ID</b> y el <b>Client Secret</b> generados para la Machine Template. La conexión debe presentar el estado <b>Connected as Unattended</b>. El procedimiento para publicar y ejecutar la automatización comprende los siguientes pasos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Validar el proyecto
                p Verificar en UiPath Studio que el proyecto no presente errores que impidan su ejecución y comprobar que las actividades de la automatización estén correctamente configuradas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Publicar el proyecto
                p Seleccionar <b>Publish</b> en <b>UiPath Studio</b> y generar el paquete correspondiente al proyecto <b>cambiomoneda</b>. El paquete queda identificado mediante una versión, que posteriormente será seleccionada en <b>Orchestrator</b>.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Configurar la Machine Template
                p En <b>Orchestrator</b>, configurar una <b>Machine Template</b> de tipo <b>Self-hosted (Unattended Robot)</b> y <b>Machine Template (Static)</b>. Para el caso práctico se asigna capacidad <b>Production (Unattended).</b>
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Crear y asociar el <b>Robot Account</b>
                p Crear un Robot Account y configurar la cuenta de Windows que utilizará el robot para ejecutar la automatización. Posteriormente, asociar el Robot Account con la carpeta <b>Shared.</b>
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conectar la máquina con Orchestrator
                p Desde <b>UiPath Assistant</b>, acceder a <b>Preferences</b> → <b>Orchestrator Connection</b>. Seleccionar el tipo de conexión <b>Client ID</b> e ingresar la URL de <b>UiPath Platform</b>, el <b>Client ID</b> y el <b>Client Secret</b> generados por Orchestrator. Una vez establecida la conexión, verificar que el estado corresponda a <b>Connected as Unattended</b>.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Crear el Process
                p En <b>Orchestrator</b>, acceder a <b>Automations → Processes → Add process</b> y seleccionar el paquete <b>cambiomoneda</b> junto con la versión publicada. El proceso queda disponible en la carpeta <b>Shared.</b>
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejecutar un Job
                p Una vez creado el proceso, realizar una primera ejecución controlada mediante un <b>Job</b>. Para ello, seleccionar el <i>Runtime</i> <b>Production (Unattended)</b>, el <b>Robot Account</b> y la <b>Machine</b> correspondiente. Al iniciar el Job, <b>Orchestrator</b> permite consultar su estado y la información asociada con la ejecución.                                
      //- Fin Slideshow
      p(data-aos="fade-left") Una vez completada esta secuencia, es necesario realizar el seguimiento de la ejecución antes de programar la automatización de manera recurrente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Monitoreo de la ejecución
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El <b>monitoreo</b> permite comprobar el estado de los procesos y de sus ejecuciones. Durante una primera ejecución, es conveniente verificar que el <b>Job</b> sea asignado correctamente al <b>Robot Account</b> y a la <b>Machine</b> configurada, y consultar su estado en <b>Orchestrator</b>.
      p(data-aos="fade-left") En el caso práctico, esta ejecución permite comprobar que el paquete sea instalado correctamente y que la automatización <b>cambiomoneda</b> pueda iniciarse mediante el robot desatendido.
      p(data-aos="fade-left") Para fortalecer la administración y el seguimiento de la automatización, se recomienda considerar las siguientes prácticas:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Versionar cada publicación
                p Permite identificar qué versión del paquete se encuentra configurada en Orchestrator y facilita la administración de los cambios realizados en la automatización.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Verificar la conexión de la Machine
                p Permite confirmar que la máquina esté disponible para la ejecución desatendida antes de iniciar un <b>Job</b>, reduciendo posibles fallos relacionados con la infraestructura.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Diferenciar Package, Process y Job
                p Facilita la comprensión de la relación entre el paquete publicado, su configuración como proceso dentro de <b>Orchestrator</b> y cada ejecución concreta realizada mediante un Job.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Comprobar el Robot Account y la Machine
                p Permite confirmar que el proceso se ejecute con la identidad y la infraestructura configuradas para la automatización.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Realizar una primera ejecución controlada
                p Permite comprobar el funcionamiento del proceso antes de programar ejecuciones automáticas y facilita la identificación de posibles inconvenientes de configuración.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Configurar el Trigger después de validar el proceso
                p Reduce el riesgo de programar una automatización que todavía presente errores de ejecución o problemas asociados con su configuración.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Consultar el estado del Job
                p Permite determinar si la automatización se encuentra en ejecución, ha finalizado correctamente o presenta dificultades que requieren revisión.
      //- Fin Slideshow
      p(data-aos="fade-left") La aplicación de estas prácticas contribuye a mantener un mayor control sobre las versiones publicadas, la infraestructura de ejecución y el comportamiento de los procesos administrados desde <b>UiPath Orchestrator.</b>
      p(data-aos="fade-left") Una vez publicado el proceso de automatización, es posible administrarlo desde la consola de <b>UiPath</b>, donde se supervisa su estado y se configuran mecanismos para ejecutar las tareas de manera controlada y programada.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-2
                .row.justify-content-center.mb-5(data-aos="fade-right")
                  .col-md-auto.col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 16.
                      span Consola de administración con los procesos publicados y su estado de ejecución
                    figure
                    img(src='@/assets/curso/temas/t2/tarjeta09_1.png', alt='Captura de pantalla de UiPath Orchestrator en la sección Automations > Processes, con el proceso RPA cambiomoneda, su versión 1.0.4, prioridad media y punto de entrada Main.xaml.', style="width: 100%;").mx-auto
              .col-lg-5.order-1.mb-3.mb-lg-0
                h4 Administración de los procesos publicados
                p La consola de administración permite visualizar los procesos disponibles, consultar su estado de ejecución y realizar seguimiento a las automatizaciones implementadas dentro del entorno.
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-2
                .row.justify-content-center.mb-5(data-aos="fade-right")
                  .col-md-auto.col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 17.
                      span Configuración de un disparador para la ejecución programada del proceso
                    figure
                    img(src='@/assets/curso/temas/t2/tarjeta09_2.png', alt='Captura de pantalla de UiPath Orchestrator con la configuración de un disparador destinado a programar la ejecución automática de un proceso de acuerdo con las condiciones establecidas.', style="width: 100%;").mx-auto
              .col-lg-5.order-1.mb-3.mb-lg-0
                h4 Administración de los procesos publicados
                p La configuración de un disparador permite definir cuándo debe ejecutarse automáticamente un proceso, facilitando la programación de tareas recurrentes sin necesidad de iniciarlas manualmente.
      //- Fin Slideshow


</template>

<script>
export default {
  name: 'Tema3',
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
