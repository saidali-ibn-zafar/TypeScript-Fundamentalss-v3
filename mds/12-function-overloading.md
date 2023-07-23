## Function Overloading 
- TypeScript provides the concept of function overloading. You can have multiple functions with the same name but different parameter types and return type. However, the number of parameters should be the same.

  ```ts
  function add(a:string, b:string):string;

  function add(a:number, b:number): number;

  function add(a: any, b:any): any {
      return a + b;
  }

  add("Hello ", "Steve"); // returns "Hello Steve" 
  add(10, 20); // returns 30 
  ```

  - - - - -

- Function overloading with different number of parameters and types with same name is not supported.

  ```ts
  function display(a:string, b:string):void //Compiler Error: Duplicate function implementation
  {
      console.log(a + b);
  }

  function display(a:number): void //Compiler Error: Duplicate function implementation
  {
      console.log(a);
  }
  ```

  - - - - -

Here is better example for function overloads to understand better: 

  ```ts
  function greet(name: string): string;
  function greet(age: number): string;
  function greet(input: string | number): string {
    if (typeof input === "string") {
      return `Hello, ${input}!`;
    } else {
      return `You are ${input} years old.`;
    }
  }
  
  const message1 = greet("Alice"); // Output: "Hello, Alice!"
  const message2 = greet(30); // Output: "You are 30 years old."

  ```
