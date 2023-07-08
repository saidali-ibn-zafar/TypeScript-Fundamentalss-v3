// arrays
let languages = ["Java", "JavaScript", "TypeScript"];

languages.push("Python"); // it works
// languages.push(15); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// languages[0] = 3; // Error: Type 'number' is not assignable to type 'string'.

// - - - - -

let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.push(8); // it works
// numbers.push("nine") // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// - - - - -

let mixed = ["JS", 15, "C", "C#", 24, 10];
mixed.push(11); // fine
mixed.push("PY"); // fine
mixed[0] = 7; // fine

// becuse it was mixed, when we created it at the beginning if it contained only strings then we get errors when we pushed numbers and vice versa ...
// = = = = = = = = =

// objects
let person = {
  name: "Saidali",
  belt: "black",
  age: 19,
};

person.name = "Ali";
person.belt = "!white";
// person.age = "nineteen"; // then we get an error:
// let person: {
//     name: string;
//     belt: string;
//     age: number;
// }
// Type 'string' is not assignable to type 'number'.

// AND we cannot add additional properties too
// person.hasCar = true; // Error: Property 'hasCar' does not exist on type '{ name: string; belt: string; age: number; }'

// - - - - -

// these codes below also kind of changing values of properties of person obj
person = {
  name: "Ali",
  belt: "black",
  age: 21,
  // hasCar: false  // in this case also we cannot add ...
};
