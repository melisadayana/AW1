export const cardComponent = (data) => {
    
    data.title = data.title.toUpperCase()
    return `
        <div class="card">
            <div class="card-header">
                ${data.title}
            </div>

            <div class="card-img">
                <img src="${data.img}">
            </div>

            <div class="card-body">
                ${data.desc}
            </div>

            <div class="card-footer">
                ${data.footer}
            </div>
        </div>
    `
}