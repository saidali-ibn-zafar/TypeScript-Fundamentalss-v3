// ANY
let age: any = 19;

age = true;
console.log(age); // Output: true

age = "TypeScript";
console.log(age); // Output: TypeScript

age = { name: "Saidali" };
console.log(age); // { name: "Saidali" }

//  - - - - -

let mixed: any[] = [];

mixed.push("Ali");
mixed.push(11);
mixed.push(true);

console.log(mixed); // (3) ["Ali", 11, true]
// ANY - we can add any value, got it?

let person: { name: any; age: any }; // ✔️
// not "let person = ..." use ":"!
// let person = { name: any; age: any }; ❌
