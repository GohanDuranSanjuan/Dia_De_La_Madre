const boton = document.getElementById("sig")
const musica = document.getElementById("musica")
const titulo = document.getElementById("titulo")
const carta = document.getElementById("carta")
const img = document.getElementById("imagenes")
function abrirRegalo(){
    img.classList.add("fuera")
    titulo.classList.add("fuera")
    boton.classList.add("fuera")
    carta.classList.add("abrir")
}
function ponerMusica(){
    musica.play()
}
boton.addEventListener("click", abrirRegalo)
