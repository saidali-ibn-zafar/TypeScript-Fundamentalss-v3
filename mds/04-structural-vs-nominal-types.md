How is TypeScript similar and different from Java and JavaScript?

- - - - - 

## What is type checking?

 - Type-checking can be seen as a process that assess whether elements in out code are compatible or have equivalent types.

```ts
function foo(x) {
  // ... mystery code ...
}
//
// TYPE CHECKING
// -------------
// Is `myValue` type-equivalent to
//     what `foo` whats to receive?
foo(myValue)
```

This question can be asked at a function call - such as foo(myValue) in the above example - as an assignment,

is the value y holds type-equivalent to what `x` allows?
x = y

```ts
const myStrings = ["a"]
/// ---cut---
function bar(): string[] {
  // ...mystery code that might return early...
  //
  //
  // TYPE CHECKING
  // -------------
  // Is `myStrings` type-equivalent to
  //     what `bar` states it will return?
  return myStrings
}
```

- - - - - 

## Static and Dynamic 
- `Statically typed` is a programming language characteristic in which variable types are `explicitly` declared and thus are determined at `compile time`.
- `Dynamic typing` is a programming language feature where variable types are determined `automatically` based on assigned values at runtime, without the need for explicit type declarations during coding.

- - - - -

### What is the difference between `static` and `dynamic` type?
The static type of a variable is the type of the variable given in its declaration. The dynamic type of a variable is the type of the value in the variable. The term has meaning only when the program is running, and the dynamic type may be changed often as new values are assigned to the variable.

- Static Typing:

```ts
let num: number = 10;
let str: string = 'Hello, TypeScript';
let bool: boolean = true;

// Static typing enforces type checking
num = 'Invalid'; // Error: Type '"Invalid"' is not assignable to type 'number'
str = 42; // Error: Type '42' is not assignable to type 'string'
bool = 0; // Error: Type '0' is not assignable to type 'boolean'
 ```

- - - - - 

- Dynamic Typing:

```ts
let dynamicVariable: any = 'Hello, TypeScript'; // Using 'any' for dynamic typing
console.log(dynamicVariable.length); // Output: 18

dynamicVariable = 10; // Assigning a different type
console.log(dynamicVariable.length); // Output: undefined
console.log(dynamicVariable.toFixed(2)); // Output: 10.00

```

- TypeScript’s type system is static.


- - - - - 

- Static Typing:
  - Type Checking at Compile Time,
  - Type Annotations,
  - Early Error Detection during compilation.
  - Examples: Languages like Java, C++, and TypeScript are statically typed.
- - - - - 
- Dynamic Typing:
  - Type Checking at Runtime:
  - No Type Annotations:
  - Flexible but Prone to Runtime Errors: Dynamic typing allows for more flexibility but can lead to type-related errors at runtime if not handled carefully.
  - Examples: Languages like Python, JavaScript, and Ruby are dynamically typed.
