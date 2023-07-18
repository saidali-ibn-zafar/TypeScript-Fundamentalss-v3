## Generics

Generics in TypeScript are a powerful feature that allows you to create reusable and type-safe components and functions. Generics enable you to define placeholders for types, which can be used to create flexible and generic code.

```ts
// Simple generic function
function identity<T>(arg: T): T {
  return arg;
}

// Using the generic function
let result = identity<string>("Hello");
console.log(result); // Output: Hello

// Alternatively, TypeScript can infer the generic type
let inferredResult = identity("World");
console.log(inferredResult); // Output: World

```
