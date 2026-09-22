<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Desarrollo #[em web]

    figure.mb-4(data-aos="fade-down")
      img.w-100(src='@/assets/curso/temas/t3/1.png')
    p.mb-0(data-aos="fade-down") El desarrollo #[em web] abarca la fase de implementación práctica del ciclo de vida del #[em software], integrando la lógica de programación del lado del cliente (#[em frontend]), la lógica del servidor (#[em backend]), el manejo de bases de datos y la orquestación de herramientas especializadas para la edición, el empaquetado y la integración continua.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Técnicas de desarrollo #[em web]
    p.mb-4(data-aos="fade-down") La construcción de #[em software web] se fundamenta en la separación de responsabilidades (Separation of Concerns, SoC), principio que permite organizar los diferentes componentes de una aplicación de acuerdo con las funciones que cumplen. Esta separación facilita distinguir los elementos relacionados con la estructura, la presentación y la interacción del usuario de aquellos encargados de la lógica de negocio, la seguridad y la gestión de los datos. Desde esta perspectiva, el desarrollo #[em web] se aborda mediante dos áreas principales:

    .bg-banda.bg-banda--t3-1.pt-4.mb-5
      .row.justify-content-center
        .col-lg-10
          .titulo-tercer-nivel.mb-4(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t3/16.svg')
            h3.titulo-tercer-nivel__text A. Desarrollo #[em frontend]
          p.mb-5(data-aos="fade-down") El desarrollo #[em frontend] comprende los componentes de una aplicación #[em web] que se ejecutan en el navegador y con los que el usuario interactúa directamente. Su construcción integra la estructura del contenido, la presentación visual y el comportamiento interactivo de la interfaz. Para comprender cómo se desarrollan estos componentes, se presentan las principales técnicas y tecnologías empleadas en el #[em frontend]:
      .row
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
          .tarjeta--boton.C01.h-100.p-4
            .iconos-hover.mb-4
              img(src='@/assets/curso/temas/t3/2.svg')
              img(src='@/assets/curso/temas/t3/2-h.svg')
            h4.text-center.mb-3 Estructuración semántica #[br] (HTML5)
            p.mb-0 Definición de la jerarquía conceptual del documento mediante elementos y etiquetas semánticas que organizan el contenido de forma lógica, accesible y estructurada, facilitando su interpretación por navegadores, motores de búsqueda y tecnologías de asistencia.
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
          .tarjeta--boton.C01.h-100.p-4
            .iconos-hover.mb-4
              img(src='@/assets/curso/temas/t3/3.svg')
              img(src='@/assets/curso/temas/t3/3-h.svg')
            h4.text-center.mb-3 Estilizado y maquetación avanzada (CSS3)
            p.mb-0 Definición del comportamiento sintáctico y estético mediante metodologías como BEM (Block Element Modifier) o arquitecturas CSS atómicas.
        .col-lg-4(data-aos="fade-down")
          .tarjeta--boton.C01.h-100.p-4
            .iconos-hover.mb-4
              img(src='@/assets/curso/temas/t3/4.svg')
              img(src='@/assets/curso/temas/t3/4-h.svg')
            h4.text-center.mb-3 Lógica de cliente interactiva (JavaScript ES6+)
            p.mb-0 Programación imperativa o funcional para gestionar el estado de la interfaz, el procesamiento de eventos, la validación de formularios en el cliente y la manipulación del DOM.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-tercer-nivel.mb-4(data-aos="fade-right")
          img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t3/16.svg')
          h3.titulo-tercer-nivel__text B. Desarrollo #[em backend]
        p.mb-0(data-aos="fade-down") El desarrollo #[em backend] comprende los procesos que se ejecutan en el servidor y que permiten gestionar la lógica de negocio, la seguridad de acceso, la autenticación de usuarios, el procesamiento de solicitudes y la persistencia de datos. Su implementación se apoya en diferentes tecnologías y enfoques que permiten estructurar y gestionar estas funciones. Entre los principales se encuentran:

    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--foto-icono
          .tarjeta--foto-icono__foto
            img.foto(src='@/assets/curso/temas/t3/5.png')
            img.tarjeta--foto-icono__icono(src='@/assets/curso/temas/t3/7.svg')
          .p-4.px-lg-5
            h4.mb-3 Lenguajes de programación del servidor.
            p.mb-0 Utilización de lenguajes y entornos como Node.js, Python (Django / FastAPI), PHP, Java (Spring Boot) o C# (.NET Core) para implementar la lógica de negocio, procesar solicitudes, gestionar datos y ejecutar las operaciones requeridas por las aplicaciones #[em web].
      .col-lg-6(data-aos="fade-down")
        .tarjeta--foto-icono
          .tarjeta--foto-icono__foto
            img.foto(src='@/assets/curso/temas/t3/6.png')
            img.tarjeta--foto-icono__icono(src='@/assets/curso/temas/t3/8.svg')
          .p-4.px-lg-5
            h4.mb-3 Estilo arquitectónico REST (Representational State Transfer).
            p.mb-0 Diseño de servicios #[em web] que exponen recursos mediante URLs unívocas y operaciones estándar asociadas a los verbos HTTP, utilizando JSON como formato preferente para el intercambio de información.

    p.mb-4(data-aos="fade-down") La interacción entre estos componentes puede apreciarse en el flujo de una solicitud desde el cliente hacia el servidor, donde la API REST procesa la petición, ejecuta la lógica correspondiente y se comunica con la base de datos para gestionar la información. La siguiente figura representa de manera esquemática este proceso y el intercambio de respuestas entre los diferentes componentes:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          h5 Figura 4.
          span Diagrama de interacción cliente - API REST - base de datos
        figure(data-aos="fade-down")
          img.d-none.d-md-block.w-100(src='@/assets/curso/temas/t3/9.svg' alt='Figura 4 que representa el flujo de comunicación entre un cliente frontend, un servidor backend mediante una API REST y una base de datos SQL. El proceso muestra el envío de una solicitud POST con datos JSON, la validación del token JWT y el procesamiento de la lógica en el servidor, la inserción de datos mediante SQL, la confirmación de la operación y la respuesta HTTP 201 Created enviada al cliente.')
          img.d-md-none.m-auto(src='@/assets/curso/temas/t3/9-m.svg' alt='Figura 4 que representa el flujo de comunicación entre un cliente frontend, un servidor backend mediante una API REST y una base de datos SQL. El proceso muestra el envío de una solicitud POST con datos JSON, la validación del token JWT y el procesamiento de la lógica en el servidor, la inserción de datos mediante SQL, la confirmación de la operación y la respuesta HTTP 201 Created enviada al cliente.')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Herramientas de desarrollo #[em web]
    p(data-aos="fade-down") El flujo de trabajo moderno exige un ecosistema de herramientas especializadas para optimizar la productividad del desarrollador y la calidad del código entregado.
    p.mb-4(data-aos="fade-down") La siguiente es la cadena y flujo de trabajo con herramientas de desarrollo #[em web]:

    .bg-banda.bg-banda--t3-2.py-5.mb-5
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10
              .flujo-zigzag
                .flujo-zigzag__paso(data-aos="fade-down")
                  .flujo-zigzag__numero 1
                  .flujo-zigzag__texto
                    h4.mb-2 Editores de código (VS Code)
                    p.mb-0 Herramientas de edición de código con soporte para resaltado de sintaxis, autocompletado inteligente, refactorización y depuración integrada (p. ej., Visual Studio Code y JetBrains WebStorm).
                  img.flujo-zigzag__icono.d-none.d-lg-block(src='@/assets/curso/temas/t3/10.svg')
                  .flujo-zigzag__linea
                .flujo-zigzag__paso.flujo-zigzag__paso--der(data-aos="fade-down")
                  .flujo-zigzag__numero 2
                  .flujo-zigzag__texto
                    h4.mb-2 Control de versiones (Git y GitHub)
                    p.mb-0 Herramientas y plataformas que permiten registrar y gestionar los cambios realizados en el código fuente a lo largo del tiempo, facilitando la colaboración, la trazabilidad y el trabajo mediante ramas (#[em branches]).
                  img.flujo-zigzag__icono.d-none.d-lg-block(src='@/assets/curso/temas/t3/11.svg')
                  .flujo-zigzag__linea
                .flujo-zigzag__paso(data-aos="fade-down")
                  .flujo-zigzag__numero 3
                  .flujo-zigzag__texto
                    h4.mb-2 Empaquetador (Vite o Webpack)
                    p.mb-0 Herramientas que permiten gestionar y optimizar los recursos de una aplicación durante el proceso de desarrollo y construcción, incluyendo tareas como el procesamiento de dependencias, la transformación del código y la generación de archivos optimizados para su distribución.
                  img.flujo-zigzag__icono.d-none.d-lg-block(src='@/assets/curso/temas/t3/12.svg')
                  .flujo-zigzag__linea
                .flujo-zigzag__paso.flujo-zigzag__paso--der(data-aos="fade-down")
                  .flujo-zigzag__numero 4
                  .flujo-zigzag__texto
                    h4.mb-2 Contenedor (Docker)
                    p.mb-0 Tecnología de contenerización que permite empaquetar una aplicación junto con sus dependencias y configuraciones en un entorno aislado y reproducible, facilitando su ejecución consistente en diferentes entornos de desarrollo, prueba y producción.
                  img.flujo-zigzag__icono.d-none.d-lg-block(src='@/assets/curso/temas/t3/13.svg')
                  .flujo-zigzag__linea
                .flujo-zigzag__paso(data-aos="fade-down")
                  .flujo-zigzag__numero 5
                  .flujo-zigzag__texto
                    h4.mb-2 Servidor de producción
                    p.mb-0 Entorno en el que la aplicación se despliega y queda disponible para los usuarios finales. Comprende la configuración del servidor, la ejecución de los servicios necesarios y la gestión de aspectos como disponibilidad, seguridad, rendimiento y monitoreo.
                  img.flujo-zigzag__icono.d-none.d-lg-block(src='@/assets/curso/temas/t3/14.svg')
                  .flujo-zigzag__linea

    .cajon.C01.color-secundario.py-4.px-5.mb-5(data-aos="fade-down")
      p.mb-0 Es importante destacar que, dentro de este flujo de trabajo, el control de versiones permite gestionar de manera organizada los cambios realizados durante el desarrollo de una aplicación. Como ejemplo de su aplicación, los siguientes comandos muestran un flujo básico de trabajo con Git, desde la inicialización de un repositorio local y la creación de una rama hasta el registro de los cambios y su envío al repositorio remoto:

    .row.justify-content-center
      .col-lg-10
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | # Inicializar un nuevo repositorio local
              | git init
              |
              | # Crear una nueva rama para una característica específica
              | git checkout -b feature/autenticacion-jwt
              |
              | # Registrar cambios en la zona de preparación (Staging Area)
              | git add .
              |
              | # Confirmar los cambios en el historial local con un mensaje descriptivo
              | git commit -m "feat: implementar validación de tokens JWT en el módulo de login"
              |
              | # Vincular y enviar la rama al repositorio remoto
              | git push origin feature/autenticacion-jwt

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Características de las herramientas
    p.mb-4(data-aos="fade-down") Las herramientas de desarrollo #[em web] se diferencian por la función que desempeñan dentro del proceso de construcción de una aplicación y por las características técnicas que aportan al flujo de trabajo. Mientras algunas se orientan al control y trazabilidad de los cambios en el código, otras facilitan la construcción y optimización de los recursos, la estandarización de los entornos, el análisis de la calidad del código o la validación de servicios y APIs.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estas herramientas también favorecen la automatización y la consistencia de los procesos de desarrollo. Por ejemplo, los sistemas de control de versiones permiten conservar el historial de cambios y apoyar el trabajo colaborativo; las herramientas de construcción procesan y optimizan los recursos de una aplicación; y los contenedores permiten reproducir configuraciones y dependencias en diferentes entornos. A estas se suman herramientas destinadas al análisis estático del código y a las pruebas de APIs, que contribuyen a detectar errores y verificar el comportamiento de los servicios antes de su despliegue.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        p.mb-5 Por esta razón, la selección de herramientas no depende únicamente de la tecnología utilizada para desarrollar la aplicación, sino también de aspectos como la trazabilidad, la portabilidad, la automatización, la calidad del código y las necesidades de prueba. La siguiente tabla presenta una comparación de algunas herramientas representativas del ecosistema de desarrollo #[em web], organizadas según su categoría, función principal y característica clave:
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Comparativa de herramientas del ecosistema de desarrollo
        .tabla-a.tabla--C01
          table
            thead
              tr
                th(style="width: 25%") Herramienta
                th(style="width: 25%") Categoría
                th(style="width: 25%") Función principal
                th(style="width: 25%") Característica clave
            tbody
              tr
                td.text-center Git.
                td Control de versiones.
                td Seguimiento de cambios en código.
                td Arquitectura distribuida e historial inmutable mediante #[em hashes] SHA-1.
              tr
                td.text-center Docker.
                td Contenedorización.
                td Empaquetado de entorno y dependencias.
                td Portabilidad total mediante el aislamiento de procesos del sistema operativo.
              tr
                td.text-center Vite.
                td #[em Build tool / bundler.]
                td Servidor de desarrollo y empaquetado.
                td Reemplazo de módulos en caliente (HMR) ultra rápido usando ES Modules nativos.
              tr
                td.text-center ESLint.
                td Analizador estático (#[em linter]).
                td Detección de errores y patrones anómalos.
                td Forzado de guías de estilo de código automatizadas en el equipo de trabajo.
              tr
                td.text-center Postman.
                td Pruebas de API.
                td Inspección y prueba de #[em endpoints] REST y gRPC.
                td Generación automatizada de documentación de APIs y ejecución de colecciones de prueba.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
