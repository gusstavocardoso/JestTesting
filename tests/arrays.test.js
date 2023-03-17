const shoppingList = require("../src/arrays");

describe("Arrays", () => {
  test("Deve conter leite na lista de compras", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
});
