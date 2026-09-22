<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Arquitectura #[em web]

    figure.mb-4(data-aos="fade-down")
      img.w-100(src='@/assets/curso/temas/t1/1.png')
    p.mb-0(data-aos="fade-down") La arquitectura web constituye el conjunto de patrones estructurales, principios de diseño y modelos de abstracción que rigen la interacción entre los componentes de #[em software] en una red distribuida. No se limita únicamente a la maquetación o disposición estética del contenido; comprende el diseño conceptual de la infraestructura lógica, la gestión eficiente del flujo de datos, la distribución de servicios y la optimización de recursos informáticos en arquitecturas cliente-servidor (#[em client-server]).

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Conceptos y características
    p(data-aos="fade-down") El diseño de una arquitectura #[em web] robusta exige equilibrar requerimientos técnicos y funcionales para asegurar la continuidad operativa y el rendimiento (#[em performance]) del sistema bajo diversas condiciones de demanda.
    p.mb-5(data-aos="fade-down") Para comprender la estructura y el funcionamiento de una arquitectura #[em web], es necesario reconocer los principales elementos que intervienen en la comunicación, el procesamiento de datos y la organización del sistema. A continuación, se presentan los conceptos fundamentales:

    .row.mb-4
      .col-lg-8.mb-4.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          div(titulo="Cliente (<em>client</em>)")
            p.mb-0 Entidad lógica (generalmente un navegador #[em web] como Chrome, Firefox o Edge, o una aplicación móvil) que realiza solicitudes de recursos mediante protocolos de red.
          div(titulo="Servidor (<em>server</em>)")
            p.mb-0 Sistema de cómputo o proceso informático que escucha de manera continua las peticiones entrantes, procesa la lógica de negocio asociada y retorna una respuesta formateada.
          div(titulo="Patrón Modelo-Vista-Controlador (MVC)")
            p Patrón arquitectónico que desacopla el #[em software] en tres capas fundamentales:
            ul.lista-ul.lista-ul--punto.mb-0
              li
                i.lista-ul__vineta
                span #[b Modelo:] gestiona la lógica de datos y las reglas de negocio.
              li
                i.lista-ul__vineta
                span #[b Vista:] renderiza la interfaz de usuario para la presentación de contenidos.
              li.mb-0
                i.lista-ul__vineta
                span #[b Controlador:] actúa como intermediario, capturando las acciones del usuario en la Vista para invocar las operaciones del Modelo.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/t1/2.svg')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-6
        p.bg-C01.text-center.py-3.px-4.mb-0 Las siguientes son las características clave de la arquitectura #[em web]:

    .bg-banda.bg-banda--t1-1.py-4.mb-4
      ul.lista-ul.lista-ul--punto.mb-4(data-aos="fade-down")
        li
          i.lista-ul__vineta
          span #[b Escalabilidad.] Capacidad de una infraestructura para incrementar sus prestaciones ante una mayor demanda sin degradar la calidad del servicio. Se clasifica en:
      .row.mb-4
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t1/3.svg')
            .tarjeta.tarjeta--C03
              .p-4
                p.mb-2 #[b Escalabilidad vertical (#[em scale up])]
                p.mb-0 Incremento de recursos físicos (procesador, memoria RAM, almacenamiento) en un único servidor.
        .col-lg-6(data-aos="fade-down")
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t1/4.svg')
            .tarjeta.tarjeta--C03
              .p-4
                p.mb-2 #[b Escalabilidad horizontal (#[em scale out])]
                p.mb-0 Adición de múltiples nodos o servidores interconectados bajo un balanceador de carga (#[em load balancer]).
      ul.lista-ul.lista-ul--punto.mb-0(data-aos="fade-down")
        li.mb-4
          i.lista-ul__vineta
          span #[b Mantenibilidad y modularidad.] Capacidad de actualizar, depurar o refactorizar módulos de código de forma independiente, reduciendo el riesgo de efectos colaterales en la aplicación.
        li.mb-4
          i.lista-ul__vineta
          span #[b Disponibilidad y tolerancia a fallos.] Garantía de funcionamiento continuo del sistema mediante redundancia de componentes, copias de respaldo (#[em backups]) y estrategias de #[em failover].
        li.mb-0
          i.lista-ul__vineta
          span #[b Desacoplamiento.] Grado de independencia entre los componentes del sistema, lo cual facilita la adopción de tecnologías diversas en cada capa.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bg-C02.d-flex.align-items-center.py-3.px-3
          img.me-4(src='@/assets/curso/temas/t1/5.svg' style="width: 80px")
          p.mb-0 El diseño de #[em software] moderno prioriza la alta cohesión dentro de cada módulo y el bajo acoplamiento entre módulos, lo que favorece la reutilización del código y la mantenibilidad.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Tipos de arquitectura #[em web]
    p.mb-4(data-aos="fade-down") La selección del tipo de arquitectura condiciona la estrategia de renderizado, la latencia de red y la complejidad en el despliegue del #[em software]. Para comprender estas diferencias, la siguiente figura presenta de manera comparativa las principales arquitecturas #[em web], destacando su estructura y la forma en que se organizan sus componentes:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
      h5 Figura 1.
      span Esquema de arquitecturas #[em web] principales (monolítica vs. desacoplada con SPA)
    figure.mb-5(data-aos="fade-down")
      img.d-none.d-md-block.w-100(src='@/assets/curso/temas/t1/6.svg' alt='Figura 1. Comparación entre una arquitectura monolítica (MPA), en la que el navegador se comunica mediante peticiones HTTP con un servidor web que integra la lógica de negocio y la base de datos, y una arquitectura desacoplada (SPA y microservicios), donde el cliente realiza peticiones JSON a una API Gateway conectada con diferentes microservicios.')
      img.d-md-none.m-auto(src='@/assets/curso/temas/t1/6-m.svg' alt='Figura 1. Comparación entre una arquitectura monolítica (MPA), en la que el navegador se comunica mediante peticiones HTTP con un servidor web que integra la lógica de negocio y la base de datos, y una arquitectura desacoplada (SPA y microservicios), donde el cliente realiza peticiones JSON a una API Gateway conectada con diferentes microservicios.')

    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-0(data-aos="fade-down") A partir de la comparación presentada en la anterior figura, es posible profundizar en las características, el funcionamiento, las ventajas y las limitaciones de los principales tipos de arquitectura #[em web]. A continuación, se describen cada uno de estos enfoques:

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C02")
      .row(titulo="Arquitectura monolítica (Multi-Page Application - MPA)")
        .col-lg-5.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/t1/7.png')
        .col-lg-7
          p En esta arquitectura, el código de la interfaz de usuario, la lógica de negocio y el acceso a la base de datos se compilan y despliegan dentro de una única unidad ejecutable. Cada interacción del usuario implica el procesamiento de una nueva petición HTTP en el servidor y la entrega de un documento HTML completo, generando una recarga visible de la página en el navegador.
          .bg-white.p-3
            ul.lista-ul.lista-ul--punto.mb-0
              li
                i.lista-ul__vineta
                span #[b Ventajas:] sencillez en las etapas iniciales de desarrollo e indexación SEO nativa.
              li.mb-0
                i.lista-ul__vineta
                span #[b Desventajas:] alto consumo de ancho de banda por la transferencia repetida de activos y acoplamiento estricto.
      .row(titulo="Arquitectura desacoplada (Single Page Application - SPA)")
        .col-lg-5.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/t1/8.png')
        .col-lg-7
          p La aplicación SPA descarga, en la primera conexión, el código base en HTML, CSS y JavaScript. Las interacciones posteriores no recargan la página; en su lugar, se ejecutan peticiones asíncronas en segundo plano para obtener o enviar únicamente datos en formato estructurado (JSON o XML), dejando el trabajo de maquetación y renderizado al procesador del cliente.
          .bg-white.p-3
            ul.lista-ul.lista-ul--punto.mb-0
              li
                i.lista-ul__vineta
                span #[b Ventajas:] experiencia de usuario extremadamente fluida, similar a la de una aplicación nativa, y menor carga sobre el servidor.
              li.mb-0
                i.lista-ul__vineta
                span #[b Desventajas:] requiere configuraciones adicionales para el indexado en buscadores y presenta un mayor tiempo de carga inicial (#[em initial load time]).
      .row(titulo="Arquitectura basada en microservicios")
        .col-lg-5.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/t1/9.png')
        .col-lg-7
          p Es una evolución de la arquitectura orientada a servicios (SOA), en la cual la aplicación se descompone en un grupo de servicios pequeños, autónomos e independientemente desplegables. Cada microservicio ejecuta un proceso único, gestiona su propia base de datos y se comunica mediante protocolos ligeros (API REST o gRPC).
          .bg-white.p-3
            ul.lista-ul.lista-ul--punto.mb-0
              li
                i.lista-ul__vineta
                span #[b Ventajas:] facilita la escalabilidad independiente de los servicios, el mantenimiento modular y el despliegue de actualizaciones sin afectar toda la aplicación.
              li.mb-0
                i.lista-ul__vineta
                span #[b Desventajas:] aumenta la complejidad de gestión, comunicación y monitoreo de los servicios, además de requerir una infraestructura más robusta para su implementación.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Mapas de navegación y procedimiento para diseñar
    p.mb-4(data-aos="fade-down") El mapa de navegación es la representación esquemática de la estructura de la información y los caminos de acceso que el usuario puede seguir dentro del sitio #[em web]. Según la forma en que se organizan y relacionan los contenidos, pueden establecerse diferentes estructuras de navegación, cada una adecuada para determinadas necesidades y recorridos del usuario. A continuación, se presentan los principales tipos:

    .bg-C03.p-4.p-md-5.mb-5
      SlyderB.slyder--C01(:datos="navegacion")

    .row.justify-content-center.mb-4
      .col-lg-10
        p.text-center.mb-0(data-aos="fade-down") Una vez identificada la estructura de navegación más adecuada, es necesario organizar y representar los contenidos mediante un proceso que permita definir jerarquías, relaciones y recorridos de usuario. Para ello, se propone el siguiente procedimiento:

    .bg-C04.p-4.px-lg-5.mb-4(data-aos="fade-down")
      ol.lista-ol--cuadro.lista-ol--divisor.mb-0
        li
          .lista-ol--cuadro__vineta
            span 1
          span #[b Investigación y clasificación (#[em card sorting]).] Técnica participativa para agrupar y categorizar los contenidos de acuerdo con la mentalidad del usuario final.
        li
          .lista-ol--cuadro__vineta
            span 2
          span #[b Definición de la arquitectura de información (AI).] Creación del inventario completo de contenidos y definición de las jerarquías.
        li
          .lista-ol--cuadro__vineta
            span 3
          span #[b Diagramación del mapa de sitio (#[em sitemap]).] Elaboración del flujo visual que especifica la relación padre-hijo de cada URL o pantalla.
        li
          .lista-ol--cuadro__vineta
            span 4
          span #[b Bocetado de baja fidelidad (#[em wireframing]).] Diseño de esquemas de distribución espacial para verificar la ubicación de menús, migas de pan (#[em breadcrumbs]) y llamadas a la acción (CTA).
        li
          .lista-ol--cuadro__vineta
            span 5
          span #[b Validación de usabilidad.] Evaluación de los mapas de navegación para garantizar que el usuario pueda alcanzar cualquier contenido en un máximo de tres #[em clics].

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Técnicas de integración y sintaxis de contenidos #[em web]
    p.mb-5(data-aos="fade-down") La construcción del código fuente debe seguir los estándares internacionales del World Wide Web Consortium (W3C), asegurando que la estructura sea interpretable por cualquier agente de usuario. En este proceso, HTML5 permite organizar el contenido mediante etiquetas semánticas que identifican la función de cada bloque dentro del documento, evitando el uso indiscriminado de elementos genéricos como &lt;div&gt; y favoreciendo una estructura más clara y organizada.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-tercer-nivel.mb-4(data-aos="fade-right")
          img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
          h3.titulo-tercer-nivel__text Estructuración semántica en HTML5
        p.mb-4(data-aos="fade-down") Para apreciar la aplicación de estas etiquetas, el siguiente código presenta un ejemplo básico de estructuración semántica en HTML5:
        .tarjeta-codigo.mb-4
          pre.language-plaintext(language="plaintext")
            code
                | &lt;!DOCTYPE html&gt;
                | &lt;html lang="es"&gt;
                | &lt;head&gt;
                |     &lt;meta charset="UTF-8"&gt;
                |     &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                |     &lt;title&gt;Estructura Semántica Profesional&lt;/title&gt;
                | &lt;/head&gt;
                | &lt;body&gt;
                |     &lt;header&gt;
                |         &lt;h1&gt;Centro de Formación Técnica&lt;/h1&gt;
                |         &lt;nav&gt;
                |             &lt;ul&gt;
                |                 &lt;li&gt;&lt;a href="#inicio"&gt;Inicio&lt;/a&gt;&lt;/li&gt;
                |                 &lt;li&gt;&lt;a href="#cursos"&gt;Cursos&lt;/a&gt;&lt;/li&gt;
                |             &lt;/ul&gt;
                |         &lt;/nav&gt;
                |     &lt;/header&gt;
                |
                |     &lt;main&gt;
                |         &lt;section id="cursos"&gt;
                |             &lt;article&gt;
                |                 &lt;h2&gt;Desarrollo de Aplicaciones Web&lt;/h2&gt;
                |                 &lt;p&gt;Contenido explicativo sobre la arquitectura del software...&lt;/p&gt;
                |             &lt;/article&gt;
                |         &lt;/section&gt;
                |     &lt;/main&gt;
                |
                |     &lt;footer&gt;
                |         &lt;p&gt;&amp;copy; 2026 Servicio Nacional de Aprendizaje - SENA&lt;/p&gt;
                |     &lt;/footer&gt;
                | &lt;/body&gt;
                | &lt;/html&gt;
        p.mb-0(data-aos="fade-down") Una vez definida la estructura semántica del contenido mediante HTML5, es necesario integrar los recursos encargados de la presentación visual y del comportamiento interactivo de la página. Para ello, CSS3 y JavaScript complementan la estructura del documento y permiten mantener una adecuada separación entre contenido, presentación y funcionalidad. Entre las principales técnicas de integración se encuentran:

    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t1/15.svg')
          .tarjeta.tarjeta--C03
            .p-4
              p.mb-2 #[b Separación de capas]
              p.mb-0 Los estilos visuales se definen exclusivamente en archivos .css externos, mientras que la lógica de comportamiento se ubica en archivos .js.
      .col-lg-6(data-aos="fade-down")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t1/16.svg')
          .tarjeta.tarjeta--C03
            .p-4
              p.mb-2 #[b Carga diferida (#[em deferred loading])]
              p.mb-0 Uso de los atributos #[b async] y #[b defer] en la importación de #[em scripts] para no bloquear el análisis del DOM durante la carga inicial.

    .bg-banda.bg-banda--t1-2.pt-2
      separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.5 Características y licenciamiento de la plataforma
      .row.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
          figure
            img.w-100(src='@/assets/curso/temas/t1/17.png')
        .col-lg-8(data-aos="fade-down")
          p El entorno donde se ejecutan y alojan los contenidos #[em web] exige analizar el tipo de licenciamiento técnico y legal para proyectar la viabilidad financiera del proyecto.
          p.mb-0 El uso de #[em software] bajo licencias de código abierto (#[em open source]) no excluye la existencia de costos operativos (OPEX), los cuales se desplazan desde el pago de derechos de uso hacia las tareas de infraestructura, auditoría de seguridad y soporte especializado. En este sentido, la selección de una plataforma requiere considerar aspectos como el costo de licencia, el acceso al código, la seguridad, las condiciones de despliegue y la flexibilidad de personalización. La siguiente tabla compara estos criterios en modelos de código abierto y plataformas propietarias o bajo modalidad SaaS:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Cuadro comparativo de modelos de licenciamiento y plataformas
        .tabla-a.tabla--C01
          table
            thead
              tr
                th Criterio de evaluación
                th Licencia GPL y MIT
                th Licencia propietaria y SaaS
            tbody
              tr
                td #[b Costo de licencia.]
                td Gratuita para modificación y distribución.
                td Pago por suscripción, volumen o transacción.
              tr
                td #[b Acceso al código.]
                td Total (#[em source code] visible y modificable).
                td Restringido (#[em black box] gestionado por el proveedor).
              tr
                td #[b Seguridad.]
                td Auditoría comunitaria; parches descentralizados.
                td Auditoría cerrada; acuerdos SLA garantizados.
              tr
                td #[b Despliegue.]
                td Requiere configuración de servidor propio o #[em cloud].
                td Alojamiento administrado e integrado automáticamente.
              tr
                td #[b Flexibilidad.]
                td Personalización según requerimientos.
                td Sujeta a las extensiones permitidas por la plataforma.
</template>

<script>
import img10 from '@/assets/curso/temas/t1/10.svg'
import img11 from '@/assets/curso/temas/t1/11.svg'
import img12 from '@/assets/curso/temas/t1/12.svg'
import img13 from '@/assets/curso/temas/t1/13.svg'

export default {
  name: 'Tema1',
  data: () => ({
    navegacion: [
      {
        titulo: 'Jerárquica (árbol)',
        texto:
          'Organizada en niveles de profundidad desde una página principal (<em>home</em>) hacia secciones y subsecciones. Es el modelo estándar para portales corporativos e institucionales.',
        imagen: img10,
        leyendaImagen: '',
      },
      {
        titulo: 'Lineal',
        texto:
          'Guía al usuario a través de una secuencia estricta de pasos. Utilizada en procesos de pago (<em>checkout</em>) o módulos de aprendizaje guiado.',
        imagen: img11,
        leyendaImagen: '',
      },
      {
        titulo: 'En red (malla)',
        texto:
          'Permite la libre navegación entre nodos interconectados mediante hipervínculos, común en enciclopedias digitales y <em>wikis</em>.',
        imagen: img12,
        leyendaImagen: '',
      },
      {
        titulo: 'Mixta',
        texto:
          'Combina estructuras jerárquicas con enlaces transversales lineales o en red.',
        imagen: img13,
        leyendaImagen: '',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
