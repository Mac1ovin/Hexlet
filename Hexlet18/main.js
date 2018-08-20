const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin > end) return NaN;
  else if (begin === end) return begin;
  return end + sequenceSum(begin, end - 1);
};
// END
console.log(sequenceSum);
// export default sequenceSum;
