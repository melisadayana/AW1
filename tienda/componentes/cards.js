export const cardComponent = (data) => {
        
    return `
        <div class="col">
            <div class="card">

                <div class="card-img-top">
                    <img class="foto" src="${data.img}" style="width: 100%; height: 100%;">
                </div>

                <h5 class="card-title mx-3 my-3">
                    ${data.title}
                </h5>

                <div class="card-body mb-2">
                    <div class="card-text">
                        <h6 class="text-secondary">
                            <cite title="Source Title">${data.desc}</cite>
                        </h6>
                    </div>
                    <p class="text-secondary">${data.size}</p>
                </div>

                <div class="card-footer text-body-secondary">
                    <div class="row">
                        <div class="col">
                            <p class="card-price">${data.price}</p>
                        </div>
                        <div class="col">
                            <input type="number" class="form-control" min="0" max="3" placeholder="0">
                        </div>    
                    </div>
                </div>

                <div class="col-12">
                    <input class="btn text-white w-100 mt-4 fw-semibold shadow-sm" style="background-color: rgb(247, 98, 66);" type="submit" value="Añadir al carrito" id="agregar">
                </div>

            </div>  
        </div> 
    `
}

export const cardHome = (data) => {
    
    return `
        <div class="col">
            <div class="card">
                    
                <div class="card-img-top">
                    <img class="foto" src="${data.img}" style="width: 100%; height: 100%;">
                </div>

                <h5 class="card-header">
                    ${data.title}
                </h5>

                <div class="col-12">
                    <a href=${data.link}>
                        <input class="btn text-white w-100 mt-4 fw-semibold shadow-sm" style="background-color: rgb(247, 98, 66);" value="Ver más">
                    </a>
                </div>

                
                
                
            </div>
        </div>
    `
}