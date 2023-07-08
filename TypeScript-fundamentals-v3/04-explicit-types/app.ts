// explicit types
let char: string;
let age: number;
let isLoggedIn: boolean;

// age = "hello TS"; // ❌
age = 19; // ✔️

// isLoggedIn = 24; // ❌
isLoggedIn = true; // ✔️

// arrays
let names: string[] = [];
// we added = [] and then we can use push()
names.push("Ali");
// otherwise, we get an error - Uncaught TypeError: Cannot read property "push" of undefined

// union types
let mixed: (string | number)[] = [];
mixed.push("As-salamu alaikum"); // ✔️
mixed.push(20); // ✔️
mixed.push(true); // ❌ in this case, we get an error - Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// let uid: (string | number); // ❌
let uid: string | number; // ✔️ no need (), only need when we are working with array like above;
uid = "123";
uid = 123;

// objects
let person: object;
person = { name: "Saidali", age: 19 };

// This is how we explicitly type our variables before to give them values
let people: {
  name: string;
  age: number;
  beltColor: string;
};

people = { name: "Ali", age: 20, beltColor: "black" };
