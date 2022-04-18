// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercise8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const erroEsperado = new Error('Não temos esse pokémon para você :(');

    const callback = (error, msg) => {
      expect(error).toEqual(erroEsperado);
      done();
    };

    getPokemonDetails((pokemon) => pokemon.name === 'pikachu', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const stringEsperada = `Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun`;

    const callback = (error, msg) => {
      expect(msg).toBe(stringEsperada);
      done()
    };

    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
  });
});
