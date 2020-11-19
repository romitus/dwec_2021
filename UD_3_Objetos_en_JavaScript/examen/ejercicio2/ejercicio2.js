let userInput = prompt("Introduzca una frase");
document.getElementById("userInput").innerHTML = userInput;
let aux = "";
let space = false;

for (let i = 0; i < userInput.length; i++) {
    space = false;
    if(Math.random() < 0.5){
        aux = aux + userInput.charAt(i).toLowerCase();
        if(userInput.charAt(i) == " "){
            aux = aux +"";
            space = true;
        }
        if(i != userInput.length -1 && space == false){
        aux = aux + "-";}
    }else{
        aux = aux + userInput.charAt(i).toUpperCase();
        if(userInput.charAt(i) == " "){
            aux = aux +"";
            space = true;
        }
        if(i != userInput.length -1 && space == false){
            aux = aux + "-";}
    }
}
aux.replace(/ /g,"");
document.getElementById("res").innerHTML = aux.trim();


