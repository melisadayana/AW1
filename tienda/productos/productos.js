import {cardComponent, cardCarrito, cardResumen, cardItem} from "../componentes/cards.js"
//Importa funciones de Storage
import {getProductData, setProductData} from "../utils/storage.controller.js"
import {contadorCarrito} from "../utils/count.carrito.js"

let pageName = document.getElementById('pageName').value
let cardContainer = document.getElementById('cardContainer')
let resumenContainer = document.getElementById('resumenContainer')
let itemsContainer = document.getElementById('itemsContainer')
let totalCarrito = document.getElementById('total')
let cards = ''
let items = ''
let totalItem = 0, total = 0
let mensaje = '&text=Hola%20Mica,%20te%20paso%20mi%20pedido'
let btnDeleteItem = ''

if (pageName != 'Carrito') {
    window.addEventListener('load', () => {     

        fetch('http://127.0.0.1:5500/privado/data_products.json')
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

            let producto = getProductData('itemsData')    
            let botonCarrito = document.querySelector('.btn-carrito')
            contadorCarrito(producto, botonCarrito)
    })

    // Asigna el evento click al contenedor de las cards (cardContainer)
    cardContainer.addEventListener('click', (event) => {
        let producto = getProductData('itemsData')
        // Verifica si el elemento clickeado es un botón con el nombre 'btnAgregar'
        if (event.target.name === 'btnAgregar') {
            // Obtiene el data-id del botón clickeado
            const dataId = event.target.dataset.id

            // Obtiene el valor del atributo 'value' del elemento con nombre 'cantProdu' correspondiente al data-id
            const cantidadElement = document.querySelector(`input[name="cantProdu"][data-id="${dataId}"]`)
            const cantidad = cantidadElement ? cantidadElement.value : 0

            // Ahora puedes usar dataId y cantidad según tus necesidades
            //console.log('Data-id:', dataId);
            //console.log('Cantidad:', cantidad);

            producto.forEach((item) => {
                if (item.id === dataId) {
                    item.cant = parseInt(cantidad)
                    setProductData('itemsData', producto)
                }
            });
        }
        let botonCarrito = document.querySelector('.btn-carrito')
        contadorCarrito(producto, botonCarrito)
    })

} else {

    window.addEventListener('load', () => {

        let producto = getProductData('itemsData')

        producto.forEach((item) => {
                                
            if (item.cant > 0) {                              
                totalItem = (item.cant * item.price)  
                cards += cardCarrito(item)
                items += cardItem(item, totalItem)
                total = total + totalItem
            }
        })
        
        cardContainer.innerHTML = cards        

        let botonCarrito = document.querySelector('.btn-carrito')
        contadorCarrito(producto, botonCarrito)
    })

    window.onload = function() {
        if (items.length > 0) {
            itemsContainer.innerHTML = items
            totalCarrito.innerHTML = '$ ' + total.toLocaleString('es-AR')

            //mensaje = mensaje + 

        } else {
            itemsContainer.innerHTML = "Tu carrito está vacío"
            totalCarrito.innerHTML = '$ ' + total.toLocaleString('es-AR')
        }

        resumenContainer = document.getElementById('resumenContainer');

        const elementosCart = document.querySelectorAll('.cart-item');

        // Recorre cada elemento y construye la cadena de mensaje
        elementosCart.forEach((elemento, index) => {
            // Obtén el texto del div con clase 'nombre'
            const nombre = elemento.querySelector('.nombre').textContent.replace(/ /g, '%20');

            // Obtén el valor del input
            const cantidad = elemento.querySelector('input').value;

            // Obtén el texto del h2
            const precio = elemento.querySelector('h2').textContent;

            // Concatena los elementos y agrega '%20' en lugar de espacios
            mensaje += `%0A${nombre}%20(${cantidad})%20${precio}`;

            // Agrega '%0A' para un salto de línea después de cada elemento
            //if (index < elementosCart.length - 1) {
            //    mensaje += '%0A';
            //}
        });
        mensaje += `%0ATotal%20$%20${total.toLocaleString('es-AR')}%0AGracias!`;

        // Nuevo contenido que deseas agregar
        let nuevoContenido = `<a href="https://api.whatsapp.com/send?phone=543517656710${mensaje}" class="btn btn-primary w-100 mt-4" id="btnEnviar">Enviar pedido</a>`
        //let nuevoContenido = `<a href="https://127.0.0.1:5500/productos/api.ultramsg.js" class="btn btn-primary w-100 mt-4" id="btnEnviar">Enviar pedido</a>`
        // Crear un nuevo elemento div
        let nuevoElemento = document.createElement('a')

        // Establecer el HTML del nuevo elemento
        nuevoElemento.innerHTML = nuevoContenido

        // Agregar el nuevo elemento al final del contenedor
        resumenContainer.appendChild(nuevoElemento)
        //&text=Hola%20Angel%2C%20vi%20tu%20portfolio%2C%20queria%20hacerte%20una%20consulta
    }

    resumenContainer.addEventListener('click', (event) => {
        
        let producto = getProductData('itemsData')

        if (event.target.name === 'delItem') {
            // Obtiene el data-id del botón clickeado
            const dataId = event.target.dataset.id
            // Obtiene el valor del atributo 'value' del elemento con nombre 'cantProdu' correspondiente al data-id
            const cantidadElement = document.querySelector(`input[name="cantProdu"][data-id="${dataId}"]`)
            const cantidad = cantidadElement ? cantidadElement.value : 0

            producto.forEach((item) => {
                if (item.id === dataId) {
                    item.cant = parseInt(0)
                    setProductData('itemsData', producto)
                }
            });
            location.reload(true)
        }        
    })

    cardContainer.addEventListener('click', (event) => {
        
        let producto = getProductData('itemsData')
        // Verifica si el elemento clickeado es un botón con el nombre 'btnAgregar'
        if (event.target.name === 'cantProdu') {
            // Obtiene el data-id del botón clickeado
            const dataId = event.target.dataset.id

            // Obtiene el valor del atributo 'value' del elemento con nombre 'cantProdu' correspondiente al data-id
            const cantidadElement = document.querySelector(`input[name="cantProdu"][data-id="${dataId}"]`)
            const cantidad = cantidadElement ? cantidadElement.value : 0

            producto.forEach((item) => {
                if (item.id === dataId) {
                    item.cant = parseInt(cantidad)
                    setProductData('itemsData', producto)
                }
            });


            location.reload(true)
        }

        if (event.target.name === 'btnEliminar') {
            // Obtiene el data-id del botón clickeado
            const dataId = event.target.dataset.id

            producto.forEach((item) => {
                if (item.id === dataId) {
                    item.cant = parseInt(0)
                    setProductData('itemsData', producto)
                }
            });
            location.reload(true)
        }

        let botonCarrito = document.querySelector('.btn-carrito')
        contadorCarrito(producto, botonCarrito)
    })

}