// creamos un evento, para ejecutar una funcion para que en dispositivos moviles se pueda hacer click y que le menu se despliegue de arriba hacia abajo con todos los elementos
addEventListener('DOMContentLoaded',() => {
    const botonMenu = document.querySelector('.botonMenu')
    if (botonMenu){
        botonMenu.addEventListener('click', () =>{
            const itemsNav = document.querySelector('.itemsNav')
            itemsNav.classList.toggle('show')
        })
    }
})

