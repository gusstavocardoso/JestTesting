const data = require("../src/data");

describe("Objects", () => {
  test("Should assign value to an object", () => {
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
