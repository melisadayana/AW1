let pageName = document.getElementById('pageName').value

//Carga el navbar
import {navbarComponent} from "./componentes/navbar.js"
//Carga las cards del home
import {cardHome} from "./componentes/cards.js"
//Carga la card del usuario
import {cardUser} from "./componentes/cards.js"

if (pageName === 'usr') {
    
    let cardContainerUsr = document.getElementById('cardContainer')
    let card = ''
    let userInfo = ''


    const getUserData = (key) => {
        return JSON.parse(sessionStorage.getItem(key))
    }

    const logOut = (key) => {
        sessionStorage.removeItem(key)        
    }

    window.addEventListener('load', () => {

        userInfo = getUserData('userData')
        console.log(userInfo)
        card = cardUser(userInfo)

        cardContainerUsr.innerHTML = card

        document.getElementById('btnLogOut').addEventListener('click', () => {
            logOut('userData')
            window.location.href = "http://127.0.0.1:5500/publico/login.html"
        })
    })
} else {

    let navContainer = document.querySelector('header')
    let title = document.getElementById('title')

    window.addEventListener('load', () => {
        navContainer.innerHTML = navbarComponent
        document.title = `${pageName} - Mi tienda`
    })

    let cardContainer = document.getElementById('cardContainer')
    let cards = ''
        
    window.addEventListener('load', () => { 
        fetch('http://127.0.0.1:5500/privado/data_products.json')
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
}
