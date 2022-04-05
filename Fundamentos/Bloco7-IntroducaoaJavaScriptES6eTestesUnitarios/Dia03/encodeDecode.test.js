const { encode, decode } = require("./encodeDecode");

test("Testa se encode e decode são funções", () => {
  expect(typeof encode).toBe("function");
  expect(typeof decode).toBe("function");
});

test("Para a função encode testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;", () => {
  expect(encode("a")).toBe("1");
  expect(encode("e")).toBe("2");
  expect(encode("i")).toBe("3");
  expect(encode("o")).toBe("4");
  expect(encode("u")).toBe("5");
});

test("Para a função decode testa se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;", () => {
  expect(decode("1")).toBe("a");
  expect(decode("2")).toBe("e");
  expect(decode("3")).toBe("i");
  expect(decode("4")).toBe("o");
  expect(decode("5")).toBe("u");
});

test("Testa se as demais letras/números não são convertidos para cada caso;", () => {
  expect(encode("coragem")).toBe("c4r1g2m");
  expect(decode("c4r1g2m")).toBe("coragem");
});

test("Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.", () => {
  expect(encode("tryber").length).toBe(6);
  expect(decode("tryb2r").length).toBe(6);
});
