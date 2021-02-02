document.getElementById('boton').addEventListener('click', () => {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "datosjson.php", true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let json = JSON.parse(xhr.responseText);
            console.log(json);
            console.log(json.series);
            let head = "<tr><th>Title</th><th>Channel</th><th>Director</th><th>Year</th><th>Finalized</th></tr>";
            let serie = json.series;
            for(let i = 0; i < serie.length; i++) {
                head += "<tr><td><b>";
                head += serie[i].title;
                head += "</b></td>";
                head += "<td>";
                head += serie[i].channel;
                head += "</td>";
                head += "<td><i>";
                head += serie[i].director;
                head += "</i></td>";
                let aux = serie[i].year;
                if (aux < 2000) {
                    head += "<td class='rojo'>";
                } else if (aux >= 2001 && aux <= 2010) {
                    head += "<td class='amarillo'>";
                } else {
                    head += "<td class='verde'>";
                }
                head += serie[i].year;
                head += "</td>";
                let aux1 = serie[i].finalized;
                head += "<td>";
                if (aux1 === "SI") {
                    head += "<img src='https://img.playbuzz.com/image/upload/ar_1,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1542382290/mxwqbcuozvtenz9oh5cg.jpg'>";
                } else {
                    head += "<img src='https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg'>";
                }
                head += "</td></tr>";            
            }
            document.getElementById('seriesTabla').innerHTML = head;
        }
    }
    xhr.send(null);
});