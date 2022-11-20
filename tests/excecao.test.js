const compilacao = require("../src/excecao");

describe('Excecoes', () => {
  test("compiling android goes as expected", () => {
    expect(() => compilacao()).toThrow();
    expect(() => compilacao()).toThrow(Error);
  
    expect(() => compilacao()).toThrow("you are using the wrong JDK");
    expect(() => compilacao()).toThrow(/JDK/);
  
  //   expect(() => compilacao()).toThrow(/^you are using the wrong JDK$/); // Teste falha
    expect(() => compilacao()).toThrow(/^you are using the wrong JDK!$/); // Teste passa
  });
  
});
