export function decimalCount(val: number): number {
  if (Math.floor(val) === val) return 0;
  return val.toString().split(".")[1].length || 0;
}
