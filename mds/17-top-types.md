## Top Types


- A `top type` is a type that describes `any possible value allowed by the system`.

  TypeScript provides two of these types: `any` and `unknown`;

`Any`:

  ```ts
  let flexible: any = 4;
  flexible = "Any";
  flexible = true;
  flexible = window.document
  ```

  `Any` is not safe, but console.log, it can print anything;

  - - - - -

  `Unknown`:

  Like `any`, unknown can accept any value:
  ```ts
  let flexible: unknown = 5;
  flexible = "Unknown";
  flexible = window.document;
  flexible = true;
  ```
It is the same with `any`, however, `unknown` is different from `any` in a very important way: 
  The key difference is that unknown enforces type checking and requires explicit type assertions or type checks before performing operations on values of type unknown. This promotes stronger type safety compared to any, which allows unrestricted operations without type checks.

```ts
let flexible: any = 5;
let value1: any = flexible.toFixed();  // No compile-time error
console.log(value1);  // Output: "5"

let value2: unknown = flexible.toFixed();  // Error: Object is of type 'unknown'.
console.log(value2);  // Error: Object is of type 'unknown'.

if (typeof value2 === "number") {
  let fixedValue: number = value2.toFixed();  // Type assertion or type check required
  console.log(fixedValue);  // Output: "5"
}

```
