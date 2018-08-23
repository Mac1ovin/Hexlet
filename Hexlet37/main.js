// myMathModule
export const getTrianglePerimeter = (a, b, c) => a + b + c;

// BEGIN (write your solution here)
export const getTriangleArea = (h, b) => {
  return (1 / 2) * h * b;
};
getTriangleArea(5, 10); // === 25;
getTriangleArea(15, 12); //=== 90;
// END
// solution
import square from "./square";
// BEGIN (write your solution here)
import * as getTriangleArea from "./myMathModule";
export default (getTriangleArea = n => {
  return (square(n) * n) / 4;
  // return getTriangleArea;
});

// END
