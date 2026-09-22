<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    p(data-aos="fade-down") La construcción de sitios #[em web] bajo criterios de interoperabilidad y protocolos técnicos requiere integrar la infraestructura tecnológica, el diseño orientado a la usabilidad y el análisis continuo de información.
    p.mb-5(data-aos="fade-down") El proceso inicia con una arquitectura que define la estructura y el licenciamiento del sistema. Posteriormente, se abordan los protocolos de comunicación y las técnicas de diseño responsivo, procurando que la interfaz responda a criterios de accesibilidad y rendimiento. El desarrollo requiere el uso de herramientas de edición, construcción y control de versiones. Una vez publicado el sitio #[em web] bajo los parámetros de configuración correspondientes, el análisis de información permite recopilar e interpretar métricas que orientan la identificación de oportunidades de mejora y favorecen un ciclo continuo de optimización técnica y funcional.

    figure.mb-5(data-aos="fade-down")
      img.m-auto(src="@/assets/curso/sintesis.svg" alt="Mapa conceptual. Los fundamentos para el desarrollo de aplicaciones web se basan en cinco ejes: arquitectura web, comunicación y diseño web, desarrollo web, sitio web y análisis de información, cada uno con los temas que lo componen." style="width: 1236px")

    .row.justify-content-center
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
