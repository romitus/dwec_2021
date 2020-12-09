let tirada = 0;
window.onload=iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click",validar,false);
    
}


function validaNombre(){
    let elemento=document.getElementById("name");
    if(elemento.value===""){
        document.getElementById("errores").innerHTML = "El campo nombre no puede estar vacío\n";
        error(elemento);
        return false;
    }
    success(elemento);
    return true;
}

function validaYear() {
    let elemento = document.getElementById("year");
    if (elemento.value < 700 || elemento.value > 8000) {
        document.getElementById("errores").innerHTML = "El campo año es incorrecto\n";
        error(elemento);
        return false;
    }
    success(elemento);
    return true;
}

function validaHabilidades() {
    let elemento = document.getElementById("skills");
    if(!/([MWSBSTALdSv])/g.test(elemento.value)){
        document.getElementById("errores").innerHTML = "El campo habilidades es incorrectos.\n";
        error(elemento);
        return false;
    }
    success(elemento);
    return true;
}

function validaTirada() {
    let elemento = document.getElementById("tryDam");
    if(!/([F][x2>=<][R]\d{2})/g.test(elemento.value)){
        document.getElementById("errores").innerHTML = "El campo tirada es incorrectos.\n";
        error(elemento);
        return false;
    }
    success(elemento);
    return true;
}

function validaRol() {
    let elemento = document.getElementById("roles");
    if (elemento.value == 0) {
        document.getElementById("errores").innerHTML = "No ha seleccionado ninguna opción en el campo rol\n";
        error(elemento);
        return false;
    }
    success(elemento);
    return true;
}

function validaPassword() {
    let elemento = document.getElementById("pwd");
    if(!/([A-Z]{2})([\W^:])\w{8,}#\d{2}/g.test(elemento.value)){
        document.getElementById("errores").innerHTML = "El campo password es incorrectos.\n";
        error(elemento);
        return false;
    }
    success(elemento);
    return true;
}

function validar(e){
    tirada = tirada + 1;
    document.cookie = "Intento de Envíos del formulario: " + tirada;
    document.getElementById("tiradas").innerHTML = document.cookie;
    if(
validaNombre() &&
validaYear() &&
validaHabilidades() &&
validaTirada() &&
validaRol() &&
validaPassword() &&
confirm("Pulsa aceptar si deseas enviar el formulario")
    ){
return true;
    }else{
        e.preventDefault();
        return false;
    }
}

function error(elemento){
    elemento.className="error";
    elemento.focus();
}
function success(elemento){
    elemento.className="success";
}