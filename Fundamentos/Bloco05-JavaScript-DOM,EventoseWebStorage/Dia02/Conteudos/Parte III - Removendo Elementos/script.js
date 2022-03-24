// // 1. Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
let pai = document.getElementById("pai");
let filhos = pai.childNodes;

for (let i = filhos.length - 1; i >= 0; i -= 1) {
  if (filhos[i].id !== "elementoOndeVoceEsta") {
    filhos[i].remove();
  }
}

let segundoEUltimoFilhoDoFilho = document.getElementById(
  "segundoEUltimoFilhoDoFilho"
);
segundoEUltimoFilhoDoFilho.remove();
