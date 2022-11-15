const ingresarDatos = ()=>{
    if (inputNombre.value == "" || inputApellido.value == "" || inputEdad.value == "" || inputEmail.value == ""){
        alertas('warning','Complete todos los datos.','', 'white')
    } else {
        localStorage.setItem("Nombre", inputNombre.value) 
        localStorage.setItem("Apellido", inputApellido.value) 
        localStorage.setItem("Edad", inputEdad.value)
        localStorage.setItem("Email", inputEmail.value)
        alertas('success','Datos cargados.','Ya estás registrado en Thikia Sport.', 'white')
    }
}

ingresarBoton.addEventListener("click", ingresarDatos)

const borrarCargarForm = ()=> {
    contenedorForm.innerHTML = ""
    subtitulo.innerHTML = "Aquí encontrarás los mejores suplementos deportivos."
    titulo.innerHTML += `, ${localStorage.getItem("Nombre").toUpperCase().trim()}.`
}

const borrarForm = ()=> localStorage.getItem("Nombre") && borrarCargarForm()

ingresarBoton.addEventListener("click", borrarForm)
document.addEventListener("DOMContentLoaded", borrarForm)