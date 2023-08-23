# Type Guards
- - - - - 

Provided below example of using type guard functions `isString` and `isNumber` along with type narrowing in TypeScript. The processData function takes a parameter `data` of type `string | number (union type)`, and you use the type guard functions to conditionally narrow down the type of data based on whether it's a string or a number.

```ts
// Type guard function to check if the input is a string
function isString(value: any): value is string {
  return typeof value === 'string';
}

// Type guard function to check if the input is a number
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

// Example usage
function processData(data: string | number): void {
  if (isString(data)) {
    // Inside this block, 'data' is narrowed down to type 'string'
    console.log(`Length of the string: ${data.length}`);
  } else if (isNumber(data)) {
    // Inside this block, 'data' is narrowed down to type 'number'
    console.log(`Square of the number: ${data * data}`);
  } else {
    // 'data' could be any other type
    console.log("Invalid data type.");
  }
}

processData("saidali"); // Output: Length of the string: 7
processData(4);      // Output: Square of the number: 16
processData(true);    // Output: Invalid data type.

```
- - - - - 
1) If data is a string, the isString type guard returns true, and TypeScript narrows down data to type string. Inside the if block, you can safely access the length property of the data string.

2) If data is a number, the isNumber type guard returns true, and TypeScript narrows down data to type number. Inside the else if block, you can safely perform numeric operations on the data number.

3) If data is neither a string nor a number (e.g., boolean, object, null, undefined, etc.), the type of data remains a union type, and TypeScript enters the else block.
- - - - - 
By using type guards, you can handle different types of data in a type-safe manner and ensure that the correct type-specific operations are performed without introducing runtime errors.

- - - - - 

More info:

- Type guards are functions or expressions that perform runtime checks to determine the actual type of a variable with a union type or complex type.

- Type guards are typically custom functions with a specific signature (value is Type) that return a boolean value (true or false) based on the type check.

- The primary purpose of type guards is to enable more precise type inference and type checking at runtime.

- Type guards are used in conditional statements (e.g., if, else, switch) to conditionally narrow down the type of a variable within specific code blocks based on the result of the type check.

- - - - -

## What's a "Type Guard"?
- A code pattern where we check for a certain type before we try to do something with it at runtime.

