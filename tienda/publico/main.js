const form = document.getElementById('formulario')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    fetch('http://127.0.0.1:5500/privado/data_users.json')
    .then(res => res.json()) 
    .then(users => {
        const user = users.find(e => e.usuario === username && e.pass === password)
        
        if(user) {
            sessionStorage.setItem('userData', JSON.stringify(user))
            window.location.href = "http://127.0.0.1:5500/publico/home.html"
        } else {
            document.getElementById('lblError').textContent = "Error en los datos ingresados."
        }
    })
})
