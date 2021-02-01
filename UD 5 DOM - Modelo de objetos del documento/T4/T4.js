window.addEventListener("load",init);

function init() {
    document.getElementById('texto').addEventListener("click",crearTexto);
    document.getElementById('pass').addEventListener("click",crearPass);
    document.getElementById('area').addEventListener("click",crearArea);
    document.getElementById('label').addEventListener("click",crearLabel);
}

function crearTexto() {
    let info=prompt("Dime el nombre del atributo name");

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 
    let input=document.createElement("input");
    input.type="text";
    input.setAttribute("name",info);
    document.body.appendChild(input);

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 

}

function crearPass(){

    let info=prompt("Dime el nombre del atributo name");

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 
    let input=document.createElement("input");
    input.type="password";
    input.setAttribute("name",info);
    document.body.appendChild(input);

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 

}

function crearArea(){

    let info=prompt("Dime el nombre del atributo name");

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 
    let input = document.createElement("input");
    input.type="area";
    input.setAttribute("name",info);
    input.setAttribute("rows","5");
    input.setAttribute("cols","40");
    document.body.appendChild(input);

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 
}

function crearLabel(){

    let input = document.createElement('label');
    let name = prompt("De valor al label");
    let text = document.createTextNode(name);
    name = prompt("De un valor al atributo for");
    if (name != null) {
        input.setAttribute("for", name);
        input.appendChild(text);
        document.body.appendChild(input);
    }

}