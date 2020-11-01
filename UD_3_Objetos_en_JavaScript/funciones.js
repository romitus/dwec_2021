function imc(weightKg,height) {
    let imc = weightKg/Math.pow(height,2);
    return imc;    
}

function fcm(year) {
    let fcm = 208.75 - (0,73 * year);
    return fcm; 
}