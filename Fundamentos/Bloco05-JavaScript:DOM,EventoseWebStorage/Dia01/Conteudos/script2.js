let cabecalho = document.getElementById("header-container");
cabecalho.style.backgroundColor = "rgb(0, 176, 105)";

let emergencia = document.querySelector(".emergency-tasks");
emergencia.style.backgroundColor = "rgb(255, 159, 132)";

let naoEmergencia = document.querySelector(".no-emergency-tasks");
naoEmergencia.style.backgroundColor = "rgb(249, 219, 94)";

let cabecalhoEmergencia = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < cabecalhoEmergencia.length; i += 1) {
  cabecalhoEmergencia[i].style.backgroundColor = "rgb(165, 0, 243)";
}

let cabecalhoNaoEmergencia = document.querySelectorAll(
  ".no-emergency-tasks h3"
);
for (let i = 0; i < cabecalhoNaoEmergencia.length; i += 1) {
  cabecalhoNaoEmergencia[i].style.backgroundColor = "rgb(35, 37, 37)";
}

let rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = "rgb(0, 53, 51)";
