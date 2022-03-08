let numeros = [];

for (let index = 1; index <= 25; index += 1) {
  numeros.push(index);
}

for (let index = 0; index < numeros.length; index += 1) {
  let divide = numeros[index] / 2;
  console.log(divide);
}
