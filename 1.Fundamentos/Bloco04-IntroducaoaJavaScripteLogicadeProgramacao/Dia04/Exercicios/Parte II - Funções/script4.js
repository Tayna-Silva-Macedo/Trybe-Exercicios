function maiorNome(nomes) {
  let maior = nomes[0];

  for (i = 1; i < nomes.length; i += 1) {
    if (nomes[i].length > maior.length) {
      maior = nomes[i];
    }
  }
  return maior;
}

console.log(
  maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
