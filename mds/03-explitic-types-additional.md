## Arrays
We have 
  ```ts
  let names: string[];
  ```
  it means type of `names` is string array, and it is OK so far, but in this case we cannot use `push()` to insert an element, to do that we need to write `let names: string[] = [], otherwise we get an Error.

  ```ts
  let names: string[] = [];

  names.push("Ali");   // ✔️
  names.push("Imran"); // ✔️
  names.push("Ahmed"); // ✔️
  
  ```

- - - - - 

## Union Types
  using `(and here some types)`, use () with array like below: 
  ```ts
  let mixed: (string | number)[] = [];
  mixed.push("As-salamu alaikum"); // ✔️
  mixed.push(20); // ✔️
  mixed.push(true); // ❌ in this case, we get an error - Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

  ```

  no need to use () if it is just a variable:
  ```ts
  // let uid: (string | number); // ❌
  let uid: string | number; // ✔️ no need (), only need when we are working with array like above;
  uid = "123";
  uid = 123;
  ```

  - - - - - 
  ## Objects
  
  This is how we explicitly type our variables before to give them values
  ```ts
  let people: {
  name: string;
  age: number;
  beltColor: string;
  };
  ```

