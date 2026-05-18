const titulo = document.getElementById("titulo")
const musica = document.getElementById("musica")
const imagen = document.getElementById("imagen")
const abre = document.getElementById("abre")
const carta = document.getElementById("carta")
const sig1 = document.getElementById("sig1")
const mensaje = document.getElementById("mensaje")
const sig2 = document.getElementById("sig2")
const prop = document.getElementById("prop")
const btnsi = document.getElementById("btnsi")
const btnno = document.getElementById("btnno")
const si = document.getElementById("si")
const no = document.getElementById("no")
function abrirRegalo (){
    titulo.classList.add("cerrar")
    imagen.classList.add("cerrar")
    abre.classList.add("cerrar")
    carta.classList.add("abrir")
    mensaje.classList.add("sig")
}
function abrirMensaje(){
    carta.classList.add("cerrar")
    mensaje.classList.add("abrir")
    prop.classList.add("sig")
}
function abrirProp(){
    mensaje.classList.add("cerrar")
    prop.classList.add("abrir")
    si.classList.add("sig")
    no.classList.add("sig")
}
function abrirSi(){
    prop.classList.add("cerrar")
    si.classList.add("abrir")
}
function abrirNo(){
    prop.classList.add("cerrar")
    no.classList.add("abrir")
}
function ponerMusica(){
    musica.play()
}
abre.addEventListener("click",abrirRegalo)
sig1.addEventListener("click",abrirMensaje)
sig2.addEventListener("click",abrirProp)
btnsi.addEventListener("click",abrirSi)
btnno.addEventListener("click",abrirNo)
