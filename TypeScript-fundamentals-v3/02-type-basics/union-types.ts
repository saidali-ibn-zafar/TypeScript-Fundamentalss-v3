
// In the below example, myVariable can hold values that are either strings or numbers.
// When assigning a value to myVariable, it can be either a string or a number. 
// If we try to assign a value of a different type, TypeScript will show an error.
let myVariable: string | number;
myVariable = "Hello"; // Valid
myVariable = 42;      // Valid
myVariable = true;    // Error: Type 'boolean' is not assignable to type 'string | number'

// - - - - - 

// In the printLength function below, we check the type of value using the typeof operator. 
// If it's a string, we can safely access its length property. If it's a number, 
// we treat it as such. If we try passing a value of a different type, TypeScript will show an error.
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(`Length of the string: ${value.length}`;
  } else {
    console.log(`Value is a number: ${value}`);
  }
}

printLength("Saidali"); // Length of string: 5
printLength(24); // Value is a number: 24
printLength(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

// - - - - - 

// In the printId function below, the id parameter can be either a number or a string. 
// We can pass values of either type to the function, but any other type will result
// in a TypeScript error.
function printId(id: number | string) {
  console.log(`ID: ${id}`);
}

printId(42);       // Valid
printId("abc");    // Valid
printId(true);     // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

// - - - - - 





