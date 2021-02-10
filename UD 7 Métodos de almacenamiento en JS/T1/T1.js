window.addEventListener('load', iniciar, false);

function iniciar() {
document.getElementById('save1').addEventListener('click', saveStorage());
document.getElementById('delete1').addEventListener('click', deleteStorage());
document.getElementById('refresh1').addEventListener('click', refreshStorage());
document.getElementById('check1').addEventListener('click', checkStorage());
}

function saveStorage() {
    let chooseUser = document.getElementById("choose1").value;
    if (chooseUser == 0) {
        localStorage();
    }else{
        sessionStorage();
    }
}

function deleteStorage() {
    
}

function refreshStorage() {
    
}

function checkStorage() {
    
}

function localStorage() {
    let keyInput = document.getElementById("key1").value;
    let valueInput = document.getElementById("value1").value;
    //localStorage.setItem(keyInput, valueInput);
    localStorage.setItem("mytime", Date.now());
}

function sessionStorage() {
    let keyInput = document.getElementById("key1");
    let valueInput = document.getElementById("value1");
    sessionStorage.setItem(keyInput,keyInput);
}
