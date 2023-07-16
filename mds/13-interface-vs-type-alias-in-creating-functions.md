Interface and Type aliases can describe functions: not just function properties but actually function descriptions of themselves:

```ts
// Using an interface
interface MyFunctionInterface {
  (param1: string, param2: number): boolean;
}

const myFunction1: MyFunctionInterface = (param1, param2) => {
  // Function implementation
  return true;
};

// - - - - - 

// Using a type alias
type MyFunctionType = (param1: string, param2: number) => boolean;

const myFunction2: MyFunctionType = (param1, param2) => {
  // Function implementation
  return true;
};
```

You can see some differences between using `interface` and `type alias` in syntax here.
