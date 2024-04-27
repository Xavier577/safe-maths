import { safeAdd } from "../src";

describe("SafeAdd", () => {
  it("should add 0.1 and 0.2 and get 0.3 exactly", () => {
    const result = safeAdd(0.1, 0.2);
    expect(result).toEqual(0.3);
  });

  it("should add 0.1 and 0.02 and get 0.12 exactly", () => {
    const result = safeAdd(0.1, 0.02);
    expect(result).toEqual(0.12);
  });

  it("should add 1 and 2 and get 3 exactly", () => {
    const result = safeAdd(1, 2);
    expect(result).toEqual(3);
  });

  it("should add 0.14 and 0.1 and get 0.24 exactly", () => {
    const result = safeAdd(0.14, 0.1);
    expect(result).toEqual(0.24);
  });

  it("should add 1e-14 and 0.1 and get 0.10000000000001 exactly", () => {
    const result = safeAdd(0.1, 1e-14);
    expect(result).toEqual(0.10000000000001);
  });
});
