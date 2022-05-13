document.addEventListener("DOMContentLoaded", function(){
    //declaarar variables
    let imagenes = [
        {
            url:"assets/imagen1.jpg",
            nombre:"planetas"
        },
        {
            url:"assets/imagen2.jpg",
            nombre:"planetas"
        },
        {
            url:"assets/imagen3.jpg",
            nombre:"planetas"
        },
        {
            url:"assets/imagen4.jpg",
            nombre:"planetas"
        },
        {
            url:"assets/imagen5.jpg",
            nombre:"planetas"
        },
        {
            url:"assets/imagen6.jpg",
            nombre:"planetas"
        },
        
        {
            url:"assets/imagen1.jpg",
            nombre:"planetas"
        },
        {
            url:"assets/imagen2.jpg",
            nombre:"planetas"
        },
        {
            url:"assets/imagen3.jpg",
            nombre:"planetas"
        },
        {
            url:"assets/imagen4.jpg",
            nombre:"planetas"
        },
        {
            url:"assets/imagen5.jpg",
            nombre:"planetas"
        },
        {
            url:"assets/imagen6.jpg",
            nombre:"planetas"
        }
        
    ];
    //guardar el tablero
    let tablero = document.querySelector(".tablero");

    //funcion para agregar las imagenes al talero
    function agregarImagenes(){
        for(index = 0; index < imagenes.length; index++){
            let img = document.createElement("img")
            img.setAttribute("src","assets/imagen8.webp");
            img.setAttribute("width","200px");
            img.setAttribute("heigth","200px");
            // pasar al tablero las imagenes

            tablero.appendChild(img);
        }
    }
    agregarImagenes();

})