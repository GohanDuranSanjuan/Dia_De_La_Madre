const boton = document.getElementById("sig")
const titulo = document.getElementById("titulo")
const carta = document.getElementById("carta")
const img = document.getElementById("imagenes")
function abrirRegalo(){
    img.classList.add("fuera")
    titulo.classList.add("fuera")
    boton.classList.add("fuera")
    carta.classList.add("abrir")
}
boton.addEventListener("click", abrirRegalo)
