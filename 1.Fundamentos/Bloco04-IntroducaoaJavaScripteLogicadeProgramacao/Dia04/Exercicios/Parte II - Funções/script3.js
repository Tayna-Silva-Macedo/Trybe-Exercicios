function indiceDoMenor(array) {
  let menor = array[0];
  let indice = 0;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < menor) {
      menor = array[i];
      indice = i;
    }
  }
  return indice;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));
