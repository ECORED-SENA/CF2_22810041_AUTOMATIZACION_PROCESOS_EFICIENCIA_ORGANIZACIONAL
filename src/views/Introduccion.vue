<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-right") La automatización permite trasladar tareas repetitivas y basadas en reglas desde la ejecución manual hacia sistemas tecnológicos capaces de realizarlas de manera estructurada y con una intervención humana mínima. Su aplicación contribuye a optimizar los procesos, reducir la ejecución repetitiva de actividades y facilitar que las personas concentren sus esfuerzos en tareas que requieren análisis, toma de decisiones o intervención especializada. En diferentes procesos administrativos y operativos es frecuente encontrar actividades como copiar información entre aplicaciones, validar datos, diligenciar formularios o generar información a partir de datos existentes, las cuales pueden ser susceptibles de automatización.
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 En este componente se aborda la construcción de un <b>robot de <i>software</i></b> mediante <b>UiPath</b>, una plataforma de <b>Automatización Robótica de Procesos (RPA)</b>. Un robot de <i>software</i> no corresponde a un robot físico, sino a una automatización que se ejecuta en un computador o en la nube y que reproduce las acciones previamente definidas para interactuar con diferentes aplicaciones.
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-10.bg-color-2.p-4.mb-0.d-flex.align-items-center.g-0
          p.mb-0 El recorrido inicia con la instalación de <b>UiPath Studio</b> y continúa con el reconocimiento de su entorno de trabajo, el manejo de variables y tipos de datos; y el uso de estructuras de control de flujo. Posteriormente, se desarrolla un caso práctico de conversión de monedas, en el que se construye progresivamente el <i>workflow</i>, se procesan diferentes valores, se obtiene el resultado desde una aplicación <i>web</i> y se registra la información correspondiente. Finalmente, se aborda la orquestación del proceso mediante <b>UiPath Orchestrator</b>, incluyendo la publicación del proyecto, la configuración de la infraestructura de ejecución, la creación del proceso, la ejecución de Jobs y su programación mediante <i>Triggers</i>.
        .col-lg-2.bg-color-3.d-flex.align-items-center.justify-content-center.p-4
          figure
            img(src="@/assets/curso/temas/intro/img2.svg", data-aos="zoom-in", style="width: 200px").mx-auto




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
