## Generics

Generics in TypeScript are a powerful feature that allows you to create reusable and type-safe components and functions. Generics enable you to define placeholders for types, which can be used to create flexible and generic code.

```ts
// Simple generic function
function identity<T>(arg: T): T {
  return arg;
}

// Using the generic function
let result = identity<string>("Hello");
console.log(result); // Output: Hello

// Alternatively, TypeScript can infer the generic type
let inferredResult = identity("World");
console.log(inferredResult); // Output: World

```

- - - - - 

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```

We’ve now added a type variable `Type` to the identity function. This `Type` allows us to capture the type the user provides (e.g. `number`), so that we can use that information later. Here, we use `Type` again as the return type. On inspection, we can now see the same type is used for the argument and the return type. This allows us to traffic that type information in one side of the function and out the other.

Once we’ve written the generic identity function, we can call it in one of two ways. The first way is to pass all of the arguments, including the type argument, to the function:

```ts
let output = identity<string>("myString");
```

Here we explicitly set `Type` to be string as one of the arguments to the function call, denoted using the `<>` around the arguments rather than `()`.

The second way is also perhaps the most common. Here we use `type argument inference` — that is, we want the compiler to set the value of `Type` for us automatically based on the type of the argument we pass in:  

```ts
let output = identity("myString");
```

Notice that we didn’t have to explicitly pass the type in the angle brackets (`<>`); the compiler just looked at the value `"myString"`, and set Type to its type. While type argument inference can be a helpful tool to keep code shorter and more readable, you may need to explicitly pass in the type arguments as we did in the previous example when the compiler fails to infer the type, as may happen in more complex examples.
