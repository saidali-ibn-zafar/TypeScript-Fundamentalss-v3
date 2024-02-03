## Introduction to TypeScript
- - - - -
![photo_2023-07-02_17-40-33](https://github.com/saidali-ibn-zafar/saidali-ibn-zafar/assets/120341849/7caa6739-d1c7-4382-9dc4-6ef5eb95915d)
- - - - -
### What is TypeScript?
- TypeScript is a programming language which can be used as an alternative to JS, now it is actually known as a superset of the JS language meaning that it basically extends the language with new features and syntax so it do all the same things that JS can do but it also comes with extra features and a new syntax to boot as well, now browsers by default they do not understand typescript we then have to compile it down into JS in order for browsers to understand it...

- Alternative to JS (superset)
- Allows us to use strict types
- Support modern features (arrow functions, let, const)
- Extra features (generics, interfaces, tuples etc)


```
// TypeScript is a programming language developed by Microsoft. It is a statically-typed superset of JavaScript, which means that it adds optional static typing and other features to JavaScript. TypeScript is designed to improve the development experience and maintainability of large-scale JavaScript applications.
```

  - Compiles to readable JS.
  - Three parts: Language, Language Server and Compiler
  - Kind of like a fancy linter

- - - - - 
- TypeScript is `increasingly popular`.

![graph](https://github.com/saidali-ibn-zafar/saidali-ibn-zafar/assets/120341849/a66ea854-4002-47ec-97b2-2717a06806a5)

- - - - - 

## Why developers want types

1) `It allows you, as a code author, to leave more of your intent "on the page"`
  - this kind of intent is often missing from JS code. For example:
  ```js
  function add(a, b){
    return a + b;
  }
  ```
  is this meant to take `numbers` as args? `strings`? both?

  What if someone who interpreted `a` and `b` as numbers made this "backwards-compatible change?"

```js
function add(a, b, c = 0){
  return a + b + c; 
}
```

We are headed for trouble if we decided to pass strings in for `a` and `b` !
- - - - -

Types make the author's intent more clear

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(3,"4"); // so now we get an error - "Argument of type 'string' is not assignable to parameter of type 'number'". 

```
- - - - - 
 
2) `It has the potential to move some kinds of errors from runtime to compile time`

Examples: 
  - Values that are potentially absent (`null` or `undefined`)
  - Incomplete refactoring
  - Breakege around internal code contracts (e.g., an argument becomes required

- - - - - 

3) `It serves as the foundation for great code authoring experience`
   Example: in-editor autocomplete, as shown here:
   
   ![Annotation 2023-07-03 002008](https://github.com/saidali-ibn-zafar/saidali-ibn-zafar/assets/120341849/5a204210-73e0-49d8-884f-cc680186c660)
   
- - - - - 

## Anatomy of the project
Let's consider your `a very simple TypeScript project` that consists of only three files: 

![Annotation 2023-07-03 003528](https://github.com/saidali-ibn-zafar/saidali-ibn-zafar/assets/120341849/84c6eabe-17e4-4684-91d6-02d26a5c7f93)

- - - - - 

A good way to think of TS files: 
  - `.ts` files contain both type information and code that runs
  - `.js` files contain only code that runs
  - `.d.ts` files contain only type information

- - - - - 

[The official TypeScript website](https://www.typescriptlang.org/)

  

