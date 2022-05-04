function maiorValor(a, b) {
  if (a > b) {
    return "O maior valor é: " + a;
  } else if (b > a) {
    return "O maior valor é: " + b;
  } else {
    return "Os dois valores são iguais!";
  }
}

console.log(maiorValor(50, 100));
