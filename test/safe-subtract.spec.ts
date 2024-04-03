import { safeSubtract } from "../src";

describe("SafeSubtract", () => {
  it("should subtract 0.1 from 0.3 and get 0.2 exactly", () => {
    const result = safeSubtract(0.3, 0.1);
    expect(result).toEqual(0.2);
  });

  it("should subtract 0.3 from 0.1 and get -0.2 exactly", () => {
    const result = safeSubtract(0.1, 0.3);
    expect(result).toEqual(-0.2);
  });

  it("should subtract 0.1 from 0.4 and get 0.3 exactly", () => {
    const result = safeSubtract(0.4, 0.1);
    expect(result).toEqual(0.3);
  });

  it("should subtract 0.4 from 0.1 and get -0.3 exactly", () => {
    const result = safeSubtract(0.1, 0.4);
    expect(result).toEqual(-0.3);
  });
});
