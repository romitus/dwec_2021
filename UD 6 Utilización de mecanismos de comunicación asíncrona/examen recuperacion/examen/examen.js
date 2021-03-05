document.getElementById("filmXML").addEventListener("click", carga_obtencion_datos_film_xml);
document.getElementById("filmFetch").addEventListener("click", carga_obtencion_datos_film_fetch);
document.getElementById("characters").addEventListener("click", carga_datos_characters);

let peliculas = [];
let personajes = [];


function carga_obtencion_datos_film_xml() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let jsonData = JSON.parse(xhr.responseText);
        procesar_respuesta_peliculas(jsonData);
      }
    };
    console.log("Datos Cargados con XMLHttpRequest");
    document.getElementById("msg").innerHTML = "Datos de la API Ghibli cargados con XMLHttpRequest (Peliculas).";
    xhr.open("GET", "https://ghibliapi.herokuapp.com/films", true);
    xhr.send();
}

function carga_obtencion_datos_film_fetch() {
    fetch("https://ghibliapi.herokuapp.com/films")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsonData) => {
          procesar_respuesta_peliculas(jsonData);
          console.log("Datos Cargados con Fetch");
          document.getElementById("msg").innerHTML = "Datos de la API Ghibli cargados con Fetch.";
        })
        .catch((err) => console.log("Mensaje de error: " + err));
}

function carga_datos_characters() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let jsonData = JSON.parse(xhr.responseText);
        procesar_respuesta_personajes(jsonData);
      }
    };
    document.getElementById("msg").innerHTML = "Datos de la API Ghibli cargados(Personajes).";
    xhr.open("GET", "https://ghibliapi.herokuapp.com/people", true);
    xhr.send();
}

function procesar_respuesta_peliculas(jsonData) {
    peliculas = [];
    for (let pelicula of jsonData) {
      peliculas.push(pelicula);
    }
    console.log("Datos de la API Ghibli cargados (Peliculas).");
    insertar_film(peliculas);
  }


  function procesar_respuesta_personajes(jsonData) {
    personajes = [];
    for (let personaje of jsonData) {
      personajes.push(personaje);
    }
    console.log("Datos de la API Ghibli cargados (Personajes).");
    insertar_character(personajes);
  }

  function insertar_film() {
    fetch("insert_films.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(peliculas),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsonData) => {
          procesar_tabla_peliculas(jsonData);
        })
        .catch((error) => document.getElementById("msg").innerHTML = "\n Mensaje de error: " + error);
    }

    function insertar_character() {
        fetch("insert_people.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(personajes),
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
            })
            .then((jsonData) => {
              //Temporal para que muestre los personajes hasta tener funcionando insertar_filmID
              procesar_tabla_personajes(jsonData);
            })
            .catch((error) => document.getElementById("msg").innerHTML = "\n Mensaje de error: " + error);
        }

  function procesar_tabla_peliculas(peliculas){
    let tabla =
    "<table><tr><th>Titulo</th><th>Descripcion</th><th>Director</th><th>Productor</th><th>Fecha Lanzamiento</th><th>Valoración</th><th>Personajes</th></tr>";
  console.log("Numero de Peliculas: " + peliculas.length);
  for (let pelicula of peliculas) {
    tabla += "<tr><td>";
    tabla += pelicula.title;
    tabla += "</td><td>";
    tabla += pelicula.description;
    tabla += "</td><td>";
    tabla += pelicula.director;
    tabla += "</td><td>";
    tabla += pelicula.producer;
    tabla += "</td><td>";
    tabla += parseInt(pelicula.release_date);
    tabla += "</td><td>";
    tabla += parseInt(pelicula.rt_score);
    tabla += "</td><td>";
    tabla += "<button id=\""
    tabla += pelicula.id;
    tabla += "\">Mostrar Personajes</button>";
    tabla += "</td></tr>";
  }
  tabla += "</table>";
  document.getElementById("table1").innerHTML = tabla;
/*
  let boton = document.querySelectorAll("button");
  for (var i = 3; i < boton.length; i++) {
    boton[i].getAttribute("id").addEventListener('click', insertar_filmID(boton[i].getAttribute("id")), false);
}*/
  }
  //Funcion que se encarga en hacer post del filmID y crea la tabla personaje.
  function insertar_filmID(id) {
    let jsonPersonajes = {"id_film": id};
    fetch("people_by_film_id.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonPersonajes),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsonData) => {
            console.log(id);
          procesar_tabla_personajes(jsonData);
        })
        .catch((error) => document.getElementById("msg").innerHTML = "\n Mensaje de error: " + error);
  }

  function procesar_tabla_personajes(personajes){
    let tabla =
    "<table><tr><th>Nombre</th><th>Genero</th><th>Edad</th><th>Color de Ojos</th><th>Color de Pelo</th></tr>";
  console.log("Numero de Personajes: " + personajes.length);
  for (let personaje of personajes) {
    tabla += "<tr><td>";
    tabla += personaje.name;
    tabla += "</td><td>";
    tabla += personaje.gender;
    tabla += "</td><td>";
    tabla +=  parseInt(personaje.age);
    tabla += "</td><td>";
    tabla += personaje.eye_color;
    tabla += "</td><td>";
    tabla += personaje.hair_color;
    tabla += "</td></tr>";
  }
  tabla += "</table>";
  document.getElementById("table2").innerHTML = tabla;
  }


