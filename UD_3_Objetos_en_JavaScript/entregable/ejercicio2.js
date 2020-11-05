let personalInfo = prompt("Introduce los datos en este formato \“nombre:apellidos:telefono:email:codigopostal\”");
let auxArray = personalInfo.split(":");
let email = auxArray[3].split("@");

alert("Codigo postal: "+auxArray[4]+"\n"+"Apellidos: "+auxArray[1]+"\n"+"Email: "+auxArray[3]+"\n"+"Servidor: "+email[1]);

