document.getElementById('send1').addEventListener('click', () => {

    let titulo = document.getElementById('titulo').value;
    let director = document.getElementById('director').value;
    let cadena = document.getElementById('cadena').value;
    let anyo = document.getElementById('anyo').value;
    let terminada = document.getElementById('terminada').checked;
    let obj = {
        titulo: titulo,
        director: director,
        cadena: cadena,
        anyo: parseInt(anyo),
        terminada: terminada
    };

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let div = document.getElementById('msg');
            console.log(xhr.responseText);
            if (xhr.responseText == '"ok"') {
                div.setAttribute("class", "ok");
            } else {
                div.setAttribute("class", "error");
            }
            div.innerHTML = xhr.responseText;
        }
    };
    let param = JSON.stringify(obj);
    xhr.open("POST", "create_serie.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("objeto=" + param);
});