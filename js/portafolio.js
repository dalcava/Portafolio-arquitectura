var header = document.querySelector("header")
const icono = document.getElementsByClassName("íconoÍndice")[0];
const abrirMenu = document.getElementsByClassName("índice")[0];
const botonIndice = document.getElementsByClassName("botonIndice")[0];
const backGalería = document.querySelector(".container");
const backGalería2 = document.querySelector(".container2");

const images = document.querySelectorAll(".img");
var imagen = document.getElementsByClassName("imagen")[0];
var imagen1 = document.getElementsByClassName("imagen")[1];
var imagen2 = document.getElementsByClassName("imagen")[2];
var imagen3 = document.getElementsByClassName("imagen")[3];
var imagen4 = document.getElementsByClassName("imagen")[4];
var imagen5 = document.getElementsByClassName("imagen")[5];
var imagen6 = document.getElementsByClassName("imagen")[6];

var imagen10 = document.getElementsByClassName("imagen1")[0];
var imagen11 = document.getElementsByClassName("imagen1")[1];
var imagen12 = document.getElementsByClassName("imagen1")[2];
var imagen13 = document.getElementsByClassName("imagen1")[3];

var imagen20 = document.getElementsByClassName("imagen2")[0];

var imagen30 = document.getElementsByClassName("imagen3")[0];
var imagen31 = document.getElementsByClassName("imagen3")[1];
var imagen32 = document.getElementsByClassName("imagen3")[2];
var imagen33 = document.getElementsByClassName("imagen3")[3];
var imagen34 = document.getElementsByClassName("imagen3")[4];
var imagen35 = document.getElementsByClassName("imagen3")[5];

var imagen40 = document.getElementsByClassName("imagen4")[0];
var imagen41 = document.getElementsByClassName("imagen4")[1];
var imagen42 = document.getElementsByClassName("imagen4")[2];
var imagen43 = document.getElementsByClassName("imagen4")[3];
var imagen44 = document.getElementsByClassName("imagen4")[4];
var imagen45 = document.getElementsByClassName("imagen4")[5];
var imagen46 = document.getElementsByClassName("imagen4")[6];
var imagen47 = document.getElementsByClassName("imagen4")[7];
var imagen48 = document.getElementsByClassName("imagen4")[8];

var imagen50 = document.getElementsByClassName("imagen5")[0];
var imagen51 = document.getElementsByClassName("imagen5")[1];
var imagen52 = document.getElementsByClassName("imagen5")[2];
var imagen53 = document.getElementsByClassName("imagen5")[3];
var imagen54 = document.getElementsByClassName("imagen5")[4];
var imagen55 = document.getElementsByClassName("imagen5")[5];
var imagen56 = document.getElementsByClassName("imagen5")[6];
var imagen57 = document.getElementsByClassName("imagen5")[7];
var imagen58 = document.getElementsByClassName("imagen5")[8];

var palabraFrente = document.querySelector("#nombreI") 
var palabra = document.querySelector(".nombre") 

const hiddenElements = document.querySelectorAll ('.hidden');

window.addEventListener("scroll", function() {
    var x = window.matchMedia("(max-width:1400px)")
    var y = window.matchMedia("(max-width:1200px)")
    if (x===false){
        header.classList.toggle("sticky",window.scrollY > 520);
    }
    else if (y){
        header.classList.toggle("sticky",window.scrollY > 100000);
        palabra.style.opacity=("20%")
    }
    else {header.classList.toggle("sticky",window.scrollY > 200)}
})
function crearPalabra () {
    var y = window.matchMedia("(max-width:1200px)")
    let palabras = ["Vida", "Diseño", "Arte", "Técnica", "Arquitectura", "Biofilia", "Habitar", "Espacio", "Vacíos", "Materia", "Flujo", "Soporte", "Tejido","Piel", "Vínculo", "Textura", "Fenómeno", "Hito", "Paradigmático", "Paramétrico", "Escala", "Fluidez", "Modular", "Ensamble", "Edificar", "Fachada", "Habitáculo", "Mansión", "Muro", "Pared", "Pilar", "Suelo", "Techumbre", "Ventana", "Color", "Composición", "Creatividad", "Dibujo", "Diseño", "Estilo", "Forma", "Funcionalidad", "Grafismo", "Ilustración", "Imágenes", "Innovación", "Interfaz", "Línea", "Logotipo", "Marca", "Medios", "Patrón", "Plantilla", "Proporción", "Adaptabilidad", "Comunicación", "Cooperación", "Creatividad", "Empatía", "Flexibilidad", "Liderazgo", "Negociación", "Organización", "Paciencia", "Ladrillo", "Cemento", "Arena", "Grava", "Piedra", "Mortero", "Adoquín", "Hormigón", "Yeso", "Cal", "Azulejo", "Madera", "Metal", "Vidrio", "Plástico"]
    let palabraAleatoria = aleatorio (0, palabras.length -1)
    palabraFrente.innerHTML = palabras [palabraAleatoria];
}
function aleatorio (min, max) {
    return Math.floor(Math.random ()*(max-min+1)+min)
}
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
}, {
    threshold: 0
})
hiddenElements.forEach((el)=>observer.observe(el));

icono.addEventListener("click", () => {
    abrirMenu.classList.toggle("active"); 
    icono.classList.toggle("active"); 
    botonIndice.classList.toggle("active");
    header.classList.toggle("sticky");
});

window.onload = function() {
    icono.classList.add("brillo");
    crearPalabra();
}
function expandirBack1 (){
    backGalería.classList.toggle("contain1");
}
function expandirBack2 (){
    backGalería.classList.toggle("contain2");
}
function expandirBack3 (){
    backGalería.classList.toggle("contain3");
}
function expandirBack4 (){
    backGalería.classList.toggle("contain4");
}
function expandirBack5 (){
    backGalería.classList.toggle("contain5");
}
function expandirBack6 (){
    backGalería.classList.toggle("contain6");
}
function expandirBack7 (){    
    backGalería2.classList.toggle("contain7");
}
function expandirBack8 (){
    backGalería2.classList.toggle("contain8");
}
function expandirBack9 (){
    backGalería2.classList.toggle("contain9");
}
function expandirBack10 (){
    backGalería2.classList.toggle("contain10");
}
function expandirBack11 (){
    backGalería2.classList.toggle("contain11");
}


imagen10.addEventListener("mouseover", expandirBack1);
imagen10.addEventListener("mouseleave", expandirBack1);
imagen11.addEventListener("mouseover", expandirBack1);
imagen11.addEventListener("mouseleave", expandirBack1);
imagen12.addEventListener("mouseover", expandirBack1);
imagen12.addEventListener("mouseleave", expandirBack1);
imagen13.addEventListener("mouseover", expandirBack5);
imagen13.addEventListener("mouseleave", expandirBack5);


imagen.addEventListener("mouseover", expandirBack2);
imagen.addEventListener("mouseleave", expandirBack2);
imagen1.addEventListener("mouseover", expandirBack2);
imagen1.addEventListener("mouseleave", expandirBack2);
imagen2.addEventListener("mouseover", expandirBack2);
imagen2.addEventListener("mouseleave", expandirBack2);
imagen3.addEventListener("mouseover", expandirBack6);
imagen3.addEventListener("mouseleave", expandirBack6);
imagen4.addEventListener("mouseover", expandirBack6);
imagen4.addEventListener("mouseleave", expandirBack6);
imagen5.addEventListener("mouseover", expandirBack6);
imagen5.addEventListener("mouseleave", expandirBack6);
imagen6.addEventListener("mouseover", expandirBack6);
imagen6.addEventListener("mouseleave", expandirBack6);


imagen20.addEventListener("mouseover", expandirBack3);
imagen20.addEventListener("mouseleave", expandirBack3);

imagen30.addEventListener("mouseover", expandirBack4);
imagen30.addEventListener("mouseleave", expandirBack4);
imagen31.addEventListener("mouseover", expandirBack4);
imagen31.addEventListener("mouseleave", expandirBack4);

imagen32.addEventListener("mouseleave", expandirBack6);
imagen32.addEventListener("mouseover", expandirBack6);
imagen33.addEventListener("mouseover", expandirBack6);
imagen33.addEventListener("mouseleave", expandirBack6);
imagen34.addEventListener("mouseover", expandirBack6);
imagen34.addEventListener("mouseleave", expandirBack6);
imagen35.addEventListener("mouseover", expandirBack6);
imagen35.addEventListener("mouseleave", expandirBack6);

imagen40.addEventListener("mouseover", expandirBack7);
imagen40.addEventListener("mouseleave", expandirBack7);
imagen41.addEventListener("mouseover", expandirBack7);
imagen41.addEventListener("mouseleave", expandirBack7);
imagen42.addEventListener("mouseover", expandirBack7);
imagen42.addEventListener("mouseleave", expandirBack7);

imagen44.addEventListener("mouseover", expandirBack8);
imagen44.addEventListener("mouseleave", expandirBack8);
imagen45.addEventListener("mouseover", expandirBack8);
imagen45.addEventListener("mouseleave", expandirBack8);

imagen46.addEventListener("mouseover", expandirBack9);
imagen46.addEventListener("mouseleave", expandirBack9);
imagen47.addEventListener("mouseover", expandirBack9);
imagen47.addEventListener("mouseleave", expandirBack9);
imagen48.addEventListener("mouseover", expandirBack9);
imagen48.addEventListener("mouseleave", expandirBack9);

imagen50.addEventListener("mouseover", expandirBack7);
imagen50.addEventListener("mouseleave", expandirBack7);
imagen51.addEventListener("mouseover", expandirBack7);
imagen51.addEventListener("mouseleave", expandirBack7);

imagen53.addEventListener("mouseover", expandirBack8);
imagen53.addEventListener("mouseleave", expandirBack8);
imagen54.addEventListener("mouseover", expandirBack8);
imagen54.addEventListener("mouseleave", expandirBack8);
imagen55.addEventListener("mouseover", expandirBack8);
imagen55.addEventListener("mouseleave", expandirBack8);

imagen56.addEventListener("mouseover", expandirBack9);
imagen56.addEventListener("mouseleave", expandirBack9);
imagen57.addEventListener("mouseover", expandirBack9);
imagen57.addEventListener("mouseleave", expandirBack9);
imagen58.addEventListener("mouseover", expandirBack9);
imagen58.addEventListener("mouseleave", expandirBack9);

imagen43.addEventListener("mouseover", expandirBack10);
imagen43.addEventListener("mouseleave", expandirBack10);

imagen52.addEventListener("mouseover", expandirBack11);
imagen52.addEventListener("mouseleave", expandirBack11);

palabraFrente.addEventListener("mouseover", crearPalabra);
setInterval(crearPalabra, 500);

const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");

// select all the image elements and add event listeners to them

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    // set the background image of the container element to the source of the hovered image
    container.style.backgroundImage = `url(${image.src})`;
    container.style.opacity = "80%"
    container2.style.backgroundImage = `url(${image.src})`;
    container2.style.opacity = "80%"
  });
});
images.forEach((image) => {
    image.addEventListener("mouseleave", () => {
      container.style.backgroundImage = "none";
      container.style.opacity = "20%"
      container2.style.backgroundImage = "none";
      container2.style.opacity = "80%"
    });
  });