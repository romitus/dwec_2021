//Carlos Muñoz Iglesias - Tarea6_3 Introduccion a Javascript
var counter = 0;
var i;
for (i = 1; i < 500; i++) {
  console.log(multiple3(i));
  if (isprime(multiple3(i))=== false) {
    counter++;
  }
}
console.log(counter + " No son primos");

function isprime(num1) {
  for (let index = 2; index < num1; index++) {
      if (num1 % index === 0) {
          return false;
      }
  }
  return true;
}

  function multiple3(num1) {
    if (i % 3 === 0) {
        return i;
    }   
  }