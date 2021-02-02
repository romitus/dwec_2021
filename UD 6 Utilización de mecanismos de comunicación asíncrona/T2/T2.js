document.getElementById('boton').addEventListener('click', () => {
    let loc = document.getElementById('localidad').value;
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", "localidad.php?localidad=" + loc);
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            if(xhr.responseText === "SI") {
                document.getElementById('resultado').innerHTML = "Existe!";
                document.getElementById('resultado').style.backgroundColor = "green";
                document.getElementById('resultado').style.color = "white";
            } else {
                document.getElementById('resultado').innerHTML = "No Existe!";
                document.getElementById('resultado').style.backgroundColor = "red";
                document.getElementById('resultado').style.color = "white";
            }
        }
    }
    xhr.send(null);
});