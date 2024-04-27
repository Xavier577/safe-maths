import { decimalCount } from "./decimal-count";

export function safeAdd(a: number, b: number): number {
  const aMultiplier = Math.pow(10, decimalCount(a));
  const bMultiplier = Math.pow(10, decimalCount(b));

  let multiplier = Math.max(aMultiplier, bMultiplier);

  const aInt = parseInt(String(a * multiplier));
  const bInt = parseInt(String(b * multiplier));

  return (aInt + bInt) / multiplier;
}
