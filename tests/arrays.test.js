const listaDeCompras = require("../src/arrays");

describe("Arrays", () => {
  test("Deve conter leite na lista de compras", () => {
    expect(listaDeCompras).toContain("milk");
    expect(new Set(listaDeCompras)).toContain("milk");
  });
});
