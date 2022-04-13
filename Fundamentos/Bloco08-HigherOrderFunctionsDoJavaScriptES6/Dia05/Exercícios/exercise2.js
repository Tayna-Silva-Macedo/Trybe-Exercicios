// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo

const sum = (...numeros) => {
  const soma = numeros.reduce((acc, numero) => {
    return acc + numero;
  }, 0);

  return soma;
};

console.log(sum(4, 7, 8, 9, 60));
