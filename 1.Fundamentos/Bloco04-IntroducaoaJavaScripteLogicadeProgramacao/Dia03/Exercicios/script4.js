let maiorPrimo = 0;

for (let numero = 0; numero <= 50; numero += 1) {
  let ehprimo = true;
  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      ehprimo = false;
      break;
    }
  }
  if (ehprimo) {
    maiorPrimo = numero;
  }
}

console.log("O maior número primo entre 0 e 50 é: ", maiorPrimo);
