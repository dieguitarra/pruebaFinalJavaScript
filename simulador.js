//Primer botón
let botonUsuario = document.getElementById("botonUsuario");
let boton = document.getElementById("botonIngresar");
let mensajeUsuario = document.getElementById("mensajeUsuario");
boton.addEventListener("click", function (e) {
  e.preventDefault();

  //  alert("Hola " + botonUsuario.value);
  let parrafo = document.createElement("p");
  parrafo.innerHTML = "Bienvenido " + botonUsuario.value + "!";
  mensajeUsuario.appendChild(parrafo);
});
//Segundo botón
class Alumno {
  constructor(nombre, dni, edad, fecha) {
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
    this.fecha = fecha;

    this.datos = function () {
      console.log("El nombre es: " + this.nombre);
      console.log("El dni es: " + this.dni);
      console.log("La edad: " + this.edad);
      console.log("La fecha de nacimiento es: " + this.fecha);
    };
  }
}

let alumnos = [];
let boton2 = document.getElementById("cargarAlumnoId");
boton2.addEventListener("click", function cargarAlumno() {
  let alumno = new Alumno("Pedro", 33345655, 16, "15/06/2008");
  alert("Los datos ingresados deben ser: nombre ej. " + alumno.nombre);
  alert("Los datos ingresados deben ser: dni ej." + alumno.dni);
  alert("Los datos ingresados deben ser: edad ej." + alumno.edad);
  alert("Los datos ingresados deben ser: fecha ej." + alumno.fecha);

  alert("Ingrese sus datos personales");
  let nombreAlumno = prompt("Ingrese su nombre");
  let dniAlumno = prompt("Ingrese su dni");
  let edadAlumno = prompt("Ingrese su edad");
  let fechaAlumno = prompt("Ingrese su fecha de nacimiento");

  let alumnoData = new Alumno(nombreAlumno, dniAlumno, edadAlumno, fechaAlumno);
  console.log(alumnoData);
  alumnoData.datos();
});
//Tercer botón
$("#botonSlideToggleTalleres").click(function () {
  $("#ocultarMostrarTalleres").slideToggle(2000);
});
boton3 = document.getElementById("capturar");
boton3.addEventListener("click", function capturar(e) {
  e.preventDefault();

  function tallerHorario(taller, horario) {
    this.taller = taller;
    this.horario = horario;
  }
  let valor = document.getElementById("taller").value;
  let valor2 = document.getElementById("horario").value;
  nuevoTaller = new tallerHorario(taller, horario);
  agregarLista();
});
let listaTalleres = [];
if (localStorage.getItem("talleres")) {
  let talleresStorage = JSON.parse(localStorage.getItem("talleres"));
  console.log(talleresStorage);
  for (let taller of talleresStorage) {
    listaTalleres.push(taller);
    document.getElementById("listaTaller").innerHTML +=
      "<li>" + taller.nombre + ": " + taller.horario + "</li>";
  }
  console.log(listaTalleres);
} else {
  console.log("no se encontro nada cargado");
}
function agregarLista() {
  let nombreTaller = document.getElementById("taller").value;
  let horarioTaller = document.getElementById("horario").value;
  let datosTaller = { nombre: nombreTaller, horario: horarioTaller };

  console.log(datosTaller);

  listaTalleres.push(datosTaller);
  console.log(listaTalleres);

  document.getElementById("listaTaller").innerHTML +=
    "<li>" + datosTaller.nombre + " " + datosTaller.horario + "</li>";

  localStorage.setItem("talleres", JSON.stringify(listaTalleres));
}

boton3bis = document.getElementById("borrarTalleres");
boton3bis.addEventListener("click", function borrarTalleres() {
  let lista = document.getElementById("listaTaller");
  lista.removeChild(lista.lastChild);
});

//Cuarto botón
let boton4 = document.getElementById("calificacionesId");
boton4.addEventListener("click", function calificaciones(e) {
  e.preventDefault();
  let sumaTotal = 0;
  let cantidadCalificaciones = 6;
  for (let i = 1; i <= 6; i++) {
    let calificacionIngresada = parseInt(
      prompt("ingrese sus calificacion nº: " + i)
    );
    sumaTotal = sumaTotal + calificacionIngresada;
  }
  let resultadoFinal = sumaTotal / cantidadCalificaciones;

  if (resultadoFinal >= 7) {
    alert("Tu calificación es " + resultadoFinal + " , estás aprobado");
  } else if (resultadoFinal >= 4) {
    alert(
      "Tu calificación es " + resultadoFinal + " ,tenés que esforzarte más"
    );
  } else {
    alert(
      "Tu calificación es " +
        resultadoFinal +
        " ,lamentablemente tenés que recursar"
    );
  }
});

//Quinto botón
let boton5 = document.getElementById("notasId");
boton5.addEventListener("click", function notas(e) {
  e.preventDefault();
  let notas = [];
  let calificacionNotas;
  for (let i = 0; i < 10; i++) {
    calificacionNotas = prompt("ingrese todas sus calificaciones");
    notas.push(calificacionNotas);
  }
  notas.sort((a, b) => {
    return a - b;
  });
  alert("Tus notas son " + notas);
});
//Sexto botón
let boton6 = document.getElementById("materiasId");
boton6.addEventListener("click", function materias() {
  let valor = document.getElementById("listaMaterias");
  let lista = document.getElementById("listaMateriasMarzo");
  let nuevaLi = document.createElement("li");
  nuevaLi.innerHTML = `${valor.value}`;
  nuevaLi.style.color = "red";
  lista.appendChild(nuevaLi);
});
let boton6Bis = document.getElementById("borrarMateriasId");
boton6Bis.addEventListener("click", function borrarMaterias() {
  let lista = document.getElementById("listaMateriasMarzo");
  lista.removeChild(lista.lastChild);
});

//Séptimo botón
$("#boton7").click(function (e) {
  e.preventDefault();
  let valor = $("#input").val();
  //console.log(valor)
  $("#listaUl").append(`<li>${valor}</li>`);
});
$("#boton7Bis").click(function (e) {
  e.preventDefault();
  $("#listaUl").empty();
});

//Octavo botón
$("#boton8").on("change", function (e) {
  console.log(e.target.value);
});

//Noveno botón
$("#botonSlideToggle").click(function () {
  $(".formularioCaer").slideToggle(2000);
});
//Décimo botón
//Geoloaction + clima
let ubicacion = navigator.geolocation.getCurrentPosition(mostrarUbicacion);
function mostrarUbicacion(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let urlClima =
    "http://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=671a26ae4d9245e0bb2ce30710bdd1e1";

  $("#botonClima").click(function (e) {
    e.preventDefault();
    $.get(urlClima, function (respuesta) {
      console.log(respuesta.weather[0].description);

      let contenido = `<div>
      <h2>${respuesta.name}</h2>
      
      <p>Clima: ${respuesta.weather[0].description}</p>                      
      <p>Temp max: ${respuesta.main.temp_max}</p>
      <p>Temp min: ${respuesta.main.temp_min}</p>
      </div>
      `;

      $(".cardClima").append(contenido);
    });
  });
}
