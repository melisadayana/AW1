let pageName = document.getElementById('pageName').value

import {iconComponent} from "./componentes/head.js"
//Carga el navbar
import {navbarComponent} from "./componentes/header.js"
//Carga las cards del home y usuario
import {cardHome} from "./componentes/cards.js"
//Importa el footer
import {footerComponent} from "./componentes/footer.js"
//Importa funciones de Storage
import {getProductData, setProductData, getUserData, logOut} from "./utils/storage.controller.js"
//Importa la funcion que actualiza el carrito
import {contadorCarrito} from "../utils/count.carrito.js"

let userInfo = getUserData('userData')

if (Object.keys(userInfo).length > 0) {

    let iconContainer = document.querySelector('head')
    let navContainer = document.querySelector('header')    
    let footerContainer = document.querySelector('footer')
    let cardContainer = document.getElementById('cardContainer')
    let cards = ''

    window.addEventListener('load', () => {
        
        //iconContainer.innerHTML = iconComponent
        navContainer.innerHTML = navbarComponent        
        footerContainer.innerHTML = footerComponent
        document.title = `Mi tienda | ${pageName}`
        
        if (pageName === 'Home') {
            fetch('http://127.0.0.1:5500/privado/data_products.json')
            .then((res) => res.json())
            .then((data) => {
                let aux = 0
                data.forEach((jsonData) => {
                    
                    jsonData.productos.forEach((item) => {
                        
                        if (item.id === jsonData.destacado) {                        
                            cards += cardHome(item)
                        }   

                        aux = aux + 1  
                        if (producto.length <= aux) {
                            item['cant'] = 0
                            producto.push(item)
                        }        
                    })
                                
                })          
                setProductData('itemsData', producto)
                
                cardContainer.innerHTML = cards

            }).catch(error => {
                    console.log(error)
                })   
                
            let botonCarrito = document.querySelector('.btn-carrito')
            //console.log(botonCarrito)
            let producto = getProductData('itemsData')
            contadorCarrito(producto, botonCarrito)        
        }

        const btnUser = document.querySelector('.cart-container-user') 
        const containerInfoUsuario = document.querySelector('.info-usuario')

        btnUser.addEventListener('click', () => {
            containerInfoUsuario.classList.toggle('hidden-cart')
        })
    })

} else {
    window.location.href = "http://127.0.0.1:5500/publico/login.html"
}

