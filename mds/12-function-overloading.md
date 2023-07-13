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
