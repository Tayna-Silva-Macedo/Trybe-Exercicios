let n = 7;
let posicao = n;
let linha = "";
let simbolo = "*"

for (let indiceLinha = 0; indiceLinha < n; indiceLinha += 1) {
  for (let indiceColuna = 0; indiceColuna <= n; indiceColuna += 1) {
    if (indiceColuna < posicao) {
      linha += " ";
    } else {
      linha += simbolo;
    }
  }
  console.log(linha);
  linha = "";
  posicao -= 1;
}
