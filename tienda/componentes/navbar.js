const url = 'http://127.0.0.1:5500/'

let productos = [
    {subtitle:'Calzas', sublink:`${url}productos/calzas.html`},
    {subtitle:'Tops', sublink:`${url}productos/tops.html`},
    {subtitle:'Remeras', sublink:`${url}productos/remeras.html`},
    {subtitle:'Camperas', sublink:`${url}productos/camperas.html`},
    {subtitle:'Bikinis', sublink:`${url}productos/bikinis.html`}
]

let navElements = [    
    {title:'Home', link:`${url}publico/home.html`, dropdown:'', svg:''},
    {title:'Productos', link:'', dropdown: productos},
    {title:'Carrito', link:`${url}publico/carrito.html`, dropdown:'', svg: `<svg xmlns="${url}assets/cart-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>`},
    {title:'Salir', link:`${url}publico/login.html`, dropdown:'', svg:''}
]

export const navbarComponent = `
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="${url}assets/corona.svg" alt="logo" with="80px" height="80px">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    ${
                        navElements.map(e => {
                            if(e.title == 'Productos') {                                
                                return `
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" style="color: whitesmoke;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Productos
                                        </a>
                                        <ul class="dropdown-menu" style="background-color: #C91B66;">                                        
                                        ${
                                            e.dropdown.map(i => { 
                                                return `
                                                <li><a class="dropdown-item" style="color: whitesmoke; background-color: transparent;" href=${i.sublink}>${i.subtitle}</a></li>
                                            `
                                            }).join('')
                                        }
                                        </ul>
                                    </li>
                                `                               
                            } else {
                                return `
                                    <li class="nav-item">
                                        <a class="nav-link active" style="color: whitesmoke;" aria-current="page" href=${e.link}>${e.title}${e.svg}</a>
                                    </li>
                                `
                            }
                        }).join('')
                    }                    
                </ul>
                <div class="btn" style="border: none;">
                    <a href="${url}publico/carrito.html">
                        <svg src="${url}assets/bag.svg" width="18" height="18" fill="whitesmoke" class="bi bi-bag" viewBox="0 0 16 16" style="transform: scale(1.5);">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            <span class="js-cart-widget-amount badge badge-amount">0</span>
                        </svg>
                    </a>
                </div>     
                <div class="btn" style="border: none;">
                    <a href="${url}publico/usuario.html">
                        <svg xmlns="${url}assets/bag.svg" width="18" height="18" fill="whitesmoke" class="bi bi-person-check" viewBox="0 0 16 16" style="transform: scale(1.5);">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                        </svg>
                    </a>
                </div>            
            </div>            
        </div>
    </nav>
`