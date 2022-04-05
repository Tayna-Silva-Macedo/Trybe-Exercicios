function hydrate(string) {
  let reg = /\d+/g;
  let arrayNumerosString = string.match(reg);
  let arrayNumeros = [];

  for (let i = 0; i < arrayNumerosString.length; i += 1) {
    arrayNumeros.push(parseInt(arrayNumerosString[i], 10));
  }

  let soma = 0;
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    soma += arrayNumeros[i];
  }

  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}