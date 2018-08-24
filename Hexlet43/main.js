import { length, toUpperCase } from "./strings";

const bigLettersCount = str => {
  // BEGIN (write your solution here)
  let a = 0;
  for (let i = 0; i < length(str); i++) {
    if (toUpperCase(str[i]) === str[i]) {
      a += 1;
    }
  }
  return a;
};
// END

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  } else {
    return 0;
  }
  // END
};

export const greaterThan = (first, second) => compare(first, second) === 1;

export const lessThan = (first, second) => compare(first, second) === -1;

export const isEqual = (first, second) => compare(first, second) === 0;
