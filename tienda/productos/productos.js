import {cardComponent} from "../componentes/cards.js"

let cardData = [
    {title:'Bikini Savage', desc:'Triángulo para atar y colaless - Lycra premium y ambas piezas forradas', precio: 9200, footer:'Disponible talles M/L/XL', img:'./imagenes/savage.jpeg'},
    {title:'Bikini Maca Aquarela', desc:'Triángulo para atar y colaless', precio: 9200, footer:'Disponible talles L/XL', img:'./imagenes/maca.jpeg'},
    {title:'Bikini Psicodélico', desc:'Top para atar y colaless', precio: 9200, footer:'Disponible talles XL/4', img:'./imagenes/psico.jpeg'},
    {title:'Bikini Flores', desc:'Triángulo y colaless', precio: 9200, footer:'Consultar por talles disponibles', img:'./imagenes/flores.jpeg'},
    {title:'Bikini Print', desc:'Triángulo y colaless', precio: 9200, footer:'Disponible talles S/M/L', img:'./imagenes/print.jpeg'}
]

let cardContainer = document.getElementById('cardContainer')


window.addEventListener('load', () => { 
    const cards = cardData.map(e => {           
        return cardComponent(e)                    
    })
    cardContainer.innerHTML = cards
})

