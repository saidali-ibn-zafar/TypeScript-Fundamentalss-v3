## Function Type Expressions

The simplest way to describe a function is with <i>function type expression</i>. These types are syntatically similar to arrow function: 

```ts
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);
```

The syntax `(a: string) => void` means "a function with one parameter, named `a`, of type `string`, that does not have a return value". Just like with function declaration, if a parameter type is not specified, it is implicitly `any`.

Of course, we can use a `type alias` to name a function type: 

```ts
type GreetFunction = (a: string) => void;
function greeter(fn: GreeterFunction) {
  // ...
}
```

[Click for more](https://github.com/saidali-ibn-zafar/TypeScript-Fundamentals-v3/blob/main/TypeScript-fundamentals-v3/13-more-about-functions.ts)
