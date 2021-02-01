document.getElementById('addLi').addEventListener('click', textPrompt);
document.getElementById('borrarPrimero').addEventListener('click', deleteF);
document.getElementById('borrarUltimo').addEventListener('click', deleteL);

function textPrompt() {
    let text = prompt("Escribe algo:");
    if (text != null || text != "") {
        let li = document.createElement('li');
        text = document.createTextNode(text);
        li.appendChild(text);

        let ul = document.querySelector('ul');
        ul.appendChild(li);

    } else {
        alert("Texto no válido.")
    }
}

function deleteF() {
    let ul = document.querySelector('ul');
    let li = ul.firstChild;
    ul.removeChild(li);
}

function deleteL() {
    let ul = document.querySelector('ul');
    let li = ul.lastChild;
    ul.removeChild(li);
}