const username = document.getElementById('username')
const password = document.getElementById('password')
const confirmar = document.getElementById('confirmar')

confirmar.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value       
    }
    window.location.href = "./home.html"
})

const nombre = document.getElementById('txtNombre')
const apellido = document.getElementById('txtApellido')
const email = document.getElementById('txtEmail')
const fecha = document.getElementById('date')
const pass = document.getElementById('txtPass')
const aceptar = document.getElementById('confirmar')

aceptar.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        fecha: fecha.value,
        pass: pass.value
    }
    window.location.href = "./login.html"
})