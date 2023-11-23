import {cardComponent} from "../componentes/cards.js"

let pageName = document.getElementById('pageName').value
let cardContainer = document.getElementById('cardContainer')
let cards = ''
    
window.addEventListener('load', () => { 
    fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        
        data.forEach((jsonData) => {
            if (jsonData.categoria === pageName) {
                cards += jsonData.productos.map((item) => cardComponent(item)).join('');
            }        
        })
        cardContainer.innerHTML = cards
    }).catch(error => {
            console.log(error)
        })    
})



