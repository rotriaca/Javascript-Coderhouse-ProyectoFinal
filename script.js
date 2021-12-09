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
  { id: 1, nombre: "Years and years", genero: "Drama", plataforma: "HBO" },
  { id: 2, nombre: "Fleabag", genero: "Comedia", plataforma: "Amazon Prime"},
  { id: 3, nombre: "Afterlife", genero: "Comedia dramática", plataforma: "Netflix"},
  { id: 4, nombre: "Mare of Eastown", genero: "Policial", plataforma: "HBO" },
  { id: 5, nombre: "The Boys", genero: "Acción", plataforma: "Amazon Prime"},
  { id: 6, nombre: "Euphoria", genero: "Drama", plataforma: "Amazon Prime"},
  { id: 7, nombre: "The Terror", genero: "Terror", plataforma: "Amazon Prime"},
  { id: 8, nombre: "The Kingdom", genero: "Terror", plataforma: "Netflix" },
  { id: 9, nombre: "Big Little Lies", genero: "Drama", plataforma: "HBO"}
]


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
    $("#result").append("Years and years");
  } else if (result2Score >3) {
    $("#result").append("Fleabag");
  } else if (result3Score >3) {
    $("#result").append("Mare of Eastown");
  } else if (result4Score > 3) {
    $("#result").append("The Boys");
  } else if (result1Score >=2) {
    $("#result").append("Euphoria");
  } else if (result2Score >= 2) {
    $("#result").append("The Terror");
  } else if (result3Score >= 2) {
    $("#result").append("The Kingdom");
  } else if (result4Score >= 2) {
    $("#result").append("Afterlife");
  } else {
    $("#result").append("Big Little Lies");
  }
}