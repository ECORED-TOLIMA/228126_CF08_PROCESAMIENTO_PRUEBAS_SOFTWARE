<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-down") En el panorama tecnológico contemporáneo, el desarrollo de aplicaciones y sitios #[em web] ha dejado de ser un proceso meramente estético para convertirse en una disciplina de ingeniería que exige un alto rigor técnico. La masificación de dispositivos con diversas capacidades de procesamiento y resoluciones de pantalla, sumada a la heterogeneidad de los sistemas operativos y navegadores (#[em browsers]), plantea el desafío de construir productos digitales que garanticen una experiencia uniforme, accesible y eficiente para cualquier usuario.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este contexto, el componente formativo adquiere una relevancia estratégica dentro de la formación técnica, al abordar la construcción de sitios #[em web] mediante técnicas de interoperabilidad y protocolos técnicos. La interoperabilidad, entendida como la capacidad de diferentes sistemas informáticos para intercambiar datos de manera transparente y precisa, depende de la adopción de estándares internacionales establecidos por organismos como el World Wide Web Consortium (W3C) y la Internet Engineering Task Force (IETF).

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .cajon.C01.color-secundario.py-4.ps-5.pe-4
          p.mb-0 El propósito central de este material es dotar a los aprendices de los conceptos, herramientas y metodologías fundamentales para abordar el ciclo de vida del desarrollo #[em web]. A lo largo del contenido, se examinan las arquitecturas monolíticas y desacopladas, los protocolos seguros de transferencia de datos, como HTTPS, las mejores prácticas en usabilidad (UX) y accesibilidad (WCAG), así como el uso de herramientas modernas de control de versiones y entornos de desarrollo. Finalmente, se destaca la importancia de evaluar sistemáticamente los resultados mediante analítica de datos, promoviendo una cultura de optimización basada en evidencias e indicadores clave de rendimiento.

    .row.justify-content-center
      .col-lg-10
        p.text-center.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
