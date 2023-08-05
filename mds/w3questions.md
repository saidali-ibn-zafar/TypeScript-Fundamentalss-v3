- - - - - 

1) TypeScript allows developers to add `types` to JavaScript.

- - - - - 

2) JavaScript is a loosely typed language.

- - - - - 

3) The TypeScript compiler can be configured with which file?
   - tsconfig.json

- - - - - 

5) There are two main ways TypeScript assigns a type:
   - implicit
   - explicit

- - - - - 

6) Create a "firstName" variable, string type using Implicit type:
   ```ts
    let firstName = "Dylan";
   ```

- - - - - 

7) Create a "firstName" variable, string type using Explicit type:
   ```ts
    let firstName = "Dylan";
   ```

- - - - - 

8) Create an empty "myVar" variable, and disable type checking:
   ```ts
    let myVar: any;
   ```

- - - - - 

9) Create an empty "myVar" variable, and specify it should be an unknown type:
    ```ts
     let myVar: unknown; 
    ```

- - - - - 

10) Prevent the array from being changed:
    ```ts
    const names: readonly string[] = ["Dylan"];
    ```

- - - - - 

11) The order of value types does not matter for Tuples:
    - False! order of value does matter

- - - - - 

12) Define ourTuple as string and boolean, in that order:
    ```ts
    let ourTuple: [string, boolean];
    ```
- - - - - 

13) Add the correct types for the object below:
    ```ts
    const car: {type: `string`, model: `string`, year: `number`} = {
      type: "Toyota",
      model: "Corolla",
      year: 2009
    }
    ```

- - - - - 

14) Specify that the second property, called model, should be optional:
    ```ts
    const car: {type: string, `model?:` string} = {
      type: "Toyota"  
    }
    
- - - - - 



- - - - - 

- - - - - 

- - - - - 



