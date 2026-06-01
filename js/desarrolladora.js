 // Obtener el modal
    var modal = document.getElementById("modal");
    var imgGrande = document.getElementById("imgGrande");
    var imagenChica = document.querySelector("main img");

    // Al hacer click en la imagen pequena, abrir el modal y poner la imagen
      imagenChica.onclick = function(){
        modal.style.display = "block";
        // Cambiá manually la ruta aquí
        imgGrande.src = "img/foto1.1.png"; 
    }
    // Funcion para cerrar
    function cerrar() {
        modal.style.display = "none";
    }

    // Cerrar si el usuario hace click fuera de la imagen
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
