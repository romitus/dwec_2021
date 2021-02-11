window.addEventListener('load', iniciar, false);

function iniciar() {
document.getElementById('save1').addEventListener('click', saveStorage1);
document.getElementById('delete1').addEventListener('click', deleteStorage1);
document.getElementById('refresh1').addEventListener('click', refreshStorage1);
document.getElementById('check1').addEventListener('click', checkStorage1);
}

function saveStorage1() {
    let chooseUser = document.getElementById("choose1").value;
    if (chooseUser == 0) {
        localStorage1();
    }else if (chooseUser == 1){
        sessionStorage1();
    }
}

function deleteStorage1() {
    let keyInput = document.getElementById("key1").value;
    localStorage.removeItem(keyInput);
    sessionStorage.removeItem(keyInput);
    refreshStorage1();
    console.log("Almacenamiento de clave " + keyInput + "Borrado");
}

function refreshStorage1() {
  document.getElementById("area1").innerHTML = allStorageLocal1();
  document.getElementById("area2").innerHTML = allStorageSession1();
  console.log("Almacenamiento Actualizado ");
}


function allStorageLocal1() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

function allStorageSession1() {

    var values = [],
        keys = Object.keys(sessionStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( sessionStorage.getItem(keys[i]) );
    }

    return values;
}

function checkStorage1() {
    if (typeof(Storage) !== "undefined") {
        document.getElementById("msg").innerHTML ="Storage soportado en este navegador";
        document.getElementById("msg").style = "color:green;";
    } else {
        document.getElementById("msg").innerHTML ="Storage no soportado en este navegador";
        document.getElementById("msg").style = "color:red;";
    }
    
}

function localStorage1() {
    let keyInput = document.getElementById("key1").value;
    let valueInput = document.getElementById("value1").value;
    localStorage.setItem(keyInput, valueInput);
    console.log("Almacenado en Local");
}

function sessionStorage1() {
    let keyInput = document.getElementById("key1").value;
    let valueInput = document.getElementById("value1").value;
    sessionStorage.setItem(keyInput,valueInput);
    console.log("Almacenado en Session");
}
