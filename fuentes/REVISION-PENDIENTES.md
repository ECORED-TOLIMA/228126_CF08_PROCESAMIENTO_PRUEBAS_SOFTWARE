# Revisión — pendientes y decisiones

228126_CF08 · Fundamentos para el desarrollo de aplicaciones *web*

Cada punto dice qué se decidió y por qué, para poder revertirlo si no es lo que se quería.

## Falta en las fuentes

1. **Video de la Introducción.** El XD dibuja «Espacio para video» sin URL y el DI.docx sólo da el
   nombre del guion (`228126_CF08_Guion_Video_Introduccion`). Se deja el video por defecto de la
   plantilla. Además, el hueco del XD mide 1228×580 y el componente `.video` del kit es 16:9, así
   que en la web el bloque sale más alto que en el diseño.
2. **PDF descargable del componente.** «Descargar PDF» apunta a
   `downloads/228126_CF08_CFA_DU.pdf`, que no está en las fuentes.
3. **`fuentes/Prueba.docx`** pesa 0 bytes.

## Decisiones

1. **Cursiva de «web» en los títulos de tema.** El XD la pone en los temas 1 y 4 y no en el 2 ni el
   3; el DI.docx la pone en los cinco. Se sigue el DI.docx en el menú y en los títulos.
2. **Animación de los decorativos de la portada.** El rótulo DESARROLLADORES del pasteboard pide
   «flotar verticalmente» y «rotar» sin decir a qué elemento va cada una: la bombilla flota y los
   dos iconos circulares rotan.
3. **Referencias bibliográficas.** El DI.docx no trae enlaces ni cursivas en ninguna; se
   transcriben tal cual, sin `link`.
4. **Tema 1 · acordeón del 1.2.** El XD rotula los ítems 2 y 3 como «Titulo item 2/3»; su
   contenido (SPA y microservicios) y sus fotos están en el pasteboard y en el DI.docx, y así se
   maquetan.
5. **Tema 1 · slider del 1.3.** El XD escribe «1/2» en las cuatro diapositivas (Jerárquica,
   Lineal, En red y Mixta, las tres últimas en el pasteboard). El componente cuenta solo: 1/4…4/4.
6. **Bloques de código.** Se reproducen como los dibuja el XD: marco con cabecera #3A1D71 y los
   tres puntos, texto en Roboto oscuro y sin resaltado de sintaxis.
7. **Títulos de las tarjetas con icono (1.4).** Van sin el punto final, como en el XD; en el
   DI.docx forman parte de la frase.
8. **Tema 2 · códigos de estado HTTP.** El XD dibuja un «+» bajo cada código y, en el pasteboard,
   la tarjeta amarilla que se abre con su descripción: se maqueta como infografía de puntos
   calientes (`ImagenInfografica`) sobre la imagen del panel. En móvil va la versión vertical del
   pasteboard, que ya trae las descripciones.
9. **Tema 2 · métodos HTTP.** El carrusel lleva las cinco tarjetas (GET y POST en el artboard; PUT,
   PATCH y DELETE en el pasteboard). El kit oculta la flecha de atrás en la primera posición.
10. **Tema 2 · «B.Protocolo HTTPS».** El XD escribe el título sin espacio tras la letra; se deja
    «B. Protocolo HTTPS», igual que «A. Protocolo HTTP».
11. **Tema 3 · tarjetas del frontend.** El XD pinta la tercera tarjeta en #F1E2FF con el aro
    #D5AAFF: es el estado `:hover`. Las tres van como `.tarjeta--boton` (reposo #F9E7E7 y aro
    #A10000; hover #F1E2FF y aro #D5AAFF). El aro que el XD no dibuja se generó cambiando sólo
    ese color del icono.
12. **Tema 3 · flujo de herramientas del 3.2.** El kit no trae un componente en zigzag; se
    maqueta con filas alternas, el número en círculo #D5AAFF y los conectores de 3 px del XD.
    En móvil los pasos se apilan sin conectores.
13. **Tema 3 · tarjetas del backend.** En el XD el título de la segunda tarjeta mide 16 px y el
    de la primera 18 px; se igualan a 18 px.
14. **Tabla 3.** La primera columna va centrada como en el XD y sin negrilla, como en el DI.docx.
15. **Tema 4 · foto del 4.2.** La persona está en el XD como relleno de imagen de un trazado
    compuesto (`Unión 6`) que el exportador no rasteriza; la composición se recorta del PDF.
16. **Tema 4 · slider del 4.3.** Cinco diapositivas (encabezado en el artboard, las otras cuatro en
    el pasteboard). El XD escribe «1/2»; el componente cuenta 1/5…5/5.
17. **Tema 5 · paso a paso del 5.2.** Se usa `PasosB` del kit (cuatro fases; las fotos de las tres
    últimas están en el pasteboard). El XD rotula los pasos A-D y el componente los numera 1-4.
18. **Tema 5 · foto del 5.5.** Las dos insignias circulares llevan un relleno que el exportador no
    rasteriza; la foto se recorta del PDF.
19. **Síntesis.** El artboard es la hoja del anexo imprimible (lleva el logo del SENA dentro de la
    tarjeta); la pantalla web se maqueta con `BannerInterno` y del artboard se toman el texto y el
    mapa. El `Anexo. Síntesis` (`public/downloads/Sintesis.pdf`) es el que entrega el cliente.
20. **Actividad didáctica.** Se transcribe del `_AD.docx`: 20 preguntas (el kit muestra 10 al azar,
    por eso `barajarPreguntas` y `barajarRespuestas` van en `true`). Comprobado por CDP: acertando
    todo da 100 % y el mensaje de aprobado; fallando todo, 0 % y el de mejora; la
    retroalimentación no se duplica. Los títulos de resultado son los `default` del kit.
21. **Imágenes de la actividad.** Las diez del repo son cinco distintas repetidas por parejas
    (`imagen1 = imagen7`, `imagen2 = imagen8`, `imagen3 = imagen9`, `imagen4 = imagen10`,
    `imagen5 = imagen6`) y no están en el XD ni en el PDF: las aporta el diseñador. Se dejan como
    marcadores, una por pregunta.
