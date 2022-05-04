let numero = 47;
let ehprimo = true;

if (numero !== 0 && numero !== 1) {
  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      ehprimo = false;
      break;
    }
  }
  if (ehprimo) {
    console.log("O número digitado é primo!");
  } else {
    console.log("O número digitado não é primo!");
  }
} else {
  console.log("O número digitado não é primo!");
}
