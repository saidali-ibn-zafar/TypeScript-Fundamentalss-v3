## Private fields

In TypeScript, the # symbol is used to denote private fields, which were introduced in TypeScript 3.8. Private fields are members of a class that can only be accessed within the class itself.

```ts
class MyClass {
  #privateField: number = 10;

  #privateMethod(): void {
    console.log("This is a private method.");
  }

  public accessPrivateField(): void {
    console.log(this.#privateField);
  }

  public accessPrivateMethod(): void {
    this.#privateMethod();
  }
}

const myObject = new MyClass();
myObject.accessPrivateField();    // Output: 10
myObject.accessPrivateMethod();   // Output: This is a private method.

console.log(myObject.#privateField);   // Error: Private property '#privateField' is not accessible outside of class 'MyClass'.
console.log(myObject.#privateMethod);  // Error: Private method '#privateMethod' is not accessible outside of class 'MyClass'.

```

So, instead of writing private before each member, we can use the `#` symbol to declare them as private directly in the class body.
