const icono = document.getElementsByClassName("íconoÍndice")[0];
const abrirMenu = document.getElementsByClassName("índice")[0];
const botonIndice = document.getElementsByClassName("botonIndice")[1];

icono.addEventListener("click", () => {
    abrirMenu.classList.toggle("active"); 
    icono.classList.toggle("active"); 
/*     for (let i = 0; i < botonIndice.length; i++) { */
        botonIndice.classList.toggle("active");
/*     } */
});
window.onload = function() {
    icono.classList.add ("brillo");
}