// 1. Acesse o elemento elementoOndeVoceEsta.
let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = ondeVoceEsta.parentElement;
pai.style.color = "red";

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "Texto no primeiro filho do filho";

// 4. Acesse o primeiroFilho a partir de pai.
let primeiroFilho = pai.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let primeiroFilho2 = ondeVoceEsta.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let atencao = ondeVoceEsta.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroFilho = ondeVoceEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
let terceiroFilho2 = pai.lastElementChild.previousElementSibling;
