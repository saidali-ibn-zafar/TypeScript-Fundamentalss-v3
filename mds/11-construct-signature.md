## Construct Signature

- `Construct Signature` are similar to call signature, except they describe what should happen with the `new` keyword.

  ```ts
  interface DataConstructor {
    new (value: number): Date;
  }

  let MyDateConstructor: DateConstructor = Date;
  const d = new MyDateConstructor();
  ```

  JavaScript functions can also be invoked with the `new` operator. TypeScript refers to these as constructors because they usually create a new object. You can write a construct signature by adding the `new` keyword in front of a call signature:
