const sum = require("./sum");

test('Testa o resultado da soma', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
})

test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
  expect(() => {sum(4,"5")}).toThrowError();
})

test('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => {sum(4,"5")}).toThrowError('parameters must be numbers');
})