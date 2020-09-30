//Carlos Muñoz Iglesias - Tarea4 Introduccion a Javascript

var var1 = null == undefined;
var var2 = "NaN" == NaN;
var var3 = 5 == NaN;
var var4 = NaN == NaN;
var var5 = NaN != NaN;
var var6 = false == 0;
var var7 = true == 1;
var var8 = true == 2;
var var9 = undefined == 0;
var var10 = null == 0;
var var11 = "5" == 5;

alert(var1); //True Dado que null y undefined en una variable es lo mismo
alert(var2); //False Dado que uno es texto y NaN es un tipo numerico
alert(var3); //False Dado que 5 es un numero y NaN es un valor diferente.
alert(var4); //False Dado que NaN no es un numero
alert(var5); //True Dado que NaN como bien dice no es un numero.
alert(var6); //True Porque false al ser boleano puede ser True o False o 1 o 0
alert(var7); //True Porque true toma el 1 como valor positivo.
alert(var8); //False Porque el numero 2 no es binario solo tendria senti si fuera 1 o 0
alert(var9); //False Porque el 0 es un tipo numerico definido y el otro valor es no definido.
alert(var10); //False Porque el valor null es vacio y el 0 es un valor numero.
alert(var11); //True Porque 5 cadena y 5 numero es el muismo valor pero la compracion no es estricta.