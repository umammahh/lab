const task3 = require("./task3");

test("Testing power", () => {
    expect(task3.power(5,5)).toBe(3125);
});

test("Testing round", () => {
    expect(task3.round(3.7)).toBe(4);
});

test("Testing ceiling", () => {
    expect(task3.ceiling(1.2)).toBe(2);
});