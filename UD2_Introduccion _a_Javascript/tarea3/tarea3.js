//Carlos Muñoz Iglesias - Tarea3 Introduccion a Javascript

var operation1 = 10 == 10;
var operation2 = 10 === 10;
var operation3 = 10 === 10.0;
var operation4 = "Laura" == "laura";
var operation5 = "Laura" > "laura";
var operation6 = "Laura" < "laura";
var operation7 = "123" == 123;
var operation8 = "123" === 123;
var operation9 = parseInt("123") === 123; 



alert("La operación 10 == 10 es " + operation1); //El resultado es True
alert("La operación 10 === 10 es " + operation2); //El resultado es True
alert("La operación 10 === 10.0 es " + operation3); //El resultado es True es una igualdad estricta
alert("La operación \"Laura\" == \"laura\" " + operation4); //El resultado es False
alert("La operación \"Laura\" > \"laura\" " + operation5); //El resultado es False
alert("La operación \"Laura\" < \"laura\" " + operation6); //El resultado es True
alert("La operación \"123\" == 123 " + operation7); //El resultado es True
alert("La operación \"123\" === 123 " + operation8);//El resultado es False es una igualdad estricta
alert("La operación parseInt(\"123\") === 123 " + operation9); //El resultado es True es una igualdad estricta