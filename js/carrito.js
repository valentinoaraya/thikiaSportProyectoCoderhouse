let carrito = []

const cargar = ()=> '<img width="30px" src="../imagenes/loading.gif" alt="">'

class Compra{
    confirmarCompra(){
        alertaCompra('', 'Compra confirmada!', 'Muchas gracias por confiar.')
    }
}

const comprar = ()=> {
    btnComprar.innerHTML = cargar()
    setTimeout(() => {
        if (carrito.length == 0){
            alertas('error', 'El carrito está vacío!', 'Agregue productos al carrito para poder comprar.')
            btnComprar.innerHTML = "COMPRAR"
        } else{
            let compra = new Compra()
            compra.confirmarCompra()
            btnComprar.innerHTML = "COMPRAR"
        }
    }, 2000);
}

btnComprar.addEventListener("click", comprar)

const limpiarCarrito = ()=>{
    carrito = []
    bodyCarrito.innerHTML = ""
    divTotal.innerHTML = `<p>TOTAL: <span>$0</span></p>`
    localStorage.removeItem("Carrito")
}

btnLimpiar.addEventListener("click", limpiarCarrito)

const mostrarCarrito = ()=>{
    bodyCarrito.innerHTML = ""
    carrito.forEach(({nombre, precio, id}) =>{ // Desestructuración: En vez de pasarle el objeto le pasamos las propiedades que contiene que queremos que se muestren.
        bodyCarrito.innerHTML += `<tr>
                                    <td class="contenedorImg">
                                    <img id="${id}" class="imgPapelera" src="../imagenes/18297.png" alt="">
                                    </td>
                                    <td>${nombre}</td>
                                    <td>$ ${precio}</td>
                                  </tr>`
    })
}

const sacarTotal = ()=> {
    total = carrito.reduce((acc,elem)=> acc+elem.precio,0)
    divTotal.innerHTML = `<p>TOTAL:<span> $ ${total}</span></p>`
}

const mostrarTotal = ()=> (localStorage.getItem("Carrito")) ? sacarTotal() : divTotal.innerHTML = `<p>TOTAL: <span>$0</span></p>` //Operador Ternario

document.addEventListener("DOMContentLoaded", mostrarCarrito)
document.addEventListener("DOMContentLoaded", mostrarTotal)

const botonesEliminar = ()=>{
    const imgDelete = document.querySelectorAll("img.imgPapelera")
    imgDelete.forEach(boton => boton.addEventListener("click", (e)=> eliminarElemento(e)))
}

const eliminarElemento = (e)=>{
    let elim = carrito.map(prod => prod.id)
    let prEliminar = carrito.find(prod => prod.id == parseInt(e.target.id))
    index = prEliminar.id
    let posicion = elim.indexOf(index)
    carrito.splice(posicion,1)
    localStorage.removeItem("Carrito")
    carrito.length > 0 && localStorage.setItem("Carrito", JSON.stringify(carrito))
    mostrarCarrito()
    mostrarTotal()
    botonesEliminar()
}

document.addEventListener("DOMContentLoaded", botonesEliminar)

const buscarCarrito = ()=> {
    let car = JSON.parse(localStorage.getItem("Carrito"))
    car.forEach(element => carrito.push(element))
}

const noBorrarCarrito = ()=> localStorage.getItem("Carrito") && buscarCarrito() // Operador AND
noBorrarCarrito() 