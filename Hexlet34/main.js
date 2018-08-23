import assert from "assert";
import factorial from "./implementations";

// Example
// assert.equal(factorial(2), 2);
// assert.equal(factorial(3), 6);

// BEGIN (write your solution here)
assert(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(4), 24);
assert(factorial(0), 0);
assert(factorial(1), 1);
assert(factorial(5), 120);
// END
