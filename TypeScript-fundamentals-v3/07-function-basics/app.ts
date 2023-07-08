let greet = () => {
  console.log("Hello, TypeScript");
};

// greet = "Hello"; // ❌ Type 'string' is not assignable to type '() => void'.

// - - - - -

// we can explicitly say that it is a function
let sayHello: Function; // with capital NOTICE that

sayHello = () => {
  console.log("Hello");
};

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};
// ⚠️ we use ? after c that means c is optional,
// ⚠️ we can set with default value like below:
// ⚠️ and c is union type, you know, right?

const add2 = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
};

// ⚠️ delete ? and add =

// - - - - -

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7); // so the type of result is the type of return of minus function type : number in this case
// result = "smt else" // ❌ gives an error
