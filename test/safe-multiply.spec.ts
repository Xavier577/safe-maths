import { safeMultiply } from "../src";

describe("SafeMultiply", () => {
  it("should multiply 0.1 by 0.2 and get 0.02 exactly", () => {
    const result = safeMultiply(0.1, 0.2);
    expect(result).toEqual(0.02);
  });

  it("should multiply 0.1 by 0.05 and get 0.05 exactly", () => {
    const result = safeMultiply(0.1, 0.05);
    expect(result).toEqual(0.005);
  });

  it("should multiply 1 by 2 and get 2 exactly", () => {
    const result = safeMultiply(1, 2);
    expect(result).toEqual(2);
  });
});
