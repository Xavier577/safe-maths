import { decimalCount } from "./decimal-count";

export function safeMultiply(a: number, b: number): number {
  const aMultiplier = Math.pow(10, decimalCount(a));
  const bMultiplier = Math.pow(10, decimalCount(b));

  const aInt = parseInt(String(a * aMultiplier));
  const bInt = parseInt(String(b * bMultiplier));

  const reducer = aMultiplier * bMultiplier;

  return (aInt * bInt) / reducer;
}
