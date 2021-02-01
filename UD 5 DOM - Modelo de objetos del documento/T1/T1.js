let parrafos = document.querySelectorAll("p");
let enlaces = document.querySelectorAll('a');
let c = document.body.childNodes[1].textContent;
let counter = 0;

for(let i = 0; i < enlaces.length; i++) {
    if(String(enlaces[i]).includes("/wiki/Municipio")) {
        counter++;
    }
}
console.log(parrafos.length);
console.log(c);
console.log(enlaces.length);
console.log(enlaces[0]);
console.log(enlaces[enlaces.length -2]);
console.log(counter);
console.log(parrafos[0].querySelectorAll('a').length);