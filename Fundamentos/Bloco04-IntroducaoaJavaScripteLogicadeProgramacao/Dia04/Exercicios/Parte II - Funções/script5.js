function maisRepete(array) {
  let maximaFrequencia = 1;
  let contador = 0;
  let item;

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        contador = contador + 1;
      }
      if (maximaFrequencia < contador) {
        maximaFrequencia = contador;
        item = array[i];
      }
    }
    contador = 0;
  }
  return item;
}

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));
