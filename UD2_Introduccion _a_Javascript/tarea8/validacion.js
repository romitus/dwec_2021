function dni() {
    var numero = document.getElementById("numero").value;
    var letra = document.getElementById("letra").value;
    var cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
    var resto = numero % 23;
    var validacion = cadena.charAt(resto);
    if (letra == validacion) {
        return document.getElementById('correct').innerHTML ="Correcto";
    }else{
        return document.getElementById('incorrect').innerHTML ="Incorrecto";
    } 
}