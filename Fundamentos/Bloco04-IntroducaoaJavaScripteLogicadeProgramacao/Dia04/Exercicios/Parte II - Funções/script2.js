function indiceDoMaior(array) {
  let maior = array[0];
  let indice = 0;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
      indice = i;
    }
  }
  return indice;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));
