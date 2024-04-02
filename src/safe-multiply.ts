import { decimalCount } from "./decimal-count";

export function safeMultiply(a: number, b: number): number {
  const aMultiplier = Math.pow(10, decimalCount(a));
  const bMultiplier = Math.pow(10, decimalCount(a));

  const aInt = a * aMultiplier;
  const bInt = b * bMultiplier;

  const reducer = aMultiplier * bMultiplier;

  return (aInt * bInt) / reducer;
}
