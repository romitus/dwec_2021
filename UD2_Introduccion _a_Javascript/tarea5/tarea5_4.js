//Carlos Muñoz Iglesias - Tarea5_4 Introduccion a Javascript

var answer1 = prompt("¿Como te llamas?");
var answer2 = prompt("¿Cuantos años tienes?");

if (answer2 >= 18) {
    alert("Hola " + answer1 + "\nEres mayor de edad y has vivido " + answer2*365 + " dias.");
}if (answer2 < 18) {
    alert("Hola " + answer1 + "\nEres menor de edad y has vivido " + answer2*365 + " dias.");
}
