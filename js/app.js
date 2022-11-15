const rutaGenerales = "https://637315da348e94729902a38b.mockapi.io/productosGeneral"
const rutaProteinas = "https://637315da348e94729902a38b.mockapi.io/proteinas"
const rutaAminoacidos = "https://637315da348e94729902a38b.mockapi.io/aminoacidos"
const rutaShakers = "https://637315da348e94729902a38b.mockapi.io/shakers"

const arraygenerales = async ()=>{
    const res = await fetch(rutaGenerales)
    productosGeneral = await res.json()
}

let productosGeneral = []
arraygenerales()

let proteinas = []
let aminoacidos = []
let shakers = []
const carrito = []

const mostrarError = ()=> `<h1 class="error">Error al cargar los productos.</h1>`

const cargarProductos = async (arrayDeProductos, lugarHTML, ruta, tipoProducto)=>{
    let armoHTML = ""    
    try {
        const response = await fetch(ruta)
        arrayDeProductos = await response.json()
        arrayDeProductos.forEach(({imagen,nombre,precio,sabor,id})=>{
            armoHTML += `<div class="card" style="width: 18rem;">
                            <img src="${imagen}" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${nombre}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">$ ${precio}</li>
                                <li class="list-group-item">Sabor: <span>${sabor}</span></li>
                            </ul>
                            <button id="${id}" class="estiloBoton botonCarrito ${tipoProducto}">Agregar al carrito</button>
                        </div>`
        })
    } catch (err) {
        armoHTML = mostrarError()
    } finally {
        lugarHTML.innerHTML = armoHTML
        botonesCarrito(tipoProducto)
    }
}

document.addEventListener("DOMContentLoaded", cargarProductos(proteinas,divProteinas, rutaProteinas, "prote"))
document.addEventListener("DOMContentLoaded", cargarProductos(aminoacidos,divAminoacidos, rutaAminoacidos, "ami"))
document.addEventListener("DOMContentLoaded", cargarProductos(shakers, divShakers, rutaShakers, "shaks"))

const botonesCarrito = (tipoProducto)=>{
    const btnAnadir = document.querySelectorAll(`button.${tipoProducto}`)
    btnAnadir.forEach(boton => boton.addEventListener("click", (e)=> agregarCarrito(e)))
}

const agregarCarrito = (e)=>{
    let pcto = productosGeneral.find(prod => prod.id === parseInt(e.target.id))
    carrito.push(pcto)
    toast(pcto)
    guardarStorage()
}

const guardarStorage = ()=> localStorage.setItem("Carrito", JSON.stringify(carrito))

const buscarCarrito = ()=> {
    let car = JSON.parse(localStorage.getItem("Carrito"))
    car.forEach(element => carrito.push(element))
}

const noBorrarCarrito = ()=> localStorage.getItem("Carrito") && buscarCarrito() // Operador AND
noBorrarCarrito() 