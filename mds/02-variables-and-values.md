## Variables and Values

In JavaScript we declare variables all the time with `let` and `const` like this: 
```js
let age = 7; // let age: number;
```
As we can see, TypeScript is able to infer that `age` is a number, because we have initialized it with a value of 7 (number)

If we try to give `age` a value that is <i>incompatible</i> with `number`, we get an error.
  
  ```ts
  let age = 6;
  age = "not a number"; // ERROR: 
  ```
- We got an error in the code above: "Type `string` is not assignable to type `number`".
 
Moreover, in TypeScript, variables are `"born"` with their types. 

- - - - - 

## Const

Let's try with `const`:
```ts
const age = 6; // const age: 6
```
In this case type of `age` is not `number` it is `6`. TypeScript is able to make a more specific assumption here, because:
  - We cannot reassign `const` variable declaration
  - the initial value assigned to `age` is a number, which is an `immutable value type`
To sum up, value of `age` is `6` and will always be `6` in this program.

- - - - - 

## Literal Types

The `6` is called `literal type`. 

Take a look at this below: 
```ts
let age: 6;
age = 6; // Valid
age = 10; // Invalid - only the literal value 6 is allowed
```

In this example above, the variable `age` is declared with a type of `6`. This means that age can only be assigned the `literal value 6` and no other values are allowed. If you try to assign any other value, TypeScript will raise an error.

- - - - - 
## Btw
It means that when we are using `let` we can reassign a variable only what type it is!

```ts
let age = 10;
age = 11;
age = 12;
age = 13;
```
As we can see, we are reassigning age with `only` type `number`

- - - - - 

## Implicit `any` and type annotation

`Any` - In TypeScript, the any type is a special type that represents a dynamic or untyped value. Variables of type any can hold values of any type, and TypeScript does not perform type-checking or provide type inference for any-typed variables.

```ts
let message;

message = "Hello"; // Valid - assigned a string
message = 42; // Valid - assigned a number
message = true; // Valid - assigned a boolean

// You can perform any operation on a variable of type `any`
console.log(message.foo()); // No type checking error, even if `foo` doesn't exist

// Variables with inferred `any` type can be used in type-incompatible ways
let length: number = message; // No type error, even though `message` can hold any type

```

- - - - - 

## Function arguments and return values

```ts
function add(a, b) {
  return a + b; // strings? numbers? a mix?
}

```

Here what our in-editor tooltip would look like if we were using this function: 

```ts
const result = add(3, "4")
                    // function add(a: any, b: any): any

console.log(result) // const result: any  
```

- - - - - 

## Addition

```ts
function add(a: number, b: number) {
  return a + b; 
}

const result = add(3, "4")
```

ERROR: Argument of type `"string"` is not assignable to parameter of type `"number"`
