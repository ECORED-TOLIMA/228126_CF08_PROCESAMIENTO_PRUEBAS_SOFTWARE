<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sitio #[em web]

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un sitio #[em web] es una colección estructurada de documentos de hipertexto, hojas de estilo, #[em scripts] y activos multimedia interconectados de forma lógica, alojados en una infraestructura de servidores y accesibles a través de Internet mediante los protocolos HTTP o HTTPS.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Definición y características
    p.mb-4(data-aos="fade-down") Para que una solución #[em web] alcance condiciones adecuadas de calidad y funcionamiento, debe integrar características relacionadas con su identificación, disponibilidad y capacidad de operar en diferentes entornos tecnológicos. Estos aspectos favorecen el acceso a los recursos, la continuidad del servicio y una experiencia consistente para los usuarios, independientemente del navegador o sistema operativo utilizado. Entre las principales características se encuentran:

    .tarjeta--container.redondeo-20.row.g-0(data-aos="fade-down")
      .col-lg-4.bg-C05.p-5
        figure.mb-4
          img.m-auto(src='@/assets/curso/temas/t4/2.svg' style="width: 152px")
        h4.text-center.mb-3 Identificación e indexabilidad
        p.mb-0 Direccionamiento inequívoco mediante nombres de dominio y resolución DNS, junto con una estructura del sitio que facilite su exploración e indexación por los motores de búsqueda.
      .col-lg-4.bg-C07.p-5
        figure.mb-4
          img.m-auto(src='@/assets/curso/temas/t4/3.svg' style="width: 152px")
        h4.text-center.mb-3 Disponibilidad operativa
        p.mb-0 Capacidad del sitio para mantenerse accesible y en funcionamiento durante un periodo determinado, generalmente expresada mediante un porcentaje de disponibilidad (#[em uptime]). Los niveles esperados pueden establecerse de acuerdo con los requisitos del servicio y los acuerdos de nivel de servicio (SLA).
      .col-lg-4.bg-C04.p-5
        figure.mb-4
          img.m-auto(src='@/assets/curso/temas/t4/4.svg' style="width: 152px")
        h4.text-center.mb-3 Interoperabilidad multiplataforma
        p.mb-0 Capacidad de un sitio #[em web] para mantener un funcionamiento y una experiencia de uso consistentes en diferentes navegadores (#[em cross-browser compatibility]), dispositivos y sistemas operativos.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos y categorías
    p.mb-5(data-aos="fade-down") Los sitios #[em web] pueden clasificarse de acuerdo con su propósito, las funcionalidades que ofrecen y el tipo de interacción que establecen con sus usuarios. Esta clasificación permite diferenciar sitios orientados principalmente a la difusión de información de aquellos que incorporan procesos transaccionales, educativos o aplicaciones que proporcionan servicios directamente desde el navegador. Aunque un mismo sitio puede combinar características de varias categorías, es posible identificar algunos tipos principales según su función predominante. Entre ellos se encuentran:

    .row.align-items-center
      .col-lg-4.d-none.d-lg-block(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/t4/5.png' style="width: 396px")
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          div(titulo="Portales institucionales o corporativos")
            p.mb-0 Orientados a la proyección de la identidad corporativa, la divulgación de información estratégica y la comunicación con sus públicos, facilitando el acceso a servicios, información institucional y canales de atención.
          div(titulo="Sistemas de comercio electrónico (<em>E-commerce</em>)")
            p.mb-0 Diseñados para la gestión de catálogos de productos, carritos de compras, integración de pasarelas de pago cifradas y control de inventarios en tiempo real.
          div(titulo="Sistemas de gestión de aprendizaje (LMS)")
            p.mb-0 Plataformas especializadas en el despliegue de contenidos formativos, administración de aulas virtuales, evaluación y seguimiento del progreso académico.
          div(titulo="Aplicaciones <em>web</em> y servicios SaaS (Software as a Service)")
            p.mb-0 Soluciones que proporcionan funcionalidades y servicios de #[em software] accesibles mediante la #[em web], como editores de documentos, sistemas de gestión empresarial y herramientas colaborativas.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Características de los elementos
    p.mb-4(data-aos="fade-down") Un sitio #[em web] se estructura mediante diferentes elementos que organizan la información y facilitan la navegación e interacción del usuario. Cada uno cumple una función específica dentro de la interfaz y contribuye a establecer una jerarquía visual y funcional del contenido. Aunque su distribución puede variar según el propósito y diseño del sitio, generalmente se identifican elementos como los siguientes:

    .bg-C03.p-4.p-md-5
      SlyderB.slyder--C01(:datos="elementos")

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Requerimientos funcionales y no funcionales
    p.mb-4(data-aos="fade-down") La ingeniería de requerimientos permite identificar, analizar y documentar las necesidades que debe satisfacer un sitio o aplicación #[em web]. Durante este proceso se establecen las funciones que deberá ejecutar el sistema, las condiciones necesarias para su operación y los criterios que permitirán comprobar posteriormente si la solución desarrollada responde a las necesidades definidas. Los requerimientos pueden agruparse principalmente en funcionales y no funcionales:

    .tarjeta--container.redondeo-20.row.g-0.mb-4(data-aos="fade-down")
      .col-md-6.bg-C05.p-5
        figure.mb-4
          img.m-auto(src='@/assets/curso/temas/t4/11.svg' style="width: 162px")
        h4.text-center.mb-3 Requerimientos funcionales (RF)
        p.mb-0 Definen los comportamientos, servicios e interacciones que el sistema debe proporcionar en respuesta a las acciones del usuario o a determinados eventos. Pueden incluir funciones como registrar usuarios, autenticar credenciales, realizar búsquedas, procesar formularios, gestionar información o ejecutar transacciones. Por ejemplo, un requerimiento funcional puede establecer: «El sistema debe permitir al usuario recuperar su contraseña mediante el correo electrónico registrado».
      .col-md-6.bg-C04.p-5
        figure.mb-4
          img.m-auto(src='@/assets/curso/temas/t4/12.svg' style="width: 162px")
        h4.text-center.mb-3 Requerimientos no funcionales (RNF)
        p.mb-0 Establecen las condiciones y atributos de calidad bajo los cuales deben ejecutarse las funcionalidades del sistema. Incluyen aspectos relacionados con rendimiento, seguridad, disponibilidad, accesibilidad, compatibilidad, escalabilidad y usabilidad. Por ejemplo, un requerimiento no funcional puede definir un tiempo máximo de respuesta, un porcentaje de disponibilidad o un determinado criterio de accesibilidad.

    .row.justify-content-center
      .col-lg-10
        p.mb-0(data-aos="fade-down") Tanto los requerimientos funcionales como los no funcionales deben formularse de manera clara, verificable y, cuando corresponda, medible, de modo que puedan establecerse criterios objetivos de aceptación. Por esta razón, expresiones ambiguas como «el sitio debe ser rápido» deben sustituirse por criterios cuantificables asociados al rendimiento, indicando la métrica, el valor esperado y las condiciones en las que será evaluada.

    separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Parámetros de configuración, descripción y palabras clave
    p.mb-4(data-aos="fade-down") Los parámetros de configuración de un sitio #[em web] permiten establecer propiedades que influyen en su correcta visualización, identificación, compatibilidad y presentación de información ante navegadores y otros servicios digitales. Estas configuraciones pueden definirse tanto en el documento HTML como en otros componentes de la aplicación, dependiendo de las características técnicas y los requerimientos establecidos para el proyecto.

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.g-0.bg-C08.align-items-center.mb-4(data-aos="fade-down")
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/13.png' style="width: 419px")
          .col-lg.p-4
            p.mb-0 En HTML, una parte de esta configuración se incorpora en el elemento &lt;head&gt;, donde se incluyen metadatos que proporcionan información sobre el documento sin formar parte directamente del contenido visible de la página. Estos datos permiten especificar aspectos como la codificación de caracteres, la adaptación a diferentes tamaños de pantalla, la descripción del contenido, la autoría y la información utilizada al compartir el sitio en determinadas plataformas.
        p.mb-4(data-aos="fade-down") El siguiente fragmento de código ejemplifica la configuración de algunos de estos parámetros mediante etiquetas &lt;meta&gt;, propiedades Open Graph y el elemento &lt;title&gt;:
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | &lt;head&gt;
              |     &lt;meta charset="UTF-8"&gt;
              |     &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
              |     &lt;meta name="description" content="Componente formativo sobre fundamentos de desarrollo web,
              | arquitecturas cliente-servidor y protocolos de comunicación para aprendices SENA."&gt;
              |     &lt;meta name="keywords" content="desarrollo web, HTML5, CSS3, JavaScript, interoperabilidad,
              | protocolos, SENA"&gt;
              |     &lt;meta name="author" content="Servicio Nacional de Aprendizaje - SENA"&gt;
              |
              |     &lt;!-- Protocolo Open Graph para redes sociales --&gt;
              |     &lt;meta property="og:title" content="Fundamentos para el desarrollo de aplicaciones web"&gt;
              |     &lt;meta property="og:description" content="Aprenda las técnicas de interoperabilidad y protocolos
              | técnicos en desarrollo web."&gt;
              |     &lt;meta property="og:type" content="website"&gt;
              |
              |     &lt;title&gt;Fundamentos para el Desarrollo de Aplicaciones Web | SENA&lt;/title&gt;
              | &lt;/head&gt;

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-down")
        p.mb-0 En este ejemplo, los parámetros incluidos en el &lt;head&gt; permiten definir información básica para la interpretación y presentación del documento #[em web]. Sin embargo, la configuración técnica de un sitio también debe responder a los requerimientos establecidos durante su desarrollo, de manera que aspectos funcionales, de seguridad, rendimiento y capacidad puedan verificarse mediante criterios de aceptación definidos. En relación con los requerimientos abordados previamente, la siguiente tabla presenta algunos ejemplos y sus respectivas métricas de aceptación:
      .col-lg-2.d-none.d-lg-block(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/t4/14.svg' style="width: 186px")

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Clasificación de requerimientos de un sitio #[em web]
        .tabla-a.tabla--C01
          table
            thead
              tr
                th(style="width: 25%") Categoría
                th(style="width: 25%") Tipo de requerimiento
                th(style="width: 25%") Descripción técnica
                th(style="width: 25%") Métrica de aceptación
            tbody
              tr
                td.text-center #[b Funcional.]
                td Autenticación.
                td Inicio de sesión con correo institucional.
                td Acceso autorizado con credenciales válidas y rechazo con credenciales inválidas.
              tr
                td.text-center #[b Funcional.]
                td Exportación de datos.
                td Generación de reportes en formato PDF y Excel.
                td Descarga correcta del archivo generado.
              tr
                td.text-center #[b No funcional.]
                td Seguridad.
                td Cifrado obligatorio de contraseñas.
                td Algoritmo Argon2id o #[em bcrypt] con #[em salt].
              tr
                td.text-center #[b No funcional.]
                td Rendimiento.
                td Puntuación en prueba de velocidad.
                td Puntuación &gt; 90 / 100 en Google Lighthouse.
              tr
                td.text-center #[b No funcional.]
                td Escalabilidad.
                td Carga masiva de usuarios concurrentes.
                td Soporte para 5000 peticiones por minuto.
</template>

<script>
import img6 from '@/assets/curso/temas/t4/6.svg'
import img7 from '@/assets/curso/temas/t4/7.svg'
import img8 from '@/assets/curso/temas/t4/8.svg'
import img9 from '@/assets/curso/temas/t4/9.svg'
import img10 from '@/assets/curso/temas/t4/10.svg'

export default {
  name: 'Tema4',
  data: () => ({
    elementos: [
      {
        titulo: 'Encabezado (<em>header / nav</em>)',
        texto:
          'Se ubica generalmente en la parte superior y reúne elementos de identificación y navegación, como el logotipo y el menú principal.',
        imagen: img6,
        leyendaImagen: '',
      },
      {
        titulo: 'Sección principal (<em>hero banner</em>)',
        texto:
          'Área destacada que presenta información relevante, mensajes principales o llamadas a la acción.',
        imagen: img7,
        leyendaImagen: '',
      },
      {
        titulo: 'Área de contenido (<em>main / articles</em>)',
        texto:
          'Espacio central destinado a organizar y presentar la información principal del sitio mediante textos, imágenes, artículos u otros recursos.',
        imagen: img8,
        leyendaImagen: '',
      },
      {
        titulo: 'Barra lateral (<em>sidebar</em>)',
        texto:
          'Sección complementaria que puede contener enlaces, menús secundarios, información adicional u otros elementos de apoyo.',
        imagen: img9,
        leyendaImagen: '',
      },
      {
        titulo: 'Pie de página (<em>footer</em>)',
        texto:
          'Área ubicada al final del sitio que suele agrupar información complementaria, enlaces de interés, datos de contacto o información legal.',
        imagen: img10,
        leyendaImagen: '',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
