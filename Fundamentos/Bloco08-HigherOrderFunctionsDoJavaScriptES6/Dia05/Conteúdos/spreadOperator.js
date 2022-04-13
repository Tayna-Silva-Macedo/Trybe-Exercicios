// Faça uma lista com as suas frutas favoritas
const specialFruit = ["morango", "banana", "maça"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["suco de laranja", "mel", "leite condensado"];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
