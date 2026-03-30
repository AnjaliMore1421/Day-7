# 1)ES6 Modules: Static Analysis & Tree-Shaking Capability

 1)ES6 Modules :

ES6 Modules (ECMAScript Modules) are the standard way to organize JavaScript code into **separate reusable files**.
They help in:
- Splitting code into multiple files
- Improving readability

A module can **export** code and another file can **import** it.

### Example
// math.js
export function add(a, b) {
   return a + b;
}

// app.js
import { add } from './math.js';

console.log(add(2, 3));

 2) Static Analysis in ES6 Modules :

Static analysis means the JavaScript engine can understand **module dependencies before running the code**.
This is possible because:
- `import` and `export` statements are written at the **top level**
- They cannot be placed inside loops or conditions
  
### Example

import { add } from './math.js';
```
Here, the browser or bundler already knows that `app.js` depends on `math.js` before execution starts.
This allows:
- Faster loading
- Better optimization
- Error detection before runtime

 3) Tree-Shaking Capability :

Tree-shaking is the process of removing unused code from the final bundle.
It works like shaking a tree so that unwanted leaves fall off.

### Example

// utils.js
export function add() {}
export function subtract() {}
export function multiply() {}

// app.js
import { add } from './utils.js';
```

Only `add()` is used.

During bundling, tools like:

- :contentReference[oaicite:0]{index=0}
- :contentReference[oaicite:1]{index=1}
- :contentReference[oaicite:2]{index=2}

remove `subtract()` and `multiply()` from production code.

This reduces:
- File size
- Load time
- Memory usage

  # 2)New Data Types: Map, Set, WeakMap, WeakSet

  1) Map :
`Map` is a collection of **key-value pairs** where keys can be of any data type.
Features -
- Maintains insertion order
- Keys can be objects, functions, or primitive values
- Better performance for frequent additions and deletions

### Example
const user = new Map();

user.set("name", "Anjali");
user.set("role", "Developer");

console.log(user.get("name")); // Anjali

 2) Set
`Set` is a collection of **unique values**.
It automatically removes duplicate values.
Features -
- Stores only unique values
- Maintains insertion order
- Useful for removing duplicates from arrays

### Example
```javascript
const nums = new Set([1, 2, 2, 3, 4]);

console.log(nums); // Set {1, 2, 3, 4}

 3) WeakMap
`WeakMap` stores key-value pairs where keys must be objects.

The keys are weakly referenced, which means they can be garbage collected if no other reference exists.
 Features -
- Keys must be objects
- Not iterable
- Used for private data and caching

 Example :
const cache = new WeakMap();

let obj = {};
cache.set(obj, "cached data");

console.log(cache.get(obj)); // cached data

 4) WeakSet
`WeakSet` stores unique object references only.

Like `WeakMap`, objects can be garbage collected.
 Features -
- Only objects are allowed
- Stores unique objects
- Not iterable

Example :
const weakSet = new WeakSet();

let userObj = {};
weakSet.add(userObj);

console.log(weakSet.has(userObj)); // true


 3)Optional Chaining & Nullish Coalescing

 1) Optional Chaining (`?.`)
Optional chaining is used to **safely access nested object properties** without causing an error if a property is `null` or `undefined`.
It stops evaluation and returns `undefined` if the value before `?.` does not exist.

 Example :
const user = {
  profile: {
    name: "Anjali"
  }
};

console.log(user.profile?.name); // Anjali
console.log(user.address?.city); // undefined

 Benefit :
- Prevents runtime errors
- Cleaner code for nested property access

 2) Nullish Coalescing (`??`)
Nullish coalescing is used to provide a **default value** when the left-side value is `null` or `undefined`.

 Example :
const username = null;
const name = username ?? "Guest";

console.log(name); // Guest


Unlike `||`, it does not treat `0`, `false`, or empty string as fallback cases.

 Example :
const count = 0;

console.log(count ?? 10); // 0
console.log(count || 10); // 10

 Benefit :
- Assigns default values safely
- Useful when valid falsy values like `0` or `false` should be preserved


4)Spread vs Rest Operator – Advanced Usage

 1) Spread Operator (`...`)
The spread operator is used to **expand elements** of an array, object, or iterable into individual values.
 Advanced Usage :
- Copying arrays and objects
- Merging arrays and objects

 Example :
const arr1 = [1, 2];
const arr2 = [3, 4];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4]

const user = { name: "Anjali" };
const updatedUser = { ...user, role: "Developer" };

console.log(updatedUser); // { name: "Anjali", role: "Developer" }

 2) Rest Operator (`...`)
The rest operator is used to **collect multiple elements into a single array or object**.
Advanced Usage :
- Function parameters
- Destructuring arrays

 Example :
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

Destructuring Example :

const [first, ...remaining] = [10, 20, 30, 40];

console.log(first);      // 10
console.log(remaining);  // [20, 30, 40]


