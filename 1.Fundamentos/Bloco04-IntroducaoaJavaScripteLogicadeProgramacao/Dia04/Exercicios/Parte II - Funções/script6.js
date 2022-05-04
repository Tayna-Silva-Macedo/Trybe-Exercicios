function somatorio(n) {
  let somatorio = 0;
  for (let i = 1; i <= n; i += 1) {
    somatorio = somatorio + i;
  }
  return somatorio;
}

console.log(somatorio(5));
