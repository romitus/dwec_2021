let optionUser = prompt("¿Elige una opción del menú?\n \n 1. Potencia\n 2. Raíz\n 3. Redondeo\n 4. Trigonometría");

switch (optionUser) {
    case '1':
        let base = prompt("Introduce una base");
        let exponent =  prompt("Introduce un exponente");
        alert("Resuktado: " + Math.pow(base, exponent));
        break;
    case '2':
        let number1 = prompt("Introduce un número que no sea negativo: ");
        if (number1 < 0) {
            alert("Error el numero es negativo.");
        } else {
            alert(Math.sqrt(number1));
        }
        break;
    case '3':
        let number2 = prompt("Introduce un número decimal: ");
        alert("Redondeo al alta: " + Math.ceil(number2));
        alert("Redondeo a la baja: " + Math.floor(number2));
        break;
    case '4':
        let angle = prompt("Introduzca un angulo entre 0 y 360: ");
        alert("Seno: " + Math.sin(angle));
        alert("Coseno: " + Math.cos(angle));
        alert("Tangente: " + Math.tan(angle));
        break;    

    default:
        alert("Error la opcion elegida debe ser entre 1 y 4 inclusive");
        break;
}