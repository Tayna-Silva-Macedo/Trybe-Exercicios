let n = 7;
let linha = "";
let simbolo = "*";

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let indiceLinha = 0; indiceLinha <= meio; indiceLinha += 1) {
  for (let indiceColuna = 0; indiceColuna <= n; indiceColuna += 1) {
    if (indiceColuna > esquerda && indiceColuna < direita) {
      linha += simbolo;
    } else {
      linha += " ";
    }
  }
  console.log(linha);
  linha = "";
  direita += 1;
  esquerda -= 1;
}
