const myFizzBuzz = require("./myFizzBuzz");

test("Testa uma chamada com um número divisível por 3 e 5 e verifica se o retorno é o esperado", () => {
  expect(myFizzBuzz(15)).toBe("fizzbuzz");
});

test("Testa uma chamada com um número divisível por 3 e verifica se o retorno é o esperado", () => {
  expect(myFizzBuzz(3)).toBe("fizz");
});

test("Testa uma chamada com um número divisível por 5 e verifica se o retorno é o esperado", () => {
  expect(myFizzBuzz(5)).toBe("buzz");
});

test("Testa uma chamada com um número que não é divisível por 3 ou 5 e verifica se o retorno é o esperado", () => {
  expect(myFizzBuzz(4)).toBe(4);
});

test("Testa uma chamada com um parâmetro que não é um número e verifica se o retorno é o esperado", () => {
  expect(myFizzBuzz("a")).toBe(false);
});
