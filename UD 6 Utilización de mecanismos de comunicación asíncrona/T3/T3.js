document.getElementById('boton').addEventListener('click', () => {
    console.log("prueba")
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "series.xml", true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log("prueba2")
            let xml = xhr.responseXML;
            let head = "<tr><th>Title</th><th>Channel</th><th>Director</th><th>Year</th><th>Finalized</th></tr>";
            let serie = xml.getElementsByTagName("SERIE");
            for(let i = 0; i < serie.length; i++) {
                head += "<tr><td><b>";
                head += serie[i].getElementsByTagName("TITLE")[0].textContent;
                head += "</b></td>";
                head += "<td>";
                head += serie[i].getElementsByTagName("CHANNEL")[0].textContent;
                head += "</td>";
                head += "<td><i>";
                head += serie[i].getElementsByTagName("DIRECTOR")[0].textContent;
                head += "</i></td>";
                let aux = serie[i].getElementsByTagName("YEAR")[0].textContent;
                if (aux < 2000) {
                    head += "<td class='rojo'>";
                    head += serie[i].getElementsByTagName("YEAR")[0].textContent;
                    head += "</td>";
                } else if (aux >= 2001 && aux <= 2010) {
                    head += "<td class='amarillo'>";
                    head += serie[i].getElementsByTagName("YEAR")[0].textContent;
                    head += "</td>";
                } else {
                    head += "<td class='verde'>";
                    head += serie[i].getElementsByTagName("YEAR")[0].textContent;
                    head += "</td>";
                }
                let aux1 = serie[i].getElementsByTagName("FINALIZED")[0].textContent;
                if (aux1 === "SI") {
                    head += "<td>";
                    head += "<img src='https://img.playbuzz.com/image/upload/ar_1,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1542382290/mxwqbcuozvtenz9oh5cg.jpg'>";
                    head += "</td></tr>";
                } else {
                    head += "<td>";
                    head += "<img src='https://image.freepik.com/foto-gratis/no-hay-que-esperar-senal-trafico_1194-6979.jpg'>";
                    head += "</td></tr>";
                }                
            }
            document.getElementById('seriesTabla').innerHTML = head;
        }
    }
    xhr.send(null);
});
