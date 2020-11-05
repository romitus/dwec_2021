function Aeropuerto(nombre,ciudad,numeroVuelosDiarios) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.numeroVuelosDiarios = numeroVuelosDiarios;

    function addNumeroVuelo(numeroVueloActivo) {
        numeroVuelosDiarios = numeroVueloActivo;
    }
}

function Vuelo(codigo,hora_llegada,hora_salida) {
    this.codigo = codigo;
    this.hora_llegada = hora_llegada;
    this.hora_salida = hora_salida;

    function changeHoraLLegada(hora) {
        hora_llegada = hora;
    }

    function changeHoraSalida(hora) {
        hora_salida = hora;
    }
}

var aeropuerto1 = new Aeropuerto("San Pablo", "Sevilla",10);