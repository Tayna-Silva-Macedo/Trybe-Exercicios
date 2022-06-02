const service = require('./service');

test('Testa se a função foi chamada, qual o seu retorno e quantas vezes foi chamada', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test('Testa se a função foi chamada, qual o seu retorno, quantas vezes foi chamada, com quais parâmetros e se a aplicação da nova implementação acontece apenas uma vez', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(12, 2)).toBe(6);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(12, 2);
  expect(service.randomNumber(12, 2)).toBe(undefined);
});
