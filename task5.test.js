const {contain} = require("./task5");

test("Testing include", () => {
    expect(contain(1)).toBe(true);
});

test("Testing include", () => {
    expect(contain(9)).toBe(false);
});