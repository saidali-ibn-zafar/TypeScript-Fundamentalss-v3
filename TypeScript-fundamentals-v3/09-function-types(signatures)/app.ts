// let greet: Function

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// greet = (name: string, greeting: number) => {
//     console.log(`${name} says ${greeting}`);
//   }; // we get an ❌ERROR❌, why do you know?

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

// calc = (numOne: boolean, numTwo: string, action: string) => {
//     if (action === "add") {
//       return numOne + numTwo;
//     } else {
//       return numOne - numTwo;
//     }
//   }; // we get an ❌ERROR❌, why do you know?

// example 3

let logDetails: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails = (user: person) => {
  console.log(`${user.name} is ${user.age} years old`);
};

// example 4
