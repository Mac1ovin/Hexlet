// BEGIN (write your solution here)
const smallestDivisor = n => {
  if (n < 1) return NaN;
  if (n === 1) return 1;
  let divisor = 2;
  while (n % divisor !== 0) {
    divisor = divisor + 1;
  }
  return divisor;
};
// END
export default smallestDivisor;
