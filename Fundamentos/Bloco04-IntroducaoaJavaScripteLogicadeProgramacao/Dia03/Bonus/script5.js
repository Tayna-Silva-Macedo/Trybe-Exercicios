let n = 7;
let simbolo = "*";

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let indiceLinha = 1; indiceLinha <= meio; indiceLinha += 1) {
  let linha = "";
  for (let indiceColuna = 1; indiceColuna <= n; indiceColuna += 1) {
    if (indiceColuna === esquerda || indiceColuna === direita || indiceLinha === meio) {
      linha += simbolo;
    } else {
      linha += " ";
    }
  }

  direita += 1;
  esquerda -= 1;
  console.log(linha);
}
