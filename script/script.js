document.querySelector('form').addEventListener('submit', validarDatos);

function validarDatos() {
    window.event.preventDefault()

    if (document.form.first_name.value == "") { // si el (value) en el form(<form class="form" name="form">),nombre es vacio mostrar la alerta
        alert("Campo nombre es obligatorio")
        document.form.first_name.focus() // 

    } else if (document.form.email.value == "") {
        alert("Campo e-mail es obligatorio")
        document.form.email.focus()

    } else if (document.form.asunto.value == "") {
        alert("Campo Asunto es obligatorio")
        document.form.asunto.focus()

    } else if (document.form.descripcion.value == "" || document.form.descripcion.value.length <= 50) {
        alert("Campo Mensaje es obligatorio y debe contener minimo 50 carateres")
        document.form.mensaje.focus()

    } else if (document.form.email.value.indexOf('@') == -1 ||
        document.form.email.value.indexOf('.') == -1) {
        alert("e-mail inválido")
    }

}