import {navbarComponent} from "./componentes/navbar.js"

let navContainer = document.querySelector('header')
let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')

window.addEventListener('load', () => {
    navContainer.innerHTML = navbarComponent
    document.title = `${pageName} - Mi tienda`
})