// 1. Crie um irmão para elementoOndeVoceEsta.
// a. Onde eu vou inserir
let pai = document.getElementById("pai");

// b. Criar
let irmaoOndeVoceEsta = document.createElement("section");

// c. Customizar
irmaoOndeVoceEsta.id = "irmaoOndeVoceEsta";

// d. Colocar no HTML
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
let terceiroFilho =
  filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
