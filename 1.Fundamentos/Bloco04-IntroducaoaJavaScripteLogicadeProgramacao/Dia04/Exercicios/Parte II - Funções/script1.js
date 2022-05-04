function verificaPalindromo(palavra) {
  let inversa = palavra.split("").reverse().join("");

  if (inversa === palavra) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindromo("desenvolvimento"));
