# Safe Maths

utils for safe arithmetics around floating point numbers

# Content

- [Getting started](#getting-started)
- [Issues](#issues)
- [Installation](#installation)
- [Functions](#functions)
  - [safeAdd](#safeadd)
  - [safeSubtract](#safesubtract)
  - [safeMultiply](#safemultiply)
  - [decimalCount](#decimalcount)

# Getting started

SafeMaths provides utility function to carry out arithmetic operations such as multiplication, addition and subtraction

```
// addition
console.log(0.1 + 0.2) // 0.30000000000000004
console.log(safeAdd(0.1,0.2)) // 0.3 ✅

// subtraction
console.log(0.3 - 0.1) // 0.19999999999999998
console.log(safeSubtract(0.3,0.1)) // 0.2 ✅

// multiplication
console.log(0.1 * 0.4) // 0.04000000000000001
console.log(safeSubtract(0.1,0.4)) // 0.04 ✅
```

# Issues

If any issue or bugs found while using SafeMaths do [open an issue](https://github.com/Xavier577/safe-maths/issues) and report it there.

# Installation

### Using yarn

```
$ yarn add safe-mts
```

### Using npm

```
$ npm install safe-mts
```

# Functions

## safeAdd
Takes two numbers and 'safely' adds them.

> Example

```typescript
import { safeAdd } from "safe-mts";

console.log(0.1 + 0.7) // 0.7999999999999999
console.log(safeAdd(0.1,0.7)) // 0.8 ✅
```

## safeSubtract

> Example

```typescript
import { safeSubtract } from "safe-mts";

console.log(0.7 - 0.2) // 0.49999999999999994
console.log(safeAdd(0.7,0.2)) // 0.5 ✅
```

## safeMultiply
Takes two numbers and 'safely' multiplies them.

> Example

```typescript
import { safeMultiply } from "safe-mts";

console.log(0.1 * 0.7) // 0.06999999999999999
console.log(safeMultiply(0.1,0.7)) // 0.07 ✅
```

## decimalCount
Returns the number of decimal places of a number. i.e 1 if 1dp, 2 if 2dp and so on.

> Example

```typescript
import { decimalCount } from "safe-mts";

console.log(decimalCount(0.1)) // 1 
console.log(decimalCount(0.01)) // 2
console.log(decimalCount(0.001)) // 3 
console.log(decimalCount(0.0001)) // 4 
```

