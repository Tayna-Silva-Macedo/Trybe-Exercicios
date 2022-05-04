const searchEmployee = require("./searchEmployee");

test("Testa se a função existe", () => {
  expect(typeof searchEmployee).toBe("function");
});

test('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
  expect(searchEmployee("9852-2-2", "firstName")).toBe("Jeff");
});

test('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
  expect(searchEmployee("9852-2-2", "lastName")).toBe("Cook");
});

test('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
  expect(searchEmployee("9852-2-2", "specialities")).toEqual(["Ruby", "SQL"]);
});

test('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
  expect(() => {
    searchEmployee("12345", "firstName");
  }).toThrowError();
});

test("Testa a mensagem do erro para ID inexistente", () => {
  expect(() => {
    searchEmployee("12345", "firstName");
  }).toThrowError(new Error("ID não identificada"));
});

test("Testa se lança um erro quando a informação é o ID são inexistentes", () => {
  expect(() => {
    searchEmployee();
  }).toThrowError();
});

test('Testa se um erro com a mensagem "Informação indisponível" é retornado quando a informação não existir', () => {
  expect(() => {
    searchEmployee("4456-4", "adress");
  }).toThrowError();
});

test("Testa a mensagem do erro para informação inexistente", () => {
  expect(() => {
    searchEmployee("4456-4", "adress");
  }).toThrowError(new Error("Informação indisponível"));
});
