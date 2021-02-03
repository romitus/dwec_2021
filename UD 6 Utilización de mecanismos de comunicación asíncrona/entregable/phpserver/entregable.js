window.addEventListener("load", inicio);
let bandoUser = 3;
let json;
function inicio() {
    document.getElementById("boton1").addEventListener("click", mostrarFetch);
    document.getElementById("boton2").addEventListener("click", mostrarGet);
    document.getElementById("bando").addEventListener("change", mostrarFetch);
    document.getElementById("bando").addEventListener("change", mostrarGet);
  }

function mostrarFetch() {
    bandoUser = document.getElementById("bando").value;
    fetch("http://localhost:8090/listar_armas.php")
      .then((response) => response.json())
      .then((data) => {
          json = JSON.parse(JSON.stringify(data));
          let armas="<table><tr><th>Nombre</th><th>Descripcion</th><th>Imagen</th><th>Bando</th></tr>"
          for (const value of json) {
            if (value.bando == bandoUser) {
              armas+="<tr><td>";
              armas+=value.nombre;
              armas+="</td><td>";
              armas+=value.descripcion;
              armas+="</td><td><img src='";
              armas+=value.imagen;
              armas+="'></td><td>";
              armas+=value.bando;
              armas+="</td></tr>";
            } else{
                armas+="<tr><td>";
              armas+=value.nombre;
              armas+="</td><td>";
              armas+=value.descripcion;
              armas+="</td><td><img src='";
              armas+=value.imagen;
              armas+="'></td><td>";
              armas+=value.bando;
              armas+="</td></tr>";
            }
        }
          armas+="</table>";
          document.getElementById("mostrar").innerHTML=armas;
          
      })
      .catch((err) => console.log(err));
      
      console.log(bandoUser);
      
  }

  function mostrarGet() {
    bandoUser = document.getElementById("bando").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "listar_armas.php", true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let json = JSON.parse(xhr.responseText);
            let armas = "<table><tr><th>Nombre</th><th>Descripcion</th><th>Imagen</th><th>Bando</th></tr>";
            for (const value of json) {
                if (value.bando == bandoUser) {
                    armas+="<tr><td>";
                    armas+=value.nombre;
                    armas+="</td><td>";
                    armas+=value.descripcion;
                    armas+="</td><td><img src='";
                    armas+=value.imagen;
                    armas+="'></td><td>";
                    armas+=value.bando;
                    armas+="</td></tr>";
                }
              }
            armas+="</table>";
            document.getElementById("mostrar").innerHTML=armas;
            
        }
    }
    xhr.send(null);
    
  }