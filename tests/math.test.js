const soma = require("../src/math");
const multiplica = require("../src/math");

describe("Math", () => {
  test("Deve somar dois valores", () => {
    expect(soma(1, 2)).toBe(3);
  });

  test("Deve multiplicar dois valores", () => {
    expect(multiplica(2, 2)).toBe(4);
  });
});
