const service = require('./service');

test('Exercício 1', () => {
  // Testa se a função foi chamada, qual o seu retorno e quantas vezes foi chamada.

  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test('Exercício 2', () => {
  // Testa se a função foi chamada, qual o seu retorno, quantas vezes foi chamada, com quais parâmetros e se a aplicação da nova implementação acontece apenas uma vez.

  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(12, 2)).toBe(6);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(12, 2);
  expect(service.randomNumber(12, 2)).toBe(undefined);
});

describe('Exercício 3', () => {
  test('Testa função mockada que recebe três parâmetros e retorna sua multiplicação', () => {  
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
    expect(service.randomNumber(1, 2, 3)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(1, 2, 3);
  });

  test('Testa função mockada que recebe um parâmetros e retorna o dobro', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);
      
    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);
  
    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });
})

