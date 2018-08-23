// BEGIN (write your solution here)
const square = n => n * n;
const sumOfSquares = (a, b) => square(a) + square(b);
const squareSumOfSquares = (a, b) => sumOfSquares(a, b) * sumOfSquares(b, a);
// END

export default {
  square,
  sumOfSquares,
  squareSumOfSquares
};
