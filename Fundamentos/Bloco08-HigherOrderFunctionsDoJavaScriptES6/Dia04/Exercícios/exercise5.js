const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  // escreva seu código aqui
}

// const minusculo = names.map((name) => name.toLowerCase());
// const arrayLetras = minusculo.map((nome) => nome.split(""));
// const unica = arrayLetras.reduce(
//   (acumulador, letra) => acumulador.concat(letra),
//   []
// );
// const apenasA = unica.filter((letra) => letra === "a");
// const totalA = apenasA.length;
// console.log(minusculo);
// console.log(arrayLetras);
// console.log(unica);
// console.log(apenasA);
// console.log(totalA);

const stringNomes = names.reduce((acc, atual) => acc + atual.split(" "), '');
const letrasSeparadas = stringNomes.split('')
const resposta = letrasSeparadas.reduce((acumulador, letra) => {
  if(letra === 'a' || letra === 'A') {
    acumulador += 1
  }
  return acumulador;
},0)

console.log(stringNomes);
console.log(letrasSeparadas);
console.log(resposta);
