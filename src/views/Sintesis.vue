<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Automatización de Procesos para la Eficiencia Organizacional
          p.mb-0 
            | Síntesis:
            | creación de la automatización del proceso
      p.mt-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El componente recorre la ruta completa para crear y ejecutar una automatización con UiPath, desde los conceptos y herramientas de automatización hasta la construcción del robot mediante la instalación, el manejo de variables, el control de flujo y el desarrollo del caso de estudio. Finalmente, aborda la publicación y gestión de la automatización en UiPath Orchestrator, incluyendo la configuración, ejecución y programación del proceso. ")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
