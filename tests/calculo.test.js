const soma = require("../src/calculo");
const multiplica = require("../src/calculo");

describe("Calculos", () => {
  test("Deve somar dois valores", () => {
    expect(soma(1, 2)).toBe(3);
  });

  test("Deve multiplicar dois valores", () => {
    expect(multiplica(2, 2)).toBe(4);
  });
});
