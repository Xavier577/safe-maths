import { parseScientific } from "./parse-scientific";

export function decimalCount(val: number): number {
  if (Math.floor(val) === val) return 0;

  if (!issScientific(val)) return val.toString().split(".")[1].length || 0;

  return parseScientific(val.toString()).split(".")[1].length || 0;
}

export function issScientific(val: number) {
  return val.toString().includes("e");
}
