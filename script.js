//Inicialización de variables
let questionCount = 0;
let result1Score = 0;
let result2Score = 0;
let result3Score = 0;
let result4Score = 0;
let afterClick;

//Almacenamiento de opciones en variables, q de question + a de answer habiendo 4 opciones por pregunta
// pregunta 1
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
let q5a4 = document.getElementById("q5a4");
let result = document.getElementById("result");


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
    result.innerHTML = "Years and years";
  } else if (result2Score >3) {
    result.innerHTML = "Fleabag";
  } else if (result3Score >3) {
    result.innerHTML = "El Colapso";
  } else if (result4Score > 3) {
    result.innerHTML = "Mare of Eastown";
  } else if (result1Score >=2) {
    result.innerHTML = "The Boys";
  } else if (result2Score >= 2) {
    result.innerHTML = "Euforia";
  } else if (result3Score >= 2) {
    result.innerHTML = "The Terror";
  } else if (result4Score >= 2) {
    result.innerHTML = "The Kingdom";
  } else {
    result.innerHTML = "Big Little Lies";
  }
}