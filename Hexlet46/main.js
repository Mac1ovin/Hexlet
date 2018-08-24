import { length } from "./strings"; // eslint-disable-line

// BEGIN (write your solution here)
const addDigits = num => {
  let a = 0;
  const str = String(num);
  if (num < 10) {
    return num;
  }
  for (let i = 0; i < length(str); i++) {
    a += Number(str[i]);
  }
  return addDigits(a);
};
export default addDigits;
// END
