## Call Signatures

In TypeScript we can express its type as: `( a : number , b : number ) => number`. This is TypeScript's syntax for a `function's type`, or `call signature` (also called `a type signature`). You'll notice it looks remarkably similar to an arrow function—this is intentional!

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
 
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";
 
doSomething(myFunc);
```
