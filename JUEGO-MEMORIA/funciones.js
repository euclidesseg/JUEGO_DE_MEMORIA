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

    let imgelegida = [];
    let imgelegidapos = [];

    //guardar el tablero
    let tablero = document.querySelector(".tablero");
    let contador = 0
    let aciertos = document.querySelector(".aciertos");

    //funcion para agregar las imagenes al talero
    function agregarImagenes(){
        for(index = 0; index < imagenes.length; index++){
            let img = document.createElement("img")
            img.setAttribute("src","assets/imagen8.webp");
            img.setAttribute("width","200px");
            img.setAttribute("heigth","200px");
            img.setAttribute("data-posicion",index);
            img.addEventListener("click", mostrarImagenes);

            // pasar al tablero las imagenes

            tablero.appendChild(img);
        }
    }
    agregarImagenes();
    //funcion para mostrar imagenes

    function mostrarImagenes(){
        let posicionImg = this.getAttribute("data-posicion");
        this.setAttribute("src",imagenes[posicionImg].url);

        imgelegida.push(imagenes[posicionImg].nombre);
        imgelegida.push([posicionImg]);
        
        if(imgelegida.length === 2){
            setTimeout(compararImagenes,300);
        }
    }
    function compararImagenes(){

        let todasLasImagenes = document.querySelectorAll(".tablero img");
        let posicion1 = imgelegidapos[0];
        let posicion2 = imgelegidapos[0];

        if(imgelegida[0] === imgelegida[1]){
            alert("las dos imagenes son iguales");
            todasLasImagenes[posicion1].setAttribute("src","JUEGO-MEMORIA/assets/imagen7.jpg")
            todasLasImagenes[posicion2].setAttribute("src","JUEGO-MEMORIA/assets/imagen7.jpg")
            contador++;
            aciertos.textContent = contador;
        }else{
            alert("fallastes")
            todasLasImagenes[posicion1].setAttribute("src","assets/imagen8.webp")
            todasLasImagenes[posicion2].setAttribute("src","assets/imagen8.webp")

        }
        imgelegida[0];
        imgelegidapos[0];
    }
})