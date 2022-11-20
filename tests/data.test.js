const data = require("../src/data");

describe('Objetos', () => {
  test("Deve aribuir valor a um objeto", () => {
    expect(data).toEqual({ one: 1, two: 2 });
  });
  
});
