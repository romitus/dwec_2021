let d = new Date();
let timeTarget = new Date(2021, 5, 24, 00, 00, 00, 00);
let epoch = d.getTime();

alert("Faltan " + Math.trunc(Math.abs(epoch - timeTarget)/86400000)+ " días.");


