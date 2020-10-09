do {
var numRandom =(Math.floor(Math.random()*(100 - 1) + 1));
alert(numRandom);
var numUser = prompt("Introduce un numero");
var attempts = 0;

    

if (numRandom == numUser) {
    alert("Has acertado");
    attempts= attempts +1;
}else{
    attempts = attempts+1;
    while (numUser != numRandom) {
        attempts = attempts+1;
        if (numUser > numRandom) {
            alert("No has acertado. Tu numero es mayor");    
        }
        if (numUser < numRandom) {
            alert("No has acertado. Tu numero es menor");
        } 
        

        numUser = prompt("Introduce un numero");
        
    }
    alert("Has acertado");
    
}
alert("Lo has conseguido en " + attempts);
var retry = prompt("¿Quieres volver a jugar?")
} while (retry == "si"); 
    

    


