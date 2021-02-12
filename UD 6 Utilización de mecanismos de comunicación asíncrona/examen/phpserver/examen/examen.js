

document.getElementById("modifyData").addEventListener("click", modificar);
//document.getElementById("loadXmlRe").addEventListener("click", mostrarGet);
document.getElementById("loadFetch").addEventListener("click", mostrarFetch);

function modificar() {
    fetch('http://localhost:8090/examen/insertar_comunidades.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: [{"ccaa":"Andalucía","dosisAdministradas":282995,"dosisEntregadas":330980,"dosisEntregadasModerna":6800,"dosisEntregadasPfizer":324180,"dosisPautaCompletada":67511,"porcentajeEntregadas":0.8550214514472173,"porcentajePoblacionAdministradas":0.03343351356638991,"porcentajePoblacionCompletas":0.007975865066098516},{"ccaa":"Aragón","dosisAdministradas":53937,"dosisEntregadas":56505,"dosisEntregadasModerna":1200,"dosisEntregadasPfizer":55305,"dosisPautaCompletada":9752,"porcentajeEntregadas":0.9545526944518185,"porcentajePoblacionAdministradas":0.04057271337025751,"porcentajePoblacionCompletas":0.007335689800818571},{"ccaa":"Asturias","dosisAdministradas":52919,"dosisEntregadas":59435,"dosisEntregadasModerna":1200,"dosisEntregadasPfizer":58235,"dosisPautaCompletada":16266,"porcentajeEntregadas":0.8903676285017246,"porcentajePoblacionAdministradas":0.05194329710713949,"porcentajePoblacionCompletas":0.015966092910764205},{"ccaa":"Baleares","dosisAdministradas":25041,"dosisEntregadas":30210,"dosisEntregadasModerna":600,"dosisEntregadasPfizer":29610,"dosisPautaCompletada":4369,"porcentajeEntregadas":0.8288977159880834,"porcentajePoblacionAdministradas":0.02137437550307586,"porcentajePoblacionCompletas":0.0037292698603465686},{"ccaa":"Canarias","dosisAdministradas":60180,"dosisEntregadas":65620,"dosisEntregadasModerna":1300,"dosisEntregadasPfizer":64320,"dosisPautaCompletada":8772,"porcentajeEntregadas":0.917098445595855,"porcentajePoblacionAdministradas":0.027656860077795834,"porcentajePoblacionCompletas":0.004031338926593969},{"ccaa":"Cantabria","dosisAdministradas":21641,"dosisEntregadas":28145,"dosisEntregadasModerna":500,"dosisEntregadasPfizer":27645,"dosisPautaCompletada":924,"porcentajeEntregadas":0.7689109966246225,"porcentajePoblacionAdministradas":0.03712611832116726,"porcentajePoblacionCompletas":0.0015851639632530172},{"ccaa":"Castilla y Leon","dosisAdministradas":114743,"dosisEntregadas":123895,"dosisEntregadasModerna":2500,"dosisEntregadasPfizer":121395,"dosisPautaCompletada":25020,"porcentajeEntregadas":0.9261309980225191,"porcentajePoblacionAdministradas":0.04791103494983962,"porcentajePoblacionCompletas":0.010447121780369934},{"ccaa":"Castilla La Mancha","dosisAdministradas":77765,"dosisEntregadas":84635,"dosisEntregadasModerna":1700,"dosisEntregadasPfizer":82935,"dosisPautaCompletada":12486,"porcentajeEntregadas":0.9188279080758551,"porcentajePoblacionAdministradas":0.038022785801632195,"porcentajePoblacionCompletas":0.006104963717857385},{"ccaa":"Cataluña","dosisAdministradas":222572,"dosisEntregadas":286050,"dosisEntregadasModerna":5800,"dosisEntregadasPfizer":280250,"dosisPautaCompletada":35424,"porcentajeEntregadas":0.7780877468973956,"porcentajePoblacionAdministradas":0.028606464974714283,"porcentajePoblacionCompletas":0.004552933052065304},{"ccaa":"C. Valenciana","dosisAdministradas":112272,"dosisEntregadas":145830,"dosisEntregadasModerna":2900,"dosisEntregadasPfizer":142930,"dosisPautaCompletada":11317,"porcentajeEntregadas":0.7698827401769184,"porcentajePoblacionAdministradas":0.022199755484736777,"porcentajePoblacionCompletas":0.002237731872780089},{"ccaa":"Extremadura","dosisAdministradas":41961,"dosisEntregadas":51975,"dosisEntregadasModerna":1000,"dosisEntregadasPfizer":50975,"dosisPautaCompletada":4460,"porcentajeEntregadas":0.8073304473304473,"porcentajePoblacionAdministradas":0.0394375119244878,"porcentajePoblacionCompletas":0.004191780538671995},{"ccaa":"Galicia","dosisAdministradas":78772,"dosisEntregadas":89665,"dosisEntregadasModerna":1800,"dosisEntregadasPfizer":87865,"dosisPautaCompletada":20268,"porcentajeEntregadas":0.878514470529192,"porcentajePoblacionAdministradas":0.029155172866872282,"porcentajePoblacionCompletas":0.00750161280233798},{"ccaa":"La Rioja","dosisAdministradas":10820,"dosisEntregadas":14305,"dosisEntregadasModerna":200,"dosisEntregadasPfizer":14105,"dosisPautaCompletada":1592,"porcentajeEntregadas":0.7563788885005243,"porcentajePoblacionAdministradas":0.03382158955219215,"porcentajePoblacionCompletas":0.004976337390673743},{"ccaa":"Madrid","dosisAdministradas":183458,"dosisEntregadas":232775,"dosisEntregadasModerna":4700,"dosisEntregadasPfizer":228075,"dosisPautaCompletada":10595,"porcentajeEntregadas":0.7881344646117495,"porcentajePoblacionAdministradas":0.02705914905968948,"porcentajePoblacionCompletas":0.001562710180463158},{"ccaa":"Murcia","dosisAdministradas":55082,"dosisEntregadas":60425,"dosisEntregadasModerna":1200,"dosisEntregadasPfizer":59225,"dosisPautaCompletada":9264,"porcentajeEntregadas":0.9115763342987174,"porcentajePoblacionAdministradas":0.03644794941409468,"porcentajePoblacionCompletas":0.006130020757637216},{"ccaa":"Navarra","dosisAdministradas":22430,"dosisEntregadas":28145,"dosisEntregadasModerna":500,"dosisEntregadasPfizer":27645,"dosisPautaCompletada":3535,"porcentajeEntregadas":0.79694439509682,"porcentajePoblacionAdministradas":0.03392332391102803,"porcentajePoblacionCompletas":0.005346364245451809},{"ccaa":"País Vasco","dosisAdministradas":53839,"dosisEntregadas":76100,"dosisEntregadasModerna":1400,"dosisEntregadasPfizer":74700,"dosisPautaCompletada":9052,"porcentajeEntregadas":0.7074770039421814,"porcentajePoblacionAdministradas":0.024246297237023668,"porcentajePoblacionCompletas":0.004076551989998667},{"ccaa":"Ceuta","dosisAdministradas":1828,"dosisEntregadas":2180,"dosisEntregadasModerna":200,"dosisEntregadasPfizer":1980,"dosisPautaCompletada":628,"porcentajeEntregadas":0.8385321100917431,"porcentajePoblacionAdministradas":0.021709698106933326,"porcentajePoblacionCompletas":0.0074582551483337685},{"ccaa":"Melilla","dosisAdministradas":1934,"dosisEntregadas":2180,"dosisEntregadasModerna":200,"dosisEntregadasPfizer":1980,"dosisPautaCompletada":631,"porcentajeEntregadas":0.8871559633027523,"porcentajePoblacionAdministradas":0.02221048279663742,"porcentajePoblacionCompletas":0.007246543249575084},{"ccaa":"Totales","dosisAdministradas":1474189,"dosisEntregadas":1769055,"dosisEntregadasModerna":35700,"dosisEntregadasPfizer":1733355,"dosisPautaCompletada":251866,"porcentajeEntregadas":0.8333200494049082,"porcentajePoblacionAdministradas":0.031405815935236475,"porcentajePoblacionCompletas":0.005365700894759267}]

    })
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        alert(result);
    })
    .catch (function (error) {
        console.log('Request failed', error);
    });
}

function mostrarGet() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8090/examen/insertar_comunidades.php", true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let json = xhr.responseText;
            console.log(json[0].value);
            let vacunas = "<table><tr><th>Comunidad</th><th>D.Entregada</th><th>D.Admin</th><th>D.Completa</th><th>P.Entregadas</th><th>P.Admin</th><th>P.Completa</th></tr>";
            for (const value of json) {
                    vacunas+="<tr><td>";
                    vacunas+=value.ccaa;
                    vacunas+="</td><td>";
                    vacunas+=value.dosisAdministradas
                    vacunas+="</td><td>";
                    vacunas+=value.dosisEntregadas;
                    vacunas+="</td><td>";
                    vacunas+=value.dosisPautaCompletada;
                    vacunas+="</td><td>";
                    vacunas+=value.porcentajeEntregadas;
                    vacunas+="</td><td>";
                    vacunas+=value.porcentajePoblacionAdministradas;
                    vacunas+="</td><td>";
                    vacunas+=value.porcentajePoblacionCompletas;
                    vacunas+="</td></tr>";
                
              }
            vacunas+="</table>";
            document.getElementById("mostrar").innerHTML=vacunas;
        }
    }
    xhr.send(null);
    
  }

function mostrarFetch() {
    fetch("http://localhost:8090/examen/insertar_comunidades.php")
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          json = JSON.parse(JSON.stringify(data));

          let vacunas="<table><tr><th>Comunidad</th><th>D.Entregada</th><th>D.Admin</th><th>D.Completa</th><th>P.Entregadas</th><th>P.Admin</th><th>P.Completa</th></tr>"
          for (const value of json) {
              vacunas+="<tr><td>";
              vacunas+=value.ccaa;
              vacunas+="</td><td>";
              vacunas+=value.dosisAdministradas
              vacunas+="</td><td>";
              vacunas+=value.dosisEntregadas;
              vacunas+="</td><td>";
              vacunas+=value.dosisPautaCompletada;
              vacunas+="</td><td>";
              vacunas+=value.porcentajeEntregadas;
              vacunas+="</td><td>";
              vacunas+=value.porcentajePoblacionAdministradas;
              vacunas+="</td><td>";
              vacunas+=value.porcentajePoblacionCompletas;
              vacunas+="</td></tr>";
        }
          vacunas+="</table>";
          document.getElementById("tabla").innerHTML=vacunas;
          
      })
      .catch((err) => console.log(err));
      
      
  }