## What is `Optional Property` ?
- An `optional property` in TypeScript is a property that `may` or `may not` be present when creating an object of a particular type.

- Optional properties are denoted by adding a question mark (?) after the property name in an interface or type declaration.
  For example: let name `?`: type;

- - - - - 

```ts
interface Product {
  name: string;
  price?: number;
}

const product1: Product = {
  name: "Keyboard",
  price: 49.99,
};

const product2: Product = {
  name: "Mouse",
};

console.log(product1); // { name: 'Keyboard', price: 49.99 }
console.log(product2); // { name: 'Mouse' }

```

- - - - - 
