function techList(array, name) {
  let novaArray = [];
  let arrayOrdenada = array.sort();

  if (array[0] === undefined) {
    return 'Vazio!';
  }
  for (let i = 0; i < array.length; i += 1) {
    novaArray.push({
      tech: arrayOrdenada[i],
      name,
    });
  }
  return novaArray;
}