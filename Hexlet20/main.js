const smallestDivisor = num => {
  // BEGIN (write your solution here)
  const iter = (counter, acc) => {
    if (num === 1) return 1;

    if (counter === 1) return acc;

    if (num % counter === 0) {
      return iter(counter - 1, counter);
    }

    return iter(counter - 1, acc);
  };
  1;
  return iter(num, num);
};
// END
export default smallestDivisor;
