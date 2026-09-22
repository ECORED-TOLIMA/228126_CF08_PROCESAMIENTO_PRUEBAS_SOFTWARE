<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
    ActividadController(:cuestionario="cuestionario")

</template>

<script>
//- GENERADO por `scripts/gen_actividad.py` desde `228126_CF08_AD.docx`.
//- No editar a mano: volver a correr el script si cambia el docx.
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos para el desarrollo de aplicaciones <em>web</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> fortalecer la comprensión de los fundamentos del desarrollo web, estableciendo relaciones entre sus componentes técnicos para la construcción de soluciones interoperables, funcionales y orientadas a la mejora continua.',
      // el kit sólo muestra 10 de las 20: barajar es OBLIGATORIO
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVE A INTENTARLO',
      // `mensaje_final_*`, NO `mensaje_*`: es el nombre que lee
      // `actividadCuestionario/Actividad.vue` del kit (1.0.9). Con el nombre corto los dos
      // mensajes finales del docx no se pintan nunca y no salta ningún error.
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la arquitectura web en un proyecto de software?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir la paleta de colores y la tipografía del sitio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar los componentes y sus relaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir la necesidad de utilizar un servidor de base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Configurar el hardware físico de los equipos de cómputo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica define a una arquitectura de tipo Single Page Application (SPA)?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recarga la página completa en cada petición del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Funciona únicamente sin conexión a internet (offline).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actualiza dinámicamente la interfaz sin recargar la página.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Elimina la necesidad de utilizar código JavaScript en el navegador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el propósito del protocolo HTTPS en la comunicación web?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proteger la transferencia de datos mediante el protocolo de cifrado TLS.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar la resolución de las imágenes del sitio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Traducir nombres de dominio a direcciones IP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comprimir el código fuente HTML automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué caracteriza al diseño web responsivo (responsive web design)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ocultar parte del contenido del sitio cuando se accede desde dispositivos con pantallas de menor tamaño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reorganizar y reajustar los elementos de la interfaz según el tamaño de la pantalla del dispositivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Crear una aplicación nativa independiente para cada sistema operativo y adaptar allí los elementos de la interfaz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar el acceso al contenido del sitio cuando el usuario utiliza dispositivos diferentes a computadores de escritorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta permite gestionar el historial de cambios del código fuente y facilitar el trabajo colaborativo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Docker.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Apache.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Git.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Chrome DevTools.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la función del dominio o DNS en la infraestructura de un sitio web?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar las bases de datos del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Autenticar a los usuarios del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar la maquetación CSS de las páginas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Traducir nombres legibles por humanos a direcciones IP numéricas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿A qué categoría corresponde la restricción "El tiempo de respuesta del servidor debe ser menor a 0,8 segundos"?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Requerimiento funcional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Requerimiento no funcional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Parámetro de maquetación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regla de negocio visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la función principal de la etiqueta <meta name="viewport"> en el encabezado HTML?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ajustar la visualización al tamaño de la pantalla.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Indexar el sitio en motores de búsqueda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Importar fuentes tipográficas externas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer la conexión con la base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué es una prueba A/B (A/B testing) en el contexto de analítica web?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una prueba para comprobar la velocidad del procesador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una evaluación de la conexión física de red.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un análisis del código fuente para buscar errores de sintaxis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una comparación entre dos versiones para evaluar sus resultados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué componente técnico permite aislar y reproducir entornos de ejecución entre desarrollo y producción?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contenedores (docker).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Servidores DNS.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hojas de estilo (CSS3).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Metadatos SEO.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de los siguientes estándares se enfoca en regular la accesibilidad para personas con discapacidad en la web?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'HTTP/2',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'WCAG 2.1',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'JSON',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ECMAScript 6',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué tecnología se utiliza principalmente para definir la estructura semántica de un sitio web?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CSS3.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Python.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'HTML5.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'SQL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué caracteriza a una arquitectura web basada en microservicios?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Agrupa toda la lógica y la base de datos en un solo bloque ejecutable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evita el uso de protocolos HTTP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Requiere el procesamiento exclusivo del lado del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Divide la aplicación en servicios autónomos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué indicador mide el tiempo que tarda en cargarse el elemento visual más grande en la pantalla?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bounce Rate.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Largest Contentful Paint (LCP).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Time to First Byte (TTFB).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Error 404.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la función principal de vite o webpack en el desarrollo web?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrar usuarios y permisos del servidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar cambios realizados en el código fuente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procesar y optimizar recursos de la aplicación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Gestionar solicitudes, autenticación y persistencia de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué formato ligero es ampliamente utilizado para el intercambio de datos entre cliente y servidor?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'JSON.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'PNG.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'PDF.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ZIP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué implica un requerimiento funcional en un proyecto web?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las funciones que el sistema debe ejecutar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las condiciones de seguridad del servidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El proveedor de alojamiento seleccionado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El grado de brillo de la pantalla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué ventaja ofrece el uso de software bajo licenciamiento open source?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina totalmente la necesidad de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permite acceder y modificar el código según su licencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Garantiza un soporte presencial por parte del fabricante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prohíbe su uso en proyectos institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué método de comunicación web realiza peticiones en segundo plano sin interrumpir la interfaz del usuario?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Síncrono.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asíncrono.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Monolítico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estático.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el objetivo final de llevar a cabo un análisis de información en un sitio web?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rediseñar el logotipo corporativo cada semana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar el costo del licenciamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Orientar decisiones para la mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar los metadatos de las páginas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos técnicos del desarrollo web, la construcción de sitios y el análisis de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
