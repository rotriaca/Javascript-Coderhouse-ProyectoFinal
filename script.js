//Inicialización de variables
let questionCount = 0;
let result1Score = 0;
let result2Score = 0;
let result3Score = 0;
let result4Score = 0;
let afterClick;

//Almacenamiento de opciones en variables, q de question + a de answer habiendo 4 opciones por pregunta
/*/// pregunta 1
let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");
let q1a3 = document.getElementById("q1a3");
let q1a4 = document.getElementById("q1a4");
// pregunta 2
let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");
let q2a3 = document.getElementById("q2a3");
let q2a4 = document.getElementById("q2a4");
// pregunta 3
let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");
let q3a3 = document.getElementById("q3a3");
let q3a4 = document.getElementById("q3a4");
// pregunta 4
let q4a1 = document.getElementById("q4a1");
let q4a2 = document.getElementById("q4a2");
let q4a3 = document.getElementById("q4a3");
let q4a4 = document.getElementById("q4a4");
// pregunta 5
let q5a1 = document.getElementById("q5a1");
let q5a2 = document.getElementById("q5a2");
let q5a3 = document.getElementById("q5a3");
let q5a4 = document.getElementById("q5a4");*/

$(".answer-choice");

$(".result");


// Almacenamiento de clicks en opciones
q1a1.addEventListener("click", result1);
q1a2.addEventListener("click", result2);
q1a3.addEventListener("click", result3);
q1a4.addEventListener("click", result4);

q2a1.addEventListener("click", result1);
q2a2.addEventListener("click", result2);
q2a3.addEventListener("click", result3);
q2a4.addEventListener("click", result4);

q3a1.addEventListener("click", result1);
q3a2.addEventListener("click", result2);
q3a3.addEventListener("click", result3);
q3a4.addEventListener("click", result4);

q4a1.addEventListener("click", result1);
q4a2.addEventListener("click", result2);
q4a3.addEventListener("click", result3);
q4a4.addEventListener("click", result4);

q5a1.addEventListener("click", result1);
q5a2.addEventListener("click", result2);
q5a3.addEventListener("click", result3);
q5a4.addEventListener("click", result4);

//Array de series

const series = [
  { id: 1, nombre: "Years and years", genero: "Drama", plataforma: "HBO"},
  { id: 2, nombre: "Fleabag", genero: "Comedia", plataforma: "Amazon Prime"},
  { id: 3, nombre: "Afterlife", genero: "Comedia dramática", plataforma: "Netflix"},
  { id: 4, nombre: "Mare of Eastown", genero: "Policial", plataforma: "HBO" },
  { id: 5, nombre: "The Boys", genero: "Acción", plataforma: "Amazon Prime"},
  { id: 6, nombre: "Euphoria", genero: "Drama", plataforma: "HBO"},
  { id: 7, nombre: "The Terror", genero: "Terror", plataforma: "Amazon Prime"},
  { id: 8, nombre: "The Kingdom", genero: "Terror", plataforma: "Netflix" },
  { id: 9, nombre: "Big Little Lies", genero: "Drama", plataforma: "HBO"}
]

const portadas = new Array(); 
portadas[0] = new Image();
portadas[0].src = 'img/Years-and-Years.jpeg';

portadas[1] = new Image();
portadas[1].src = 'img/fleabag.jpg';

portadas[2] = new Image();
portadas[2].src = 'img/afterlife.jpg';

portadas[3] = new Image();
portadas[3].src = 'img/mare-of-easttown.jpg';

portadas[4] = new Image();
portadas[4].src = 'img/the-boys.jpg';

portadas[5] = new Image();
portadas[5].src = 'img/euphoria.jpg';

portadas[6] = new Image();
portadas[6].src = 'img/the-terror.jpeg';

portadas[7] = new Image();
portadas[7].src = 'img/kingdom.png';

portadas[8] = new Image();
portadas[8].src = 'img/big-little-lies.jpg';



//Contabilización de resultados hasta llegar al total de preguntas.
function result1() {
  result1Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result2() {
  result2Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result3() {
  result3Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result4() {
  result4Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}

// resultados posibles según las elecciones hechas
function updateResult() {
  if (result1Score >= 3) {
    $("#result").append(series[0].nombre, "<br/>Género: ", series[0].genero, "<br/>Plataforma: ", series[0].plataforma,"<br/>", portadas[0]);
  } else if (result2Score >3) {
    $("#result").append(series[1].nombre, "<br/>Género: ", series[1].genero, "<br/>Plataforma: ", series[1].plataforma,"<br/>", portadas[1]);
  } else if (result3Score >3) {
    $("#result").append(series[2].nombre, "<br/>Género: ", series[2].genero, "<br/>Plataforma: ", series[2].plataforma,"<br/>", portadas[2]);
  } else if (result4Score > 3) {
    $("#result").append(series[3].nombre, "<br/>Género: ", series[3].genero, "<br/>Plataforma: ", series[3].plataforma,"<br/>", portadas[3]);
  } else if (result1Score >=2) {
    $("#result").append(series[4].nombre, "<br/>Género: ", series[4].genero, "<br/>Plataforma: ", series[4].plataforma,"<br/>", portadas[4]);
  } else if (result2Score >= 2) {
    $("#result").append(series[5].nombre, "<br/>Género: ", series[5].genero, "<br/>Plataforma: ", series[5].plataforma,"<br/>", portadas[5]);
  } else if (result3Score >= 2) {
    $("#result").append(series[6].nombre, "<br/>Género: ", series[6].genero, "<br/>Plataforma: ", series[6].plataforma,"<br/>", portadas[6]);
  } else if (result4Score >= 2) {
    $("#result").append(series[7].nombre, "<br/>Género: ", series[7].genero, "<br/>Plataforma: ", series[7].plataforma,"<br/>", portadas[7]);
  } else {
    $("#result").append(series[8].nombre, "<br/>Género: ", series[8].genero, "<br/>Plataforma: ", series[8].plataforma,"<br/>", portadas[8]);
  }
}