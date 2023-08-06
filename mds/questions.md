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

15) Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with default values:
    ```ts
    enum myEnum {
      myFirstConst, 
      mySecondConst
    }
    ```

- - - - - 

16) Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with the string values "first" and "second":
   ```ts
   enum myEnum {
      myFirstConst = "first",
      mySecondConst = "second"
   }
   ```

- - - - - 

17) Create a Type Alias for a string, called carType:
    ```ts
      type carType = string;
    ```
- - - - - 

18) Create an interface called myInterface, with the property myProp as a string:
   ```ts
   interface myInterface {
      myProp: string;   
   }
   ```

- - - - - 

19) Extend the myInterface interface from last exercise, and add a property myExtProp as a number:
    ```ts
      interface myExtInterface extends myInterface {
         myExtProp: number;
       }
    ```
    
- - - - - 

20) Specify that the paramater "myVar" for the function can be either string or number:
   ```ts
   function myFunc(myVar: string | number) {
      console.log(myVar);
   }
   ```

- - - - - 

21) Specify that the paramater "myVar" for the function can be either string or number:
   ```ts
   function myFunc(myVar: string | number){
      console.log(myVar);
   }
   ```

- - - - - 

22) Create a function that returns the string "Learning is Fun!", with the return type explicitly defined:
    ```ts
      function myFunc(): string {
         return "Learning is Fun!";      
    }
    ```

- - - - - 

23) Create a function that specifically does not return a value:
    ```ts
      function myFunc() void {
         console.log("Learning is Fun!");
    }
    ```

24) Create a function with 2 parameters (myVar1 and myVar2), that are both strings:
   ```ts
   function myFunc(myVar1: string, myVar2: string){
      return (myVar1 + myVar2);
   }
   ```

- - - - - 

25) Create a function with 2 parameters (myVar1 and myVar2), that are both strings:
    Specify that myVar2 should be optional:
   ```ts
   function myFunc(myVar1: string, myVar2?: string){
      return (myVar1 + (myVar2 || ""));
   }
   ```

26) Cast the "unknown" variable myVar as a string, using the as keyword:
    ```ts
      let myVar: unknown = "Hello world!";
       console.log((myVar as string).length);
    ```

    By the way, we have alternative way which is using `<>`, that is to say, instead of using `myVar as string`, we can use `<string>myVar`

- - - - - 

27) Cast the "unknown" variable myVar as a string, using < >:
    ```ts
    let myVar: unknown = "Hello world!";
    console.log((<string>myVar).length);
    ```

- - - - - 

28) Specify that Person.name can only be accessed within the class, but that the method Person.getName() can be accessed anywhere:
    ```ts
      class Person {
        private name: string;
      
        public constructor(name: string) {
          this.name = name;
        }
      
        public getName(): string {
          return this.name;
        }
      }

    ```

- - - - - 

29) Complete the Generic:
   ```ts
   function createPair<typeX, typeY>(x: typeX, y: typeY): [typeX, typeY] {
    return [x, y];
   }
   console.log(createPair<string, number>('Meaning', 42));
   ```

- - - - - 

30) Declare an object kindPerson from the Person interface, where all the properties are optional:
    ```ts
     interface Person {
    age: number;
    firstName: string;
    lastName: string;
      }
                  
      let kindPerson: Partial<Person> = {}; 
    ```

- - - - - 

31) Declare an object kindPerson from the Person interface, where all the properties are required.
    ```ts
      interface Person {
    age: number;
    firstName: string;
    lastName?: string;
      }
                  
      let kindPerson: Required<Person> = {
          age: 1800,
          firstName: "Santa",
          lastName: "Claus"
      };
    ```

- - - - - 

32) Complete the sentence:
    ```ts
      Record<string, number> is equivalent to { [key: string]: number }
    ```

- - - - - 

Thanks for your attention, I hope you also found it useful :)
