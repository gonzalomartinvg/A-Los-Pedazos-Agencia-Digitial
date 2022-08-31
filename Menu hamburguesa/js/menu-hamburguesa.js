document.querySelector(".bars-menu").addEventListener("click", animateBars) /*Seleecionamos sobre qué vamos a trabajar y le añadimos que al hacer click
se realice la acción que nombramos "animateBars"*/

var line1 = document.querySelector(".line1-bars-menu"); /*Indicamos que la variante line1 sea igual al elemento con la clase ".line1-bars-menu" del CSS*/
var line2 = document.querySelector(".line2-bars-menu");
var line3 = document.querySelector(".line3-bars-menu");

function animateBars(){
    line1.classList.toggle("active-line1-bars-menu");
    line2.classList.toggle("active-line2-bars-menu");
    line3.classList.toggle("active-line3-bars-menu");
}