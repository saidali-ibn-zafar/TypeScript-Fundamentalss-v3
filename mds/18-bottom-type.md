## Bottom Type

In TypeScript, the bottom type is represented by the never type. The never type represents values that never occur. It is used to indicate that a function never returns or that a variable can't have any value.

```ts
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // code here
  }
}

// Variable with the never type
let unreachable: never;

// Type inference
let value = error("Something went wrong"); // value has the type never

// Function returning never can be assigned to other types
let foo: string = error("Error"); // OK, error() returns never, which is a subtype of string

// Function returning never can also be assigned to the never type
let bar: never = error("Error"); // OK, error() returns never
```


In the example above, the error function throws an error, so it never returns. Therefore, its return type is never. Similarly, the infiniteLoop function has an infinite loop and never finishes, so its return type is also never.
