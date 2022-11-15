const titulo = document.querySelector("h1#tituloBienvenida")
const subtitulo = document.querySelector("h2#subtituloPreguntas")

const divProteinas = document.querySelector("#divProteinas")
const divAminoacidos = document.querySelector("#divAminoacidos")
const divShakers = document.querySelector("#divShakers")

const contenedorForm = document.querySelector("div.contenedorFormulario")
const form = document.querySelector("form#form")
const inputNombre = document.querySelector("input#nombre")
const inputApellido = document.querySelector("input#apellido")
const inputEdad = document.querySelector("input#edad")
const inputEmail = document.querySelector("input#email")
const ingresarBoton = document.querySelector("button.enviarBoton")

const divCarrito = document.querySelector("div#idCarrito")
const bodyCarrito = document.querySelector("tbody#bodyCarrito")
const divTotal = document.querySelector("div#total")
const sectionCarrito = document.querySelector("section.sectionCarrito")

const btnComprar = document.querySelector("button#btnComprar")
const btnLimpiar = document.querySelector("button#btnLimpiar")

// Barra de navegación

window.addEventListener("scroll", function(){
  let header = document.querySelector("header")
  header.classList.toggle("abajo",window.scrollY>0)
})

const navbar = document.querySelector("header")

const cambiarNavbar = ()=>{
  navbar.style.position="static"
}

const static = ()=>{
  location.pathname == "/secciones/carrito.html" && cambiarNavbar()
}

document.addEventListener("DOMContentLoaded", static)

// Funciones de alerta

const alertaCompra = (icon, title, text)=>{
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        color: 'black',
        background: '#f4cb00',
        confirmButtonText: 'Aceptar'
      }).then(result => {
        if (result.isConfirmed){
            localStorage.removeItem("Carrito")
            location.href = "../index.html"
        }
      })
}

const alertas = (icon, title, text, color)=>{
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        color: 'black',
        background: color,
        confirmButtonText: 'Aceptar'
      })
}

const toast = (product)=>{
    Toastify({
        text: `Se añadió ${product.nombre} al carrito!`,
        duration: 1500,
        newWindow: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
          background: "blueviolet",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}