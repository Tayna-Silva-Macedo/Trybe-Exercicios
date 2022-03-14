// 1. Crie um irmão para elementoOndeVoceEsta.
let pai = document.getElementById("pai");
let irmaoOndeVoceEsta = document.createElement("section");
irmaoOndeVoceEsta.id = "irmaoOndeVoceEsta";
pai.appendChild(irmaoOndeVoceEsta);

// 2. Crie um filho para elementoOndeVoceEsta.
let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
let filhoOndeVoceEsta = document.createElement("section");
filhoOndeVoceEsta.id = "filhoOndeVoceEsta";
ondeVoceEsta.appendChild(filhoOndeVoceEsta);

// 3. Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
let filhoPrimeiroFilhoDoFilho = document.createElement("section");
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// 4. A partir desse filho criado, acesse terceiroFilho.
let filhoPrimeiroFilhoDoFilho = document.getElementById(
  "filhoPrimeiroFilhoDoFilho"
);
let terceiroFilho =
  filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
