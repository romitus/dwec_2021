let intentos = 0;

window.onload=iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener("click",validar,false);
    document.getElementById("nombre").addEventListener("focusout", mayusculas);
    document.getElementById("apellidos").addEventListener("focusout", mayusculas);
    
}

function validaNombre(){
    let elemento=document.getElementById("nombre");
    if(elemento.value===""){
        document.getElementById("errores").innerHTML = "El campo nombre no puede estar vacío\n";
        error(elemento);
        return false;
    }
    
    return true;
}

function validaApellidos(){
    let elemento=document.getElementById("apellidos");
    if(elemento.value===""){
        document.getElementById("errores").innerHTML = "El campo Apellidos no puede estar vacío\n";
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono(){
    let elemento=document.getElementById("telefono");
    if(!/^\d{9}$/.test(elemento.value)){ /* ^ MArca el princio de la cadena la \d indica un digito del 1 al 9 
        y los corchetes el tamaño de los digitos y el dolar marca el final de la cadena */
        document.getElementById("errores").innerHTML = "El campo telefono ha de tener 9 digitos\n";
        error(elemento);
        return false;
    }
    return true;
}

function validaEdad() {
    let elemento = document.getElementById("edad");
    if (elemento.value < 0 || elemento.value > 105) {
        document.getElementById("errores").innerHTML = "El campo edad no está dentro del rango 0-105\n";
        error(elemento);
        return false;
    }
    return true;
}

function validaDNI() {
let elemento = document.getElementById("nif");
let letras = [
"T","R","W","A","G","M","Y","F","P","D","X","B",
"N","J","Z","S","Q","V","H","L","C","K","E","T",
];
if (!/^\d{8}-[A-Z]$/.test(elemento.value)) {/* ^ Marca el principio de la cadena \d un digito del 1 al 9
    los corchetes el tamaño de los digitos y finalmente una letra de la A a la Z en mayusculas */
    document.getElementById("errores").innerHTML = "El campo NIF no tiene formato correcto\n";
    error(elemento);
return false;
}
if (elemento.value.charAt(9) != letras[elemento.value.substring(0, 8) % 23]) {
    document.getElementById("errores").innerHTML = "El campo NIF introducido es incorrecto\n";
    error(elemento);
return false;
}
return true;
}

function validaEmail() {
    let elemento = document.getElementById("email");
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(elemento.value)) {/*^ marca el principio  el corchete coincide con cualquier
         caracter en el set \w cualquier palabra alfa numerica \. hace referecia por si hubiera un punto, @ que 
         sería la arroba del correo mas luego \w para el set caracteres del nombre dominio, y finalmente una limitacion de 2 o 4 caracteres 
         para .es .co. .uk hasta 4 en este caso */
        document.getElementById("errores").innerHTML = "Los campos del email son incorrectos.\n";
        error(elemento);
    return false;
    }
    return true;
    }

function validaFecha(){
    let elemento=document.getElementById("fecha");
    if(!/(\d{2}\/\d{2}\/\d{4})/g.test(elemento.value)){/*\d captura caualquier digito del 1 al nueve 
        lo que está entre corchete delimita el tamaño del digito y la barra lateral / es el formato entre fechas*/
        document.getElementById("errores").innerHTML = "Los campos de la fecha son incorrectos.\n";
        error(elemento);
        return false;
    }
    return true;
}

function validaHora(){
    let elemento=document.getElementById("hora");
    if(!/(\d{2}\:\d{2})/g.test(elemento.value)){/*La \d es un digito del 1 al 9 los corchetes delimitan el tamaño de los
        digitos y los dos punto centrales son formato de la hora */
        document.getElementById("errores").innerHTML = "El campo de la hora son incorrectos.\n";
        error(elemento);
        return false;
    }
    return true;
}

function validaProvincia() {
    let elemento = document.getElementById("provincia");
    if (elemento.value == 0) {
        document.getElementById("errores").innerHTML = "No ha seleccionado ninguna opción en el campo provincia\n";
        error(elemento);
        return false;
    }
    return true;
}

function validar(e){
    intentos = intentos + 1;
    document.cookie = "Intento de Envíos del formulario: " + intentos;
    document.getElementById("intentos").innerHTML = document.cookie;
    console.log(intentos);
    if(
validaNombre() &&
validaApellidos() &&
validaEdad() &&
validaDNI() &&
validaTelefono() &&
validaEmail() &&
validaProvincia() &&
validaFecha() &&
validaHora() &&
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

function mayusculas(eventElem) {
    eventElem.target.value = eventElem.target.value.toUpperCase();
}