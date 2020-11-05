let numeroNuevo;
let numeroValido = true;
let numeroActual;
let numerosFuera;
let carton = new Array(2);

function comenzar() {
    rellenarCarton();
    console.log("Partida iniciada");
    sacarNumeroNuevo();
}

function rellenarCarton() {
    
    for (let i = 0; i < carton[5]; i++) {
        for (let j = 0; j < carton[3]; j++) {
            carton[i][j] = Math.floor((Math.random() * 100) + 1);
        }
        
    }
}

function compruebaLinea() {
    
}

function compruebaBingo() {
    
}

function sacarNumeroNuevo() {

}