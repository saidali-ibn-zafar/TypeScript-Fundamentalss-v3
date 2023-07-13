
type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (x, y) => {
  return x + y;
};

const multiply: MathOperation = (x, y) => {
  return x * y;
};

console.log(add(3, 4));        // Output: 7
console.log(multiply(3, 4));   // Output: 12
