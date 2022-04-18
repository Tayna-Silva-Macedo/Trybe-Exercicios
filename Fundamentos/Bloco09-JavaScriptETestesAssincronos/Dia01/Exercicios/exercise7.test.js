const uppercase = require('./exercise7');

test("Testa se a função retorna 'TEST' quando chamada com o parâmetro 'test'", (done) => {
  uppercase('test', (stringUpper) => {
    try {
      expect(stringUpper).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});
