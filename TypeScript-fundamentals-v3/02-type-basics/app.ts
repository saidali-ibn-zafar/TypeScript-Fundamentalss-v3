let character = "Saidali";
let age = 19;
let isBlackBelt = false;

// character = 11; // ⚠️ if we try to set character with something like number, we quicly get an error with red line under character
// So we cannot change it into number, but we can set it with type string : "Ali", "TypeScript" ...
character = "Ali"; // no error 👍

// and
// age = "TypeScript" // ⚠️ In this case also we get an error . . ., the type "TypeScript" is not assignable to type number
age = 20; // it is OK. 👍

// and
// isBlackBelt = "yes"; // ERROR:
// let isBlackBelt: boolean
// Type 'string' is not assignable to type 'boolean'.
isBlackBelt = true;

// - - - - -

const circ = (diameter) => {
  return diameter * Math.PI;
};

// console.log(circ("Hello")) // Output: NaN

const circ2 = (diameter: number) => {
  return diameter * Math.PI;
};

// console.log(circ2("Hello")); // Output: Error: Argument of type 'string' is not assignable to parameter of type 'number'
console.log(circ2(11));
