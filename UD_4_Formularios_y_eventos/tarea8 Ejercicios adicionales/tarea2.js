window.onload = iniciar();

function iniciar() {
    document.getElementById("submit").addEventListener("click", validar,false);
}


let elemento = document.getElementById("P1A");


function validar(e) {
    if (elemento.checked == true) {
        alert("Respuesta correcta");
        return true;
    }else{
        alert("Respuesta incorrecta");
        e.preventDefault();
        return false;
    }  
}
