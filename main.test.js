const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./main");
const { add, minus, divide, multiply } = calculator;

test("Capitalize the first letter of a  string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse String", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("add two number", () => {
  expect(add(1, 1)).toBe(2);
});

test("minus two number", () => {
  expect(minus(2, 2)).toBe(0);
});

test("divide two number", () => {
  expect(divide(3, 3)).toBe(1);
});

test("multiply two number", () => {
  expect(multiply(4, 4)).toBe(16);
});

test("encrypt shi", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("encrypt toUpperCase", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("encrypt toUpperCase", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array ", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
