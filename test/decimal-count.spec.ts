import { decimalCount } from "../src";

describe("DecimalCount", () => {
  it("should return 1 for 0.1", () => {
    const result = decimalCount(0.1);
    expect(result).toEqual(1);
  });

  it("should return 1 for 0.01", () => {
    const result = decimalCount(0.01);
    expect(result).toEqual(2);
  });

  it("should return 1 for 0.001", () => {
    const result = decimalCount(0.001);
    expect(result).toEqual(3);
  });

  it("should return 14 for 1e-14", () => {
    const result = decimalCount(1e-14);
    expect(result).toEqual(14);
  });
});
