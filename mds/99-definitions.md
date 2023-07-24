- - - - - 
## What is TypeScript? 
- TypeScript is a programming language which can be used as an alternative to JS, now it is actually knows as a superset of the JS language meaning that it basically extends the language with `new features` and syntax so it do all the same things that JS can do but it also comes with `extra features` and a `new syntax` to boot as well, now browsers by `default` they do not understand typescript we then have to compile it down into JS in order for browsers to understand it...
   - Alternative to JS `(superset)`
   - Allows us to use `strict types`
   - Support `modern features` (arrow functions, let, const)
   - `Extra features` (generics, interfaces, tuples etc)

- - - - - 

## What are Optional Properties?
- Optional properties are properties that can hold a `value` or be `undefined`.
  TypeScript there are a few ways to declare an optional object property.
    - We can use a `union`,
    - or use the question mark `(?)` symbol after the property name.
 
- An optional property in TypeScript is a property that may or may not be present when creating an object of a particular type.
    - Optional properties are denoted by adding a question mark (?) after the property name in an interface or type declaration. For example: let name ?: type;

- - - - - 

## What is Type Checking?
- Type checking in TypeScript is the process of verifying the types of `variables`, `function parameters`, and `expressions` at `compile-time` to ensure that the code follows the expected type rules.

- - - - - 

## What are Static and Dynamic Type Systems?

- Static Type System:
  - Type checking is performed at `compile-time`
  - Requires `explicit type annotations` and `declarations`.
  - Types are checked `before` the code is executed.
  - Provides `compile-time safety` and catches type-related `errors before runtime`.
  - Examples of languages with `static` type systems include TypeScript, Java, C++, and C#.

- Dynamic Type System:
  - Type checking is performed `at` runtime.
  - Types are checked `during` program execution.
  - Type errors may occur `during` runtime.
  - Does `not` require explicit type annotations or declarations.
  - May have `looser type constraints` and allow `implicit type conversions`.
  - Examples of languages with `dynamic` type systems include JavaScript, Python, Ruby, and PHP.

- - - - - 

## What are Structural and Nominal Type Systems?
  - An object or class has a name and some structure
  - In `Nominal Type Systems`, two types are the same if they have the same names
  - In `Structural Type Systems`,  two types are the same if they have the same structure.

- - - - - 

## What is Union Type?
- Union types are used when a value can be `more` than a single type. And a union type is created using the `"or"` operator `(|)`. It allows a variable or parameter to hold values of multiple specified types.

- - - - - 

## What is Intersection Type? 
- Intersection types in TypeScript allow you to `combine multiple types` into a `single type`, resulting in a new type that includes all the properties and methods from the intersected types. The syntax for defining an intersection type is to use the `ampersand` `(&)` symbol between the types we want to intersect.
  
- - - - - 

## What is Type Aliases?
- In TypeScript, a `type alias` is a way to create a new name for an existing type. It allows you to define your own custom names for types, making your code more `readable` and `maintainable`.
   - In TypeScript, we can use the `type` keyword to create type aliases.
   - And after type keyword we give a name, so it is called, `TitleCase`.

Type aliases help to address this, by allowing us to:
- define `a more meaningful name` for this type
- declare the particulars of the type in `a single place`
- `import and export` this type from modules, the same as if it were an exported value

- - - - -

## What is Interfaces? 
- In TypeScript, an interface is used to create a custom type that defines the structure and shape of objects. It allows you to specify the properties and their types that an object should have, along with optional properties and methods.

- - - - - 

## What is Function Overloads?

- Function overloading is a feature of object-oriented programming where two or more functions can have the same name but different parameters. 

- - - - - 

## What are Top and Bottom Types?

- In TypeScript, there are two top types `unknown` and `any`, and `never` is the only bottom type. Most of us are very well aware of any type in TypeScript. It's the starting point of our migration from JavaScript to TypeScript codes. Just like all types are assignable to any, all types are also assignable to “unknown”.

- - - - - 

What is type `any` and `unknown`?

- Any is not safe, but console.log, it can print anything;
- Unknown is also the same with any, however, unknown is different from any in a very important way: The key difference is that unknown enforces type checking and requires explicit type assertions or type checks before performing operations on values of type unknown. This promotes stronger type safety compared to any, which allows unrestricted operations without type checks.

- - - - - 

