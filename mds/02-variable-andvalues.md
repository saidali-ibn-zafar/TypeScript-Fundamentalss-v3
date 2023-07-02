## Variable and Values

In JavaScript we declare variables all the time with `let` and `const` like this: 
```js
let age = 7; // let age: number
```
As we can see, TypeScript is able to infer that `age` is a number, based on the fact that we are initializing it with a value as we are declering it.

If we try to give `age` a value that is <i>incompatible</i> with `number`, we get an error
  
  ```ts
  let age = 6;
  age = "not a number"; // ERROR: 
  // Type 'string' is not assignable to type 'number'.
  ```

In TypeScript, variables are "born" with their types. Although there are ways of making them more specific in certain branches of code, there is not (safe) way of changing `age`'s type form `number` to `string`.

## In Progress...
