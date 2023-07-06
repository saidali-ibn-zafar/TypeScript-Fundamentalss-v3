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

