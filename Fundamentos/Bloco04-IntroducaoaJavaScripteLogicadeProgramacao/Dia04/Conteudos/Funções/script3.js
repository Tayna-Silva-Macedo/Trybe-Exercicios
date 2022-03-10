function maiorValor(a, b, c) {
  if (a > b && a > c) {
    return "O maior valor é: " + a;
  } else if (b > a && b > c) {
    return "O maior valor é: " + b;
  } else if (c > a && c > b) {
    return "O maior valor é: " + c;
  } else {
    return "Temos valores iguais!";
  }
}

console.log(maiorValor(5, 10, 15));
