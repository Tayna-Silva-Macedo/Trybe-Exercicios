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

function containsA(array) {
  const stringNomes = array.reduce((acc, atual) => acc + atual, "");
  const letrasSeparadas = stringNomes.split("");
  const somatorio = letrasSeparadas.reduce(
    (acc, atual) => (atual === "A" || atual === "a" ? (acc += 1) : acc),
    0
  );

  return `A letra "a" aparece ${somatorio} vezes`;
}

console.log(containsA(names));
