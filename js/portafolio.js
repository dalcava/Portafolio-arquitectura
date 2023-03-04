const icono = document.getElementsByClassName("íconoÍndice")[0];
const abrirMenu = document.getElementsByClassName("índice")[0];
const botonIndice = document.getElementsByClassName("botonIndice")[0];
const backGalería = document.querySelector(".container");
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

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})
const hiddenElements = document.querySelectorAll ('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

icono.addEventListener("click", () => {
    abrirMenu.classList.toggle("active"); 
    icono.classList.toggle("active"); 
    botonIndice.classList.toggle("active");
});

window.onload = function() {
    icono.classList.add("brillo");
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

const container = document.querySelector(".container");

// select all the image elements and add event listeners to them
const images = document.querySelectorAll(".img");
images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    // set the background image of the container element to the source of the hovered image
    container.style.backgroundImage = `url(${image.src})`;
    container.style.opacity = "80%"
  });
});
images.forEach((image) => {
    image.addEventListener("mouseleave", () => {
      container.style.backgroundImage = "none";
      container.style.opacity = "20%"
    });
  });