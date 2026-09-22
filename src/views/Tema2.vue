<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Comunicación y diseño #[em web]

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La comunicación en el entorno #[em web] constituye el conjunto de mecanismos, reglas y especificaciones técnicas que regulan la transferencia de información entre clientes y servidores a través de infraestructuras de red. Este flujo de datos debe complementarse con principios rigurosos de diseño visual, ergonomía digital y usabilidad, garantizando que la información se transmita de manera íntegra, eficiente y accesible para cualquier usuario e instrumento de navegación.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Técnicas de comunicación
    p.mb-4(data-aos="fade-down") El paradigma fundamental de la arquitectura #[em web] se basa en el modelo cliente-servidor (#[em client-server]). La interacción entre ambos extremos se realiza mediante peticiones y respuestas estructuradas. De acuerdo con el comportamiento de la interfaz y la sincronización en el intercambio de datos, las técnicas de comunicación se dividen en dos modalidades principales:

    .tarjeta--container.redondeo-20.row.g-0(data-aos="fade-down")
      .col-md-6.bg-C05.p-5
        figure.mb-4
          img.m-auto(src='@/assets/curso/temas/t2/2.svg' style="width: 162px")
        h4.text-center.mb-3 Comunicación síncrona
        p La comunicación síncrona se caracteriza porque el cliente realiza una solicitud al servidor y espera a que este procese la petición y devuelva una respuesta antes de continuar con determinadas acciones. Durante este proceso existe una dependencia directa entre la solicitud realizada y la respuesta esperada, por lo que el flujo de interacción sigue una secuencia definida.
        p.mb-0 En aplicaciones #[em web] tradicionales, este modelo puede implicar el envío de una solicitud HTTP al servidor y la posterior carga de una nueva página o vista con la información procesada. Esto ocurre, por ejemplo, cuando un usuario completa un formulario, lo envía y debe esperar la respuesta del servidor para visualizar el resultado. Aunque este mecanismo facilita procesos que requieren una secuencia controlada de acciones, las recargas completas de página pueden aumentar el tiempo de espera percibido y afectar la continuidad de la interacción.
      .col-md-6.bg-C04.p-5
        figure.mb-4
          img.m-auto(src='@/assets/curso/temas/t2/3.svg' style="width: 162px")
        h4.text-center.mb-3 Comunicación asíncrona
        p La comunicación asíncrona permite que una aplicación #[em web] realice solicitudes al servidor sin que el usuario tenga que esperar necesariamente la finalización de cada petición para continuar interactuando con la interfaz. De esta manera, determinadas operaciones pueden ejecutarse en segundo plano mientras otras funciones de la aplicación permanecen disponibles.
        p.mb-0 Para implementar este tipo de comunicación pueden utilizarse tecnologías como XMLHttpRequest o la API Fetch, que permiten solicitar y recibir información del servidor sin recargar completamente la página. Los datos obtenidos, habitualmente en formatos como JSON, pueden ser procesados mediante JavaScript para actualizar únicamente los elementos necesarios de la interfaz. Esta modalidad favorece experiencias más dinámicas y fluidas, ya que permite actualizar información, consultar datos o ejecutar determinadas operaciones manteniendo la continuidad de la navegación.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Protocolos de comunicación
    p.mb-4(data-aos="fade-down") Un protocolo de comunicación es un conjunto formal de reglas, sintaxis y procedimientos que permiten organizar y controlar la transmisión de datos a través de una red. En la comunicación #[em web], estos protocolos establecen la manera en que clientes y servidores intercambian solicitudes y respuestas. Entre los principales protocolos utilizados para este intercambio se encuentran HTTP y HTTPS, explicados a continuación:

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-tercer-nivel.mb-4(data-aos="fade-right")
          img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/22.svg')
          h3.titulo-tercer-nivel__text A. Protocolo HTTP (Hypertext Transfer Protocol)
        .bg-C04.d-flex.align-items-center.p-4.mb-4(data-aos="fade-down")
          img.me-4.icono-fijo(src='@/assets/curso/temas/t2/4.svg' style="width: 77px")
          p.mb-0 HTTP es un protocolo de la capa de aplicación que permite el intercambio de información entre clientes y servidores en la #[em web]. Su funcionamiento se basa en un modelo de petición-respuesta: el cliente, generalmente un navegador, envía una solicitud para acceder a un recurso o ejecutar una acción, y el servidor procesa la petición y devuelve una respuesta con la información correspondiente.
        p.mb-4(data-aos="fade-down") Una de sus principales características es que funciona como un protocolo sin estado (#[em stateless]), lo que significa que cada petición se procesa de manera independiente y, por defecto, el servidor no conserva información sobre las solicitudes anteriores. Para comprender cómo HTTP se integra con las diferentes capas que intervienen en la transmisión de datos entre el cliente y el servidor. La siguiente figura representa de manera esquemática este proceso de comunicación:
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          h5 Figura 2.
          span Diagrama de flujo y capas de los protocolos de comunicación
        figure.mb-4(data-aos="fade-down")
          img.d-none.d-md-block.w-100(src='@/assets/curso/temas/t2/5.svg' alt='Figura 2. Flujo de comunicación entre un cliente o navegador y un servidor web, con las capas que intervienen en la transmisión de datos: HTTP o HTTPS en la comunicación web, TLS o SSL para el cifrado y TCP/IP para el transporte de la información entre el cliente y el servidor.')
          img.d-md-none.m-auto(src='@/assets/curso/temas/t2/5-m.svg' alt='Figura 2. Flujo de comunicación entre un cliente o navegador y un servidor web, con las capas que intervienen en la transmisión de datos: HTTP o HTTPS en la comunicación web, TLS o SSL para el cifrado y TCP/IP para el transporte de la información entre el cliente y el servidor.')
        p.mb-0(data-aos="fade-down") Las peticiones HTTP utilizan diferentes métodos para indicar la acción que el cliente desea realizar sobre un recurso del servidor. Cada método cumple una función específica dentro del intercambio de información y permite distinguir operaciones como consultar, enviar, actualizar o eliminar datos. Entre los métodos más utilizados se encuentran:

    .bg-banda.bg-banda--t2-1.mb-5
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block.align-self-end
          figure
            img(src='@/assets/curso/temas/t2/6.png' style="width: 396px")
        .col-lg-8.py-5
          SlyderF.slyder--C02(columnas="col-md-6")
            .tarjeta.bg-white.p-4
              figure.mb-3
                img.m-auto(src='@/assets/curso/temas/t2/7.svg' style="width: 96px")
              p.text-center.mb-0 #[b GET.] Solicita la representación de un recurso específico sin modificarlo en el servidor. Se utiliza principalmente para consultar y recuperar información.
            .tarjeta.bg-white.p-4
              figure.mb-3
                img.m-auto(src='@/assets/curso/temas/t2/8.svg' style="width: 96px")
              p.text-center.mb-0 #[b POST.] Envía datos al servidor para la creación de un nuevo recurso o el procesamiento de entidades.
            .tarjeta.bg-white.p-4
              figure.mb-3
                img.m-auto(src='@/assets/curso/temas/t2/9.svg' style="width: 96px")
              p.text-center.mb-0 #[b PUT.] Reemplaza de forma íntegra el recurso destino con la carga útil (#[em payload]) proporcionada.
            .tarjeta.bg-white.p-4
              figure.mb-3
                img.m-auto(src='@/assets/curso/temas/t2/10.svg' style="width: 96px")
              p.text-center.mb-0 #[b PATCH.] Aplica modificaciones parciales a un recurso existente.
            .tarjeta.bg-white.p-4
              figure.mb-3
                img.m-auto(src='@/assets/curso/temas/t2/11.svg' style="width: 96px")
              p.text-center.mb-0 #[b DELETE.] Elimina el recurso especificado en el servidor.

    p.mb-4(data-aos="fade-down") Una vez procesada la petición, el servidor devuelve una respuesta que incluye un código de estado HTTP. Este código permite identificar de manera estandarizada el resultado de la solicitud y se organiza en cinco categorías principales según el tipo de respuesta:

    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.infografica--C01.color-acento-botones.d-none.d-md-block
          template(v-slot:imagen)
            figure
              img.w-100(src='@/assets/curso/temas/t2/12.svg')
          .tarjeta.color-acento-contenido.p-3(x="13.3%" y="79.8%" numero="+")
            p.mb-0 Indican que la petición ha sido recibida y el proceso continúa.
          .tarjeta.color-acento-contenido.p-3(x="31.6%" y="79.8%" numero="+")
            p.mb-0 Confirman que la acción fue recibida, entendida y aceptada con éxito (ej. 200 OK, 201 Created).
          .tarjeta.color-acento-contenido.p-3(x="49.8%" y="79.8%" numero="+")
            p.mb-0 Indican que el cliente debe tomar medidas adicionales para completar la solicitud (ej. 301 Moved Permanently, 304 Not Modified).
          .tarjeta.color-acento-contenido.p-3(x="68.4%" y="79.8%" numero="+")
            p.mb-0 Señalan fallos atribuibles a la petición del usuario (ej. 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found).
          .tarjeta.color-acento-contenido.p-3(x="86.9%" y="79.8%" numero="+")
            p.mb-0 Indican que el servidor falló al procesar una petición válida (ej. 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable).
        figure.d-md-none
          img.m-auto(src='@/assets/curso/temas/t2/12-m.svg' alt='Códigos de estado HTTP: 1xx informativos, 2xx éxito, 3xx redirección, 4xx errores del cliente y 5xx errores del servidor, con la descripción de cada categoría.')

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-tercer-nivel.mb-4(data-aos="fade-right")
          img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/22.svg')
          h3.titulo-tercer-nivel__text B. Protocolo HTTPS (Hypertext Transfer Protocol Secure)
        .d-flex.align-items-center.mb-4(data-aos="fade-down")
          img.me-4.icono-fijo(src='@/assets/curso/temas/t2/13.svg' style="width: 77px")
          p.mb-0 HTTPS es la implementación segura del protocolo HTTP y utiliza el protocolo Transport Layer Security (TLS), sucesor de Secure Sockets Layer (SSL), para proteger la información intercambiada entre el cliente y el servidor. Este mecanismo permite cifrar los datos transmitidos, verificar la identidad del servidor mediante certificados digitales y preservar la integridad de la información durante la comunicación.
        p.mb-4(data-aos="fade-down") Antes de establecer el canal cifrado, el cliente y el servidor realizan un proceso de negociación en el que intercambian información, validan el certificado digital y establecen los parámetros necesarios para proteger la conexión. La siguiente figura representa las principales etapas de este proceso:
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          h5 Figura 3.
          span Diagrama de secuencia del apretón de manos HTTPS
        figure.mb-4(data-aos="fade-down")
          img.d-none.d-md-block.w-100(src='@/assets/curso/temas/t2/14.svg' alt='Figura 3. Secuencia del establecimiento de una conexión HTTPS entre el navegador cliente y el servidor web, desde la solicitud inicial y la presentación y validación del certificado digital hasta el intercambio de claves y el establecimiento del canal cifrado.')
          img.d-md-none.m-auto(src='@/assets/curso/temas/t2/14-m.svg' alt='Figura 3. Secuencia del establecimiento de una conexión HTTPS entre el navegador cliente y el servidor web, desde la solicitud inicial y la presentación y validación del certificado digital hasta el intercambio de claves y el establecimiento del canal cifrado.')
        .titulo-cuarto-nivel.mb-4(data-aos="fade-right")
          h4 • Pilares de seguridad en HTTPS
        p.mb-4(data-aos="fade-down") La seguridad proporcionada por HTTPS se sustenta en tres pilares fundamentales: el cifrado, la integridad y la autenticación. El cifrado de datos protege la información intercambiada entre el cliente y el servidor, de manera que credenciales, datos personales u otra información sensible no puedan ser interpretados fácilmente si son interceptados durante la transmisión.
        .row.g-0.mb-4(data-aos="fade-down")
          .col-lg.bg-C05.p-4
            p La integridad de los datos permite verificar que la información no haya sido modificada durante su recorrido entre el cliente y el servidor. Los mecanismos criptográficos utilizados por TLS permiten detectar alteraciones en los datos transmitidos y evitar que información manipulada sea aceptada como válida.
            p.mb-0 Por su parte, la autenticación permite al cliente verificar la identidad del servidor mediante certificados digitales emitidos por autoridades de certificación (CA) de confianza. Este proceso contribuye a confirmar que la comunicación se establece con el servidor esperado y no con un tercero que intenta suplantarlo.
          .col-lg-auto.d-none.d-lg-block
            img.h-100(src='@/assets/curso/temas/t2/15.png' style="width: 396px; object-fit: cover")
        p.mb-0(data-aos="fade-down") De esta manera, el cifrado, la integridad y la autenticación actúan de forma complementaria para proteger la comunicación HTTPS y proporcionar un intercambio de información más seguro en las aplicaciones #[em web].

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Características del diseño #[em web]
    p.mb-4(data-aos="fade-down") El diseño #[em web] moderno se fundamenta en la confluencia entre la usabilidad, la experiencia de usuario (UX), la interfaz de usuario (UI) y el cumplimiento normativo de accesibilidad universal. En este contexto, el diseño #[em web] debe responder tanto a la diversidad de dispositivos y tamaños de pantalla como a las necesidades de acceso de los usuarios. Para ello, se consideran dos características fundamentales:

    .bg-banda.bg-banda--t2-2.py-4.mb-4
      .row.justify-content-center
        .col-lg-10
          .titulo-tercer-nivel.mb-4(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/22.svg')
            h3.titulo-tercer-nivel__text A. Diseño #[em web] responsivo (#[em responsive web design])
          p.mb-4(data-aos="fade-down") Consiste en la capacidad de una maquetación para reestructurar sus componentes de manera fluida en función del espacio disponible en pantalla, utilizando hojas de estilo CSS3, rejillas flexibles (#[em css grid]), cajas flexibles (#[em flexbox]) y reglas de consulta de medios (#[em media queries]).
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img.m-auto(src='@/assets/curso/temas/t2/16.svg' style="width: 292px")
            .col-lg(data-aos="fade-down")
              .titulo-cuarto-nivel.mb-4
                h4 • Enfoque #[em mobile-first]
              p.mb-0 Este enfoque es una estrategia de diseño y desarrollo que prioriza inicialmente la maquetación para dispositivos móviles de pantallas reducidas y agrega complejidad visual y estructural de forma progresiva a medida que aumenta el tamaño de la pantalla (#[em progressive enhancement]). En CSS, este enfoque puede implementarse mediante estilos base para dispositivos móviles y consultas de medios (#[em media queries]) que modifican la disposición de los elementos en pantallas de mayor tamaño, como se presenta en el siguiente ejemplo:

    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta-codigo.mb-5
          pre.language-plaintext(language="plaintext")
            code
                | /* Estilos Base: Mobile-First */
                | .contenedor-principal {
                |     display: flex;
                |     flex-direction: column;
                |     width: 100%;
                |     padding: 1rem;
                | }
                |
                | /* Punto de interrupción (Breakpoint) para tabletas */
                | @media (min-width: 768px) {
                |     .contenedor-principal {
                |         flex-direction: row;
                |         gap: 2rem;
                |     }
                | }
                |
                | /* Punto de interrupción para pantallas de escritorio */
                | @media (min-width: 1200px) {
                |     .contenedor-principal {
                |         max-width: 1200px;
                |         margin: 0 auto;
                |     }
                | }
                |
        .titulo-tercer-nivel.mb-4(data-aos="fade-right")
          img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/22.svg')
          h3.titulo-tercer-nivel__text B. Accesibilidad #[em web] (Web Content Accessibility Guidelines - WCAG)
        p.mb-0(data-aos="fade-down") Las pautas de accesibilidad para el contenido #[em web], desarrolladas por el W3C, establecen criterios orientados a garantizar que los sitios #[em web] sean utilizables por personas con diversas discapacidades, incluidas las visuales, auditivas, motoras y cognitivas. Estos criterios se organizan en cuatro principios fundamentales, conocidos por el acrónimo POUR:

    .row.g-0.mb-4(data-aos="fade-down")
      .col-md-6.col-lg-3.bg-C05.p-4
        figure.mb-3
          img.m-auto(src='@/assets/curso/temas/t2/17.svg' style="width: 69px")
        h4.text-center.mb-3 Perceptible
        p.text-center.mb-0 La información y los componentes de la interfaz deben ser presentados de modo que los usuarios puedan percibirlos (por ejemplo, proporcionando alternativas de texto mediante atributos #[b alt] en imágenes).
      .col-md-6.col-lg-3.bg-C04.p-4
        figure.mb-3
          img.m-auto(src='@/assets/curso/temas/t2/18.svg' style="width: 69px")
        h4.text-center.mb-3 Operable
        p.text-center.mb-0 La interfaz no puede requerir interacciones que el usuario no pueda realizar; toda la funcionalidad debe ser accesible mediante el teclado sin atrapamiento del foco (#[em keyboard trap]).
      .col-md-6.col-lg-3.bg-C05.p-4
        figure.mb-3
          img.m-auto(src='@/assets/curso/temas/t2/19.svg' style="width: 69px")
        h4.text-center.mb-3 Comprensible
        p.text-center.mb-0 La información y el funcionamiento de la interfaz de usuario deben ser comprensibles y predecibles.
      .col-md-6.col-lg-3.bg-C04.p-4
        figure.mb-3
          img.m-auto(src='@/assets/curso/temas/t2/20.svg' style="width: 69px")
        h4.text-center.mb-3 Robusto
        p.text-center.mb-0 El contenido debe ser lo suficientemente robusto para ser interpretado de forma fiable por una amplia variedad de agentes de usuario, incluyendo tecnologías de asistencia (#[em screen readers]).

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bg-C02.d-flex.align-items-center.py-3.px-3.mb-4
          img.me-4(src='@/assets/curso/temas/t2/21.svg' style="width: 80px")
          p.mb-0 Para cumplir con los criterios de contraste correspondientes al nivel AA de las WCAG, la relación de contraste entre el texto y su fondo debe ser de al menos 4,5:1 para texto normal y de 3:1 para texto de gran tamaño
        p.mb-5(data-aos="fade-down") En conjunto, los principios de comunicación, seguridad, adaptabilidad y accesibilidad permiten establecer criterios técnicos para evaluar el funcionamiento y la experiencia de uso de un sitio #[em web]. Estos criterios pueden verificarse mediante parámetros relacionados con la seguridad de la red, el tiempo de respuesta, el contraste visual, la adaptabilidad de la interfaz y la navegabilidad. La siguiente tabla sintetiza estos aspectos y presenta algunos parámetros de referencia para su evaluación:
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Directrices técnicas de comunicación y diseño #[em web]
        .tabla-a.tabla--C01
          table
            thead
              tr
                th(style="width: 25%") Dimensión técnica
                th(style="width: 25%") Parámetro de evaluación
                th(style="width: 25%") Estándar / recomendación técnica
                th(style="width: 25%") Frecuencia de verificación
            tbody
              tr
                td #[b Seguridad de red.]
                td Certificados de cifrado.
                td TLS 1.3 y renovación automática mediante #[em Let's Encrypt.]
                td Continuo.
              tr
                td #[b Tiempo de respuesta.]
                td Time to First Byte (TTFB).
                td Menor a 800 milisegundos en peticiones GET.
                td Por cada despliegue.
              tr
                td #[b Contraste de color.]
                td Relación de luminancia.
                td Mínimo 4,5:1 (cumplimiento WCAG AA).
                td Auditoría de interfaz.
              tr
                td #[b Adaptabilidad UI.]
                td Puntos de interrupción.
                td Configuración de #[em viewports] para 320 px, 768 px, 1024 px y 1440 px.
                td Fase de maquetación.
              tr
                td #[b Navegabilidad.]
                td Jerarquía del teclado.
                td Atributos #[em tabindex] lógicos y marcos de foco (#[em focus ring]) visibles.
                td Pruebas de usabilidad.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
