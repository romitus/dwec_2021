let userInput = prompt("Introduzca los datos en este formato: municipio:cod_parcela@nombre|apellido1|apellido2");
let aux = userInput.replace(/:/g, "|");
let aux2 = aux.replace(/@/g, "|");
let auxArray = aux2.split("|");
let aux4;
document.getElementById("municipio").innerHTML = "Municipio: " + auxArray[0];
document.getElementById("parcela").innerHTML = "Parcela: " + auxArray[1];
document.getElementById("nombre").innerHTML = "Nombre: " + auxArray[2];
document.getElementById("apellidos").innerHTML = "Apellidos: " + auxArray[3]+ " " + auxArray[4];

