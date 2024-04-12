let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
// }
// //Funcion que aplica las animaciones de las habilidades
// function efectoHabilidades(){
//     var skills = document.getElementById("skills");
//     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
//     if(distancia_skills >= 300){
//         let habilidades = document.getElementsByClassName("progreso");
//         habilidades[0].classList.add("htmlcss");
//         habilidades[1].classList.add("js");
//         habilidades[2].classList.add("postgreSQL");
//         habilidades[3].classList.add("pascal");
//         habilidades[4].classList.add("smalltack");
//         habilidades[5].classList.add("lisp");
//         habilidades[6].classList.add("prolog");
//         habilidades[7].classList.add("mySQL");
//         habilidades[8].classList.add("cshar");
//     }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


 // Función que se ejecuta al hacer clic en el botón
 document.getElementById('descargar-pdf').addEventListener('click', function () {
    // Crea un objeto jsPDF
    var doc = new jsPDF();

    // Obtiene el contenido HTML de la página actual
    var html = document.documentElement.outerHTML;

    // Convierte el contenido HTML en un documento PDF
    doc.fromHTML(html, 15, 15, { 'width': 170 });

    // Descarga el archivo PDF
    doc.save("mi-pagina.pdf");
});

  

