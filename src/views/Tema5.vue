<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Análisis de información

    figure.mb-4(data-aos="fade-down")
      img.w-100(src='@/assets/curso/temas/t5/1.png')
    p.mb-0(data-aos="fade-down") El análisis de información en el ámbito del desarrollo #[em web] es un proceso sistemático que comprende la recolección, el procesamiento, la interpretación y la evaluación de datos cuantitativos y cualitativos derivados del funcionamiento de una aplicación y de la interacción de los usuarios con ella. Este proceso permite identificar patrones de comportamiento, detectar problemas técnicos y obtener evidencias que orienten la mejora continua del sitio o aplicación #[em web].

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto de análisis de información
    p.mb-4(data-aos="fade-down") El análisis de información consiste en transformar los datos obtenidos del funcionamiento de un sitio o aplicación #[em web] en información organizada que pueda ser interpretada y utilizada para la toma de decisiones. Estos datos pueden proceder de diferentes fuentes, como registros de transacciones, métricas de navegación, mapas de calor, tiempos de carga, eventos de interacción y registros de errores HTTP.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bg-C05.p-4.px-lg-5
          .row.align-items-center
            .col-lg-9
              p En el desarrollo #[em web], su propósito es comprender tanto el comportamiento técnico de la aplicación como la forma en que los usuarios interactúan con sus contenidos y funcionalidades. Por ejemplo, el análisis de los tiempos de carga puede evidenciar problemas de rendimiento, mientras que las métricas de navegación pueden revelar rutas frecuentes, puntos de abandono o dificultades durante la interacción.
              p.mb-lg-0 La información obtenida permite sustentar decisiones relacionadas con la optimización del código, la mejora de la usabilidad, la corrección de errores y el seguimiento de objetivos técnicos o de negocio. De esta manera, el análisis proporciona evidencia para orientar acciones de mejora sobre el sitio o aplicación #[em web].
            .col-lg-3.d-none.d-lg-block
              figure
                img.m-auto(src='@/assets/curso/temas/t5/2.svg' style="width: 237px")
        .bg-C02.d-flex.align-items-center.py-3.px-3
          img.me-4(src='@/assets/curso/temas/t5/3.svg' style="width: 80px")
          p.mb-0 El análisis de información convierte los datos disponibles en evidencia útil para comprender el comportamiento de una aplicación y fundamentar decisiones de mejora.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Procedimientos de análisis
    p.mb-4(data-aos="fade-down") El análisis de información requiere un procedimiento organizado que permita trabajar los datos de manera progresiva, desde su obtención hasta su utilización en acciones de mejora. Cada etapa cumple una función específica y debe responder a los objetivos técnicos o funcionales que se desean evaluar.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.C01.color-secundario.py-4.px-5.mb-4(data-aos="fade-down")
          p.mb-0 Las fuentes de información pueden incluir registros del servidor, herramientas de analítica, métricas de rendimiento, eventos de interacción y registros de errores. La selección de los datos depende del propósito del análisis; por ejemplo, un estudio de rendimiento puede centrarse en tiempos de respuesta y carga, mientras que un análisis de interacción puede considerar recorridos y acciones realizadas por los usuarios.
        .d-flex.align-items-center(data-aos="fade-down")
          img.me-4.icono-fijo(src='@/assets/curso/temas/t5/4.svg' style="width: 77px")
          p.mb-0 Este procedimiento se desarrolla como un ciclo continuo, ya que los resultados obtenidos permiten implementar modificaciones y posteriormente evaluar sus efectos mediante nuevos datos. Para organizar este proceso, se consideran cuatro fases fundamentales:

    .bg-banda.bg-banda--t5-1.py-5.mb-5
      .tarjeta.bg-white.p-4
        PasosB.pasos--C01
          .row(titulo="Recolección de datos")
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t5/5.png')
            .col-lg-6
              h4.mb-4 Recolección de datos
              p.mb-0 Esta fase consiste en obtener la información necesaria para evaluar el comportamiento de la aplicación #[em web]. Los datos pueden proceder de registros del servidor, herramientas de analítica, sistemas de monitoreo, métricas de rendimiento y registros de errores. Su selección debe responder al objetivo del análisis para asegurar que la información recopilada sea pertinente y útil.
          .row(titulo="Depuración y filtrado")
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t5/6.png')
            .col-lg-6
              h4.mb-4 Depuración y filtrado
              p.mb-0 Los datos recopilados deben revisarse y organizarse antes de ser analizados. Esta fase permite identificar registros incompletos, duplicados, inconsistentes o irrelevantes y seleccionar únicamente la información necesaria. También pueden aplicarse filtros relacionados con periodos de tiempo, dispositivos, páginas, eventos o tipos de solicitudes.
          .row(titulo="Interpretación de KPI")
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t5/7.png')
            .col-lg-6
              h4.mb-4 Interpretación de KPI
              p.mb-0 La información procesada se analiza mediante indicadores clave de rendimiento (Key Performance Indicators, KPI) relacionados con los objetivos establecidos. Estos indicadores permiten reconocer tendencias, comparar resultados e identificar posibles desviaciones. Su interpretación debe considerar el contexto y la relación entre diferentes métricas para determinar qué aspectos requieren atención o mejora.
          .row(titulo="Optimización y refactorización")
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t5/8.png')
            .col-lg-6
              h4.mb-4 Optimización y refactorización
              p.mb-0 A partir de los resultados del análisis se establecen acciones para corregir problemas o mejorar el funcionamiento de la aplicación. Estas pueden incluir la optimización de recursos, la corrección de errores, la mejora de procesos o la refactorización del código. Una vez implementados los cambios, sus efectos pueden evaluarse mediante una nueva recolección y análisis de datos.

    .row.justify-content-center
      .col-lg-10
        p.mb-4(data-aos="fade-down") Las fases descritas se articulan de manera secuencial y cíclica, de modo que los datos avanzan desde su recolección y depuración hasta su interpretación y posterior utilización en acciones de optimización. Una vez implementadas las mejoras, el proceso puede reiniciarse con la recopilación de nuevos datos para evaluar los resultados obtenidos. La siguiente figura representa gráficamente esta relación:
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          h5 Figura 5.
          span Diagrama del ciclo metodológico de análisis #[em web]
        figure(data-aos="fade-down")
          img.d-none.d-md-block.w-100(src='@/assets/curso/temas/t5/9.svg' alt='Figura 5 que representa el ciclo metodológico de análisis web mediante cuatro fases conectadas de manera secuencial y cíclica: recolección de datos a partir de registros y métricas, depuración y filtrado de la información, interpretación de indicadores clave de rendimiento (KPI), y optimización y refactorización. Las flechas indican la continuidad del proceso y el retorno a la fase inicial para realizar nuevos ciclos de análisis y mejora.')
          img.d-md-none.m-auto(src='@/assets/curso/temas/t5/9-m.svg' alt='Figura 5 que representa el ciclo metodológico de análisis web mediante cuatro fases conectadas de manera secuencial y cíclica: recolección de datos a partir de registros y métricas, depuración y filtrado de la información, interpretación de indicadores clave de rendimiento (KPI), y optimización y refactorización. Las flechas indican la continuidad del proceso y el retorno a la fase inicial para realizar nuevos ciclos de análisis y mejora.')

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Modelos de resultados
    p(data-aos="fade-down") Los resultados obtenidos durante el análisis de información deben organizarse de manera que faciliten su interpretación y permitan relacionar los datos técnicos con el comportamiento de los usuarios. Para ello, pueden utilizarse tableros de control (#[em dashboards]), informes ejecutivos y reportes de seguimiento que integren indicadores relevantes para los objetivos del sitio o aplicación #[em web].
    p.mb-4(data-aos="fade-down") La presentación estructurada de los resultados permite comparar periodos, detectar desviaciones, analizar tendencias y valorar el efecto de las acciones implementadas. Dependiendo del propósito del análisis, los indicadores pueden agruparse en dos grandes categorías:

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-tercer-nivel.mb-4(data-aos="fade-right")
          img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t5/10.svg')
          h3.titulo-tercer-nivel__text A. Métricas de rendimiento técnico
        p.mb-4(data-aos="fade-down") Estas métricas permiten evaluar aspectos relacionados con la velocidad de carga, la capacidad de respuesta y la estabilidad visual de una página #[em web]. Entre las principales métricas se encuentran:
        .bg-C05.p-4.px-lg-5.mb-5(data-aos="fade-down")
          .lista-iconos-divisor
            div
              img(src='@/assets/curso/temas/t5/11.svg')
              p.mb-0 #[b Largest Contentful Paint (LCP).] Mide el tiempo necesario para renderizar el elemento visual de mayor tamaño en la pantalla. Debe ser inferior a 2,5 segundos.
            div
              img(src='@/assets/curso/temas/t5/12.svg')
              p.mb-0 #[b Interaction to Next Paint (INP).] Mide la capacidad de respuesta de una página ante las interacciones del usuario, como #[em clics], toques o pulsaciones de teclado. Se considera adecuado un valor de hasta 200 milisegundos.
            div
              img(src='@/assets/curso/temas/t5/13.svg')
              p.mb-0 #[b Cumulative Layout Shift (CLS).] Mide la estabilidad visual evitando desplazamientos inesperados de elementos en pantalla. Su valor debe ser menor a 0,1.
        .titulo-tercer-nivel.mb-4(data-aos="fade-right")
          img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t5/10.svg')
          h3.titulo-tercer-nivel__text B. Métricas de comportamiento e interacción
        p.mb-4(data-aos="fade-down") Estas métricas permiten analizar la forma en que los usuarios navegan por el sitio, utilizan sus funcionalidades y responden a los contenidos o acciones propuestas. Entre las métricas más utilizadas se encuentran:
        .row
          .col-md-6.mb-4.mb-md-0(data-aos="fade-down")
            .h-100.bg-C09
              img.w-100(src='@/assets/curso/temas/t5/14.png')
              .p-4.px-lg-5
                p.mb-0 #[b Tasa de rebote (#[em bounce rate]).] Porcentaje de sesiones en las que el usuario abandona el sitio desde la página de entrada sin realizar ninguna interacción secundaria.
          .col-md-6(data-aos="fade-down")
            .h-100.bg-C09
              img.w-100(src='@/assets/curso/temas/t5/15.png')
              .p-4.px-lg-5
                p.mb-0 #[b Tasa de conversión (#[em conversion rate]).] Porcentaje de usuarios que completan con éxito una acción objetivo predefinida (por ejemplo, registrarse en un curso o completar una compra).

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Técnicas de evaluación
    p(data-aos="fade-down") Las técnicas de evaluación permiten comprobar si los cambios implementados producen los resultados esperados. A diferencia de las métricas, que describen el comportamiento de la aplicación o de los usuarios, estas técnicas permiten realizar comparaciones o someter el sistema a determinadas condiciones para evaluar su respuesta.
    p.mb-4(data-aos="fade-down") Su aplicación puede orientarse tanto a la experiencia del usuario como al desempeño técnico de la infraestructura. En este contexto, se consideran dos técnicas principales:

    .tarjeta--container.redondeo-20.row.g-0.mb-4(data-aos="fade-down")
      .col-md-6.bg-C05.p-5
        figure.mb-4
          img.m-auto(src='@/assets/curso/temas/t5/16.svg' style="width: 162px")
        h4.text-center.mb-3 Pruebas A/B #[br] (#[em A/B testing])
        p.mb-0 Son experimentos controlados que comparan dos versiones de una misma página, interfaz o elemento #[em web]. Una versión actúa como referencia y la otra incorpora una modificación que se desea evaluar. Ambas se muestran a grupos comparables de usuarios y sus resultados se analizan mediante indicadores previamente definidos, como conversiones, #[em clics] o finalización de una acción.
      .col-md-6.bg-C04.p-5
        figure.mb-4
          img.m-auto(src='@/assets/curso/temas/t5/17.svg' style="width: 162px")
        h4.text-center.mb-3 Pruebas de carga y estrés #[br] (#[em load and stress testing])
        p.mb-0 Permiten evaluar el comportamiento técnico de una aplicación ante diferentes niveles de demanda. Las pruebas de carga analizan el funcionamiento del sistema bajo volúmenes previstos o progresivos de solicitudes, mientras que las pruebas de estrés incrementan la demanda hasta superar las condiciones normales para identificar límites de capacidad, cuellos de botella o posibles fallos.

    .row.justify-content-center
      .col-lg-10
        p.text-center.mb-0(data-aos="fade-down") Estas pruebas pueden ejecutarse mediante herramientas especializadas, como Apache JMeter o k6, que permiten simular solicitudes concurrentes y observar indicadores como tiempos de respuesta, errores y uso de recursos.

    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Conclusiones
    p.mb-4(data-aos="fade-down") El análisis de información constituye un proceso fundamental para la mejora continua de los sitios y aplicaciones #[em web], ya que permite fundamentar las decisiones técnicas y funcionales en datos obtenidos durante su operación. El análisis sistemático de métricas facilita reconocer problemas de rendimiento, estabilidad, accesibilidad e interacción, así como establecer prioridades de intervención de acuerdo con los resultados identificados.

    .row.justify-content-center.mb-4
      .col-lg-10
        .row.g-0.bg-C08.align-items-center.mb-4(data-aos="fade-down")
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/18.png' style="width: 396px")
          .col-lg.p-3.px-lg-5
            p Este enfoque permite que las acciones de mejora no respondan únicamente a apreciaciones subjetivas, sino a evidencias que puedan analizarse y compararse. La optimización de recursos, la refactorización del código, los ajustes de infraestructura o las modificaciones de la interfaz deben relacionarse con indicadores y criterios previamente definidos que permitan comprobar posteriormente el efecto de las decisiones adoptadas.
            p.mb-0 De esta manera, el análisis, la evaluación y la optimización conforman un ciclo de mejora continua en el que los resultados obtenidos orientan nuevas acciones y permiten realizar posteriores mediciones. La selección de la acción técnica dependerá de la métrica analizada, del problema identificado y del contexto particular de la aplicación.
        p.mb-0(data-aos="fade-down") Como síntesis de esta relación, la siguiente tabla presenta ejemplos de métricas asociadas con diferentes dimensiones de un sitio #[em web], las herramientas que pueden utilizarse para su diagnóstico, valores de referencia que requieren atención y posibles acciones técnicas de optimización:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
      h5 Tabla 5.
      span Matriz de métricas y acciones de optimización
    .tabla-a.tabla--C01(data-aos="fade-down")
      table
        thead
          tr
            th(style="width: 21%") Métrica / evaluador
            th(style="width: 21%") Herramienta de diagnóstico
            th(style="width: 21%") Criterio de referencia para la evaluación
            th(style="width: 37%") Acción técnica de optimización
        tbody
          tr
            td.text-center Métrica LCP.
            td PageSpeed Insights o Lighthouse.
            td &gt; 4,0 segundos.
            td Optimizar las dimensiones de las imágenes, convertirlas a formatos WebP o AVIF e implementar #[em lazy loading].
          tr
            td.text-center Tasa de errores 5xx.
            td Registros del servidor Nginx.
            td &gt; 1 % de las peticiones.
            td Ajustar el grupo de conexiones de la base de datos y optimizar consultas SQL.
          tr
            td.text-center Puntuación de accesibilidad.
            td axe DevTools.
            td &lt; 90 puntos.
            td Agregar atributos #[b aria-label] faltantes y corregir la jerarquía de encabezados (h1-h6).
          tr
            td.text-center Tasa de abandono.
            td Google Analytics 4 o Matomo.
            td &gt; 60 % en formulario.
            td Reducir el número de campos obligatorios e implementar validación instantánea en el cliente.
    .bg-C10.p-4.px-lg-5(data-aos="fade-down")
      p.mb-0 #[b Nota:] los valores presentados constituyen criterios de referencia para orientar la evaluación y deben interpretarse de acuerdo con los objetivos, requerimientos y contexto de cada sitio o aplicación #[em web].
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
