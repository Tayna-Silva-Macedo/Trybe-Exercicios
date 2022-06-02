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
});

describe('Exercício 4', () => {
  test('Testa função mockada para receber um parâmetro e retornar em caixa baixa', () => {
    const mockLowerCase = jest.spyOn(service, 'upperCase').mockImplementation((a) => a.toLowerCase());

    expect(mockLowerCase('TAYNA')).toBe('tayna');
    expect(service.upperCase).toHaveBeenCalledTimes(1);
    expect(service.upperCase).toHaveBeenCalledWith('TAYNA');
  });

  test('Testa função mockada para receber um parâmetro e retornar a última letra', () => {
    const mockLastLetter = jest.spyOn(service, 'firstLetter').mockImplementation((a) => a[a.length - 1]);

    expect(mockLastLetter('Tayna')).toBe('a');
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('Tayna');
  });

  test('Testa função mockada para receber três parâmetros e os concatena', () => {
    const mockConcatStrings = jest.spyOn(service, 'concatStrings').mockImplementation((a, b, c) => a + b + c);

    expect(mockConcatStrings('tayna', 'nathan', 'vania')).toBe('taynanathanvania');
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
    expect(service.concatStrings).toHaveBeenCalledWith('tayna', 'nathan', 'vania');
  });

  test('Restaura a primeira função e verifica se ela retorna em caixa alta', () => {
    service.upperCase.mockRestore();

    expect(service.upperCase('tayna')).toBe('TAYNA');
  });
});

describe('Exercício 5', () => {
  service.fetchDogPictures = jest.fn();
  afterEach(service.fetchDogPictures.mockReset);

  test('Testa requisição caso a promise resolva', async () => {
    service.fetchDogPictures.mockResolvedValue('request sucess');

    service.fetchDogPictures();
    expect(service.fetchDogPictures).toHaveBeenCalled();
    expect(service.fetchDogPictures).toHaveBeenCalledTimes(1);
    await expect(service.fetchDogPictures()).resolves.toBe('request sucess');
    expect(service.fetchDogPictures).toHaveBeenCalledTimes(2);    
  });

  test('Testa requisição caso a promise seja rejeitada', async () => {
    service.fetchDogPictures.mockRejectedValue('request failed');

    expect(service.fetchDogPictures).toHaveBeenCalledTimes(0);
    await expect(service.fetchDogPictures()).rejects.toMatch('request failed');
    expect(service.fetchDogPictures).toHaveBeenCalledTimes(1);  
    
  });
});

