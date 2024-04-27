import { parseScientific } from "../src/utils/parse-scientific";

describe("ParseScientific", () => {
  it("should return 0.00000000000001 for 1e-14", () => {
    const result = parseScientific((1e-14).toString());
    expect(result).toEqual("0.00000000000001");
  });

  it("should return 10 for 10", () => {
    const result = parseScientific((10).toString());
    expect(result).toEqual("10");
  });

  it("should return 100 for 1e2", () => {
    const result = parseScientific((1e2).toString());
    expect(result).toEqual("100");
  });
});
