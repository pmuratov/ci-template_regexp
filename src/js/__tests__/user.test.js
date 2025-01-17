import { Validator } from "../user";

test("name onlyLetters and -_", () => {
  const validator = new Validator();
  const result = validator.validateUsername("user-name");
  expect(result).toBe(true);
});
test("name doesnt start witn digit", () => {
  const validator = new Validator();
  const result = validator.validateUsername("7user-name");
  expect(result).toBe(false);
});
test("name name doesnt end witn digit", () => {
  const validator = new Validator();
  const result = validator.validateUsername("user-name45");
  expect(result).toBe(false);
});
test("name doesnt contain >3 digits consequently", () => {
  const validator = new Validator();
  const result = validator.validateUsername("U4567ser-name");
  expect(result).toBe(false);
});
test("name doesnt start with a symbol", () => {
  const validator = new Validator();
  const result = validator.validateUsername("-User");
  expect(result).toBe(false);
});
