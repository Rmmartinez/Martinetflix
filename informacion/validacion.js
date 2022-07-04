var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var domicilio = document.getElementById("domicilio");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var pais = document.getElementById("pais");

var error = document.getElementById("error");
error.style.color = "red";

let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
let telRegEx = /^\d{10}$/;
let letterRegEx = /^[A-Za-z]+$/;

function enviarFormulario(){
    console.log("Enviando formulario...");
    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push("Ingresá tu nombre");
    }

    if(!letterRegEx.test(nombre.value) && nombre.value !== null && nombre.value !== ''){
        mensajesError.push("Nombre inválido");
    }

    if(apellido.value === null || apellido.value === ''){
        mensajesError.push("Ingresá tu apellido");
    }

    if(!letterRegEx.test(apellido.value) && apellido.value !== null && apellido.value !== ''){
        mensajesError.push("Apellido inválido");
    }

    if(domicilio.value === null || domicilio.value === ''){
        mensajesError.push("Ingresá tu domicilio");
    }

    if(email.value === null || email.value === ''){
        mensajesError.push("Ingresá tu correo");
    }

    if(!emailRegEx.test(email.value) && email.value !== null && email.value !== ''){
        mensajesError.push("Correo inválido");
    }

    if(tel.value === null || tel.value === ''){
        mensajesError.push("Ingresá tu teléfono");
    }

    if(!telRegEx.test(tel.value) && tel.value !== null && tel.value !== ''){
        mensajesError.push("Teléfono inválido");
    }

    if(pais.value === null || pais.value === ''){
        mensajesError.push("Ingresá tu país");
    }

    error.innerHTML = mensajesError.join(" / ");

    return false;
}
