let userInput = prompt("Introduzca su nombre y apellidos");
let counter = 0;
let numLetters = 0;
let nameArray = userInput.split(" ");
let name2 = "";

while (counter != userInput.length) {
    if (userInput.charAt(counter) != ' ') {
        numLetters = numLetters + 1;
    }
    counter = counter + 1;
}

alert(nameArray.length);
alert("El tamaño del nombre más los apellidos es " + numLetters);
alert(userInput.toLowerCase());
alert(userInput.toUpperCase());
alert("Nombre: " + nameArray[0]+ " Apellido1: "+ nameArray[1] + " Apellido2: " + nameArray[2]);

if (nameArray.length == 4) {
    alert(nameArray[0].charAt(0).toLowerCase()+nameArray[2].toLowerCase()+nameArray[3].charAt(0).toLowerCase());    
}else{
    alert(nameArray[0].charAt(0).toLowerCase()+nameArray[1].toLowerCase()+nameArray[2].charAt(0).toLowerCase());
}
if (nameArray.length == 4) {
    for (let i = 0; i < 3; i++) {
        name2 = name2 + nameArray[0].charAt(i).toLowerCase();
    }
    
    for (let i = 0; i < 3; i++) {
        name2 = name2 + nameArray[2].charAt(i).toLowerCase();
    }
    
    for (let i = 0; i < 3; i++) {
        name2 = name2 + nameArray[3].charAt(i).toLowerCase();
    } 
} else {
    for (let i = 0; i < 3; i++) {
        name2 = name2 + nameArray[0].charAt(i).toLowerCase();
    }
    
    for (let i = 0; i < 3; i++) {
        name2 = name2 + nameArray[1].charAt(i).toLowerCase();
    }
    
    for (let i = 0; i < 3; i++) {
        name2 = name2 + nameArray[2].charAt(i).toLowerCase();
    }
}
alert(name2);