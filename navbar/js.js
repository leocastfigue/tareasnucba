// creamos un evento, para ejecutar una funcion para que en dispositivos moviles se pueda hacer click y que le menu se despliegue de arriba hacia abajo con todos los elementos. El evento va ser cuando todo nuestro documento DOM cargado nuestro html,se va a ejecutar una funcion
addEventListener('DOMContentLoaded',()=>{
    // creamos una constante para obtener el boton para acceder al menu 
    const btn_menu = document.querySelector('.btn_menu')
    // esto es para verificar si existe el boton (btn_menu) mediante el 'if'
    if (btn_menu){
        // como si exsite le vamos a agregar un evento (click) a ese boton (btn_menu) y se va a ejecutar otra funcion (()=>)
        btn_menu.addEventListener('click',()=>{
            // aca para obtener nuestra "ul" que es la que se va a modificar cuando estemos en moviles, y accedemos a nuestra "ul" con la clase (menu_items)
            const menu_items = document.querySelector('.menu_items')
            // agregamos la clase (show) y accedemos a "toggle" para al dar click si el elemento tiene la clase se la va a quitar y sino la tiene se la va agregar, de esa manera la ocultar o mostrar en nuestro navegador
            menu_items.classList.toggle('mostrar')
        })
    }
})
