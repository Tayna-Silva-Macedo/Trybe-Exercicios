const uppercase = require('./exercise7');

test("Testa se a função retorna 'TEST' quando chamada com o parâmetro 'test'", (done) => {
  const callback = (string) => {
    try {
      expect(string).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  };

  uppercase('test', callback);
});
