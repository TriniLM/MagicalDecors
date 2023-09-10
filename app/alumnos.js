var comentarios = [{
    "nombre": "Sofía García",
    "mensaje":"Aunque tuve algunas dificultades con algunas lecciones, en general, encontré el curso muy útil y enriquecedor."
     , "fecha":"31 de julio 2023 02:00 PM"

},
{
    "nombre": "Valentina Martínez",
    "mensaje":"El contenido del curso es realmente valioso. Aprendí mucho más de lo que esperaba."
    , "fecha":"28 de junio 2023 4:52 PM"


},
{
    "nombre": "Isabella Martínez",
    "mensaje":"Tuve algunos problemas técnicos durante el curso, pero el contenido en sí fue valioso para mí."
    , "fecha":"13 de mayo 2023 12:26 PM"


},
{
    "nombre": "Victoria García",
    "mensaje":"Las lecciones son fáciles de seguir y el contenido es valioso. Me siento más seguro en mis habilidades ahora."
    , "fecha":"28 de abril 2023 02:00 PM"

},
{
    "nombre": "Lucía Smith",
    "mensaje":"Las técnicas que aprendí aquí marcaron la diferencia en la calidad de mis decoraciones."
    , "fecha":"16 de abril 2023 08:23 PM"

},
{
    "nombre":"María Pérez",
    "mensaje":"Me gustaría que hubiera habido más ejemplos prácticos, pero en general, estoy satisfecho con lo que aprendí."
    , "fecha":"6 de abril 2023 08:23 PM"

},
{
    "nombre": "Valentina García",
    "mensaje":"Los materiales y las lecciones están bien estructurados. Aprendí a decorar diferentes tipos de eventos con confianza."
    , "fecha":"20 de marzo 2023 08:23 PM"

},

{
    "nombre": "Victoria López",
    "mensaje":"El curso fue muy informativo y me dio nuevas perspectivas sobre la decoración de fiestas."
    , "fecha":"10 de marzo 2023 08:23 PM"

},

{
    "nombre": "Lucía Guzman",
    "mensaje":"Estoy impresionado con la cantidad de información valiosa que obtuve de este curso. Muy recomendado."
    , "fecha":"26 de febrero 2023 08:23 PM"

},
{
    "nombre": "Valentina Martínez",
    "mensaje":"No tenía experiencia previa en decoración, pero este curso me ayudó a aprender desde cero. Estoy muy satisfecho."
    , "fecha":"16 de febrero 2023 08:23 PM"

},
{
    "nombre": "Valentina Pérez",
    "mensaje":"Las lecciones fueron fáciles de entender y muy prácticas. Ahora me siento más preparado para ofrecer mis servicios."
    , "fecha":"11 de febrero 2023 08:23 PM"

},
{
    "nombre": "Mía Sánchez",
    "mensaje":"Este curso me dio la confianza para emprender mi propio negocio de decoraciones. ¡Gracias!"
    , "fecha":"6 de febrero 2023 08:23 PM"

},
{
   "nombre" : "Emma González",
    "mensaje":"Aprendí tanto sobre tendencias y técnicas en este curso. ¡Definitivamente vale la pena!"
    , "fecha":"1 de febrero 2023 08:23 PM"

},
{
    "nombre": "Camila Johnson",
    "mensaje":"Me encantó el enfoque práctico de este curso. Pude aplicar lo que aprendí de inmediato en mis proyectos."
    , "fecha":"25 de enero 2023 08:23 PM"

},
{
    "nombre": "Lucía Smith",
    "mensaje":"Recomiendo este curso a cualquiera que quiera aprender a hacer decoraciones profesionales. ¡Muy valioso!"
    , "fecha":"20 de enero 2023 08:23 PM"

},

 {
    "nombre": "Mía Hernández",
    "mensaje":"Increíble curso. Las técnicas que aprendí aquí realmente mejoraron la calidad de mis decoraciones."
    , "fecha":"15 de enero 2023 08:23 PM"

},
{
    "nombre": "Isabella Pérez",
    "mensaje":"¡El curso superó mis expectativas! Aprendí mucho y ahora me siento más confiado en mis habilidades."
    , "fecha":"10 de enero 2023 08:23 PM"
}]

var comentario = document.getElementById("comentarios");

var crear = (nombre,comentario,fecha)=>{
    let contenedor = document.createElement('div')
    contenedor.classList.add('contenedor__comentario-item')
    let contenido = `
                    <div class="cotenedor__titulo-fecha">
                    <h3 class="comentarios__nombre">${nombre}</h3>
                    <p class="fecha">${fecha}</p>
                    </div>
                    <p class="comentarios__texto">${comentario}</p>
     `
  contenedor.innerHTML = contenido;
  return contenedor
}

comentarios.forEach((element)=>{
    comentario.appendChild(crear(element.nombre, element.mensaje, element.fecha))
})