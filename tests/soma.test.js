const soma = require("../src/soma");

describe('Calculos', () => {
  test("Deve somar dois valores", () => {
    expect(soma(1, 2)).toBe(3);
  });
});

