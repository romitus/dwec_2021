function nextDay(week){
    switch(week){
        case week="Lunes":
            console.log("mañana es Martes");
            break;
        case week="Martes":
            console.log("mañana es Miércoles");
            break;
        case week="Miércoles":
            console.log('mañana es Jueves');
            break;
        case week="Jueves":
            console.log("mañana es Viernes");
            break;
        case week="Viernes":
            console.log('mañana es Sábado');
            break;
        case week="Sábado":
            console.log("mañana es Domingo");
            break;
        case week="Domingo":
            console.log("mañana es Lunes");
            break;	

    }
}