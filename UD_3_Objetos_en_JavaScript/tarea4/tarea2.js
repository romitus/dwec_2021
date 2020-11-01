let password = prompt("Introduce una contraseña segura");
let upperCase = false;
let lowerCase = false;
let numberExist = false;
let specialSymbol = ["-","_","@","#","$","%","&"];
let specialSymbolExist = false;

if (password.length < 8 || password.length > 16) {
    alert("La contraseña debe tener entre 8 y 16 caracteres.");
}
for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) == password.charAt(i).toUpperCase()) {
        upperCase = true;
    }    
}
if (upperCase == false) {
    alert("Debe de tener una letra mayúscula.")
}

for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) == password.charAt(i).toLowerCase()) {
        lowerCase = true;
    }    
}
if (lowerCase == false) {
    alert("Debe de tener una letra minúscula.")
}
for (let i = 0; i < password.length; i++) {
    if (isNaN(password.charAt(i)) == false)  {
        numberExist = true;
    }    
}

if (numberExist == false) {
    alert("Debe de tener un número.")
}

for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < specialSymbol.length; j++) {
        if (password.charAt(i) === specialSymbol[j]) {
            specialSymbolExist = true;
        }
    }
}
if (specialSymbolExist == false) {
    alert("Debe tener uno de los siguientes valores: -, _, @, #, $, % o &.")
}

if(specialSymbolExist == true && upperCase == true && lowerCase == true && numberExist == true){
    alert("La contraseña es segura.");
}else{
    alert("La contraseña no es segura.");
}