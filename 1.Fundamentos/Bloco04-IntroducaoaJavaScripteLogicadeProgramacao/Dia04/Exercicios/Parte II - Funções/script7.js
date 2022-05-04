function verificaFimPalavra(palavra, final) {
  for (let i = 0; i < final.length; i += 1) {
    if (palavra[palavra.length - final.length + i] !== final[i]) {
      return false;
    }
  }
  return true;
}

console.log(verificaFimPalavra("trybe", "be"));
