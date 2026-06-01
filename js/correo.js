const btn = document.getElementById('button');

function mensaje() {
    /*de guardan el variables todos los campos ingresador por el usuario*/
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let cont = document.getElementById("contactar").value;
    let message = document.getElementById("message").value;
    let motivo =
        document.querySelector("input[name='motivo']:checked")?.value;

    // verificar checkboxes si estan seleccionados 
    if (document.getElementById("chk1").checked &&
        document.getElementById("chk2").checked) {

        // verificar campos vacíos 
        if (
            nombre != "" &&
            apellido != "" &&
            telefono != "" &&
            email != "" &&
            cont != "" &&
            message != "" &&
            motivo != undefined
        ) {
            /*si todos los campos estan completados y los checks chekeados*/
            btn.value = 'Enviando...';
            /*Conecta con el servicio de emailjs y su template*/
            const serviceID = 'default_service';
            const templateID = 'template_skkfy3p';
            //estos parametros es una variable objeto que guarda las demas varibles
            //con el mismo nombre que en emailjs 
            let parametros = {
                nombre,
                apellido,
                telefono,
                email,
                cont,
                message,
                motivo
            };
            //se envia al emailjs se conecta con el servido y si template, y se pone los datos del parametro 
            emailjs.send(serviceID, templateID, parametros)
                .then(() => {
                    //si todo esta correcto se cambia el titulo del boton enviar 
                    btn.value = 'Enviar';
                    //el modal aparece con el icono de informacion y con el texto de enviado 
                    document.getElementById('modal').style.display = "flex";

                    let imagen = document.getElementById('imagen');

                    imagen.src = "img/informacionn.png";

                    document.getElementById('mensaje').innerText = "Enviado";

                })

                .catch((err) => {
                    //si hay un error aparece un mensaje de error en el modal con un icono de error 

                    btn.value = 'Enviar';

                    document.getElementById('modal').style.display = "flex";

                    let imagen = document.getElementById('imagen');

                    imagen.src = "img/advertencia.png";

                    document.getElementById('mensaje').innerText = "Error al enviar";

                });

        } else {
            //si esta vacio algun campo aparece el modal diciendo que complete todos los campos 
            document.getElementById('modal').style.display = "flex";

            let imagen = document.getElementById('imagen');
            imagen.src = "img/advertencia.png";
            document.getElementById('mensaje').innerText = "Complete todos los campos";
        }
    } else {
        /*si no se acpeto todos los check box aparece el modal pidiendo que se 
        acpete todos los campos */
        document.getElementById('modal').style.display = "flex";
        let imagen = document.getElementById('imagen');
        imagen.src = "img/advetencia.png";
        document.getElementById('mensaje').innerText = "Aceptar los campos";
    }
}
function cerrar() {
    document.getElementById('modal').style.display = "none";
}