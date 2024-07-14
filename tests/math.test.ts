// tests/math.test.ts
import { add, subtract, multiply, divide } from "../src/math";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 5 - 3 to equal 2", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiplies 4 * 3 to equal 12", () => {
  expect(multiply(4, 3)).toBe(12);
});

test("divides 10 / 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("divides 10 / 0 to throw an error", () => {
  expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
});
