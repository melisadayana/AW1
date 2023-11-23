let pageName = document.getElementById('pageName').value

//Carga el navbar
import {navbarComponent} from "./componentes/navbar.js"

let navContainer = document.querySelector('header')
let title = document.getElementById('title')

window.addEventListener('load', () => {
    navContainer.innerHTML = navbarComponent
    document.title = `${pageName} - Mi tienda`
})

//Carga las cards del home
import {cardHome} from "./componentes/cards.js"

let cardContainer = document.getElementById('cardContainer')
let cards = ''
    
window.addEventListener('load', () => { 
    fetch('../productos/data.json')
    .then((res) => res.json())
    .then((data) => {
        
        data.forEach((jsonData) => {

            jsonData.productos.forEach((item) => {
                if (item.id === jsonData.destacado) {
                    cards += cardHome(item)
                }
            })
            console.log(cards)                
        })
        cardContainer.innerHTML = cards
    }).catch(error => {
            console.log(error)
        })    
})