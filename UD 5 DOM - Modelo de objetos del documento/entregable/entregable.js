window.addEventListener("load", inicio);
let info = document.getElementById('info');

function inicio() {
    document.getElementById("generate").addEventListener("click", generate);
  }

  function generate() {
    let table = document.createElement('table');
    let tblBody = document.createElement("tbody");
    var header = document.createElement("th");

    for (var i = 0; i < document.getElementById("filas").value; i++) {
    
        var hilera = document.createElement("tr");
    
        for (var j = 0; j < document.getElementById("columnas").value; j++) {
          
          var celda = document.createElement("td");
          var textoCelda = document.createTextNode(document.getElementById("defaultValue").value);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
        }
    
        tblBody.appendChild(hilera);
      }
  table.appendChild(tblBody);
  info.appendChild(table);
  table.setAttribute("border", document.getElementById("borderInput").value);
  let color = document.getElementById('color').value;
  table.style.borderColor = color;
  console.log(color);
  
  //table.setAttribute("style", backgroundColor=document.getElementById("colour").value);
}