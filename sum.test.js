
const sum = require("./sum");

test("testing sum", () => {
    expect(sum.sum(1,2)).toBe(3);
});

test("Testing subtraction method", () => {
    expect(sum.sub(2,1)).toBe(1);
});


test("Testing multipication method", ()=> {
    expect(sum.mul(1,2)).toBe(2);
});


test("Testing division method", () => {
    expect(sum.div(2,1)).toBe(2);
});

test("Testing division method", () => {
    expect(sum.div(2,0)).toBe(undefined);
});

