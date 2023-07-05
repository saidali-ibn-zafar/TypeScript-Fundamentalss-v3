- - - - - 
![image_2023-07-04_12-31-26](https://github.com/saidali-ibn-zafar/saidali-ibn-zafar/assets/120341849/211cdf46-478c-4170-bf0e-67f48e652ab7)
- - - - -

## Objects
We all know that `object` types are defined by: 
  - The `names` of the properties,
  - The `type` of those properties.

For instance, if we had the concept of `Iphone` like "White Iphone 11" with properties: 
  - `make`: the manufacturer (in this case, “Toyota”)
  - `model`: the particular product (in this case, “Corolla”)
  - `year`:the “model year” of the product (in this case, 2002)

We could createa JavaScript object to represent this information:
```js
{
  make: "Toyota",
  model: "Corolla",
  year: 2002
}
```

The type that would describes this object's structure: 
```ts
{
  make: string
  model: string
  year: number
}
```

As we can see, we are doing the same thing. `property name` : (colon) and then `type`
That is to say, we are creating something which looks a lot like JS object syntax, just instead of `key value`, we have `key type`.

- - - - -

```ts
let car: {
  make: string
  model: string
  year: number
}

```

The code above provided declares a variable named `car` with an object type in TypeScript. The object type specifies that the `car` variable must have properties `make`, `model`, and `year`, each with a specific type.

- - - - - 

We could create a function to print values of this type to the console: 

```ts
function printCar(car: {
  make: string
  model: string
  year: number
}) {
  console.log(`${car.make} ${car.model} (${car.year})`)
}
```

Notice that we can use this exact same kind of type annotation for function arguments.

- - - - - 

## Optional Properties

- Let's consider an updated example where we add a fourth property to the car object type, which is only present sometimes:

  | Property Name   | Is present  | Type   | Note                                   |
  |-----------------|-------------|--------|----------------------------------------|
  | make            | Always      | string |                                        |
  | model           | Always      | string |                                        |
  | year            | Always      | number |                                        |
  | chargeVoltage   | Sometimes   | number | Not present unless car is electric     |


We can state that this property is optional using the ? operator:

```ts
function printCar(car: {
  make: string
  model: string
  year: number
  chargeVoltage?: number
}) {
  let str = `${car.make} ${car.model} (${car.year})`
  car.chargeVoltage
           
(property) chargeVoltage?: number | undefined
  if (typeof car.chargeVoltage !== "undefined")
    str += `// ${car.chargeVoltage}v`
                          
(property) chargeVoltage?: number
  console.log(str)
}
```

This will allow our printCar function to work, regardless of whether the chargeVoltage property is present or not:

```ts
// Works
printCar({
  make: "Honda",
  model: "Accord",
  year: 2017,
})
// Also works
printCar({
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  chargeVoltage: 220,
})
```
- - - - - 

## Excess property checking 
TypeScript helps us catch a particular type of problem around the use of object literals. Let's look at the situation where the error arises:

```ts
function printPerson(person: Person) {
  console.log(person.name);
  console.log(person.age);
}

printPerson({
  name: "John",
  age: 30,
  height: 180, // Extra property
});
```

Here, if we pass an object with an extra property like height, TypeScript will produce an error to inform you about the invalid property.

We need to do these 3 ways below to fix it:

  1) Remove the `height` property from the object
  2) Add a `height: number` to the function argument type
  3) Create a variable to hold this value, and then pass the variable into the `printPerson` function

- - - - - 

## Array Types

- Array Type Annotation:
  The syntax for array type annotations is `type[]` or `Array<type>`, where `type` represents the desired element type.

```ts
let numbers: number[]; // Array of numbers
let names: string[]; // Array of strings

let scores: Array<number>; // Another way to define an array of numbers
let fruits: Array<string>; // Another way to define an array of strings

```

- Array Literal Syntax:
  We can initialize an array with values using array literals, which are comma-separated values enclosed in square brackets.

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Ali", "Zubary", "Ilyas"];

let scores: Array<number> = [90, 85, 95, 80];
let fruits: Array<string> = ["apple", "banana", "orange"];

```

- Accessing Array Elements:
  We can access individual elements in an array using square bracket notation with the index of the element (0-based index).

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1

let names: string[] = ["John", "Jane", "Alice"];
console.log(names[2]); // Output: Alice

```

- Array Methods:

  TypeScript provides various built-in methods for working with arrays. Here are a few examples:

```ts
let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6); // Add an element to the end of the array
numbers.pop(); // Remove the last element from the array

numbers.length; // Get the length of the array

numbers.forEach((num) => {
  console.log(num); // Iterate over each element in the array
});

numbers.map((num) => num * 2); // Create a new array by applying a transformation to each element

numbers.filter((num) => num > 3); // Create a new array with elements that satisfy a condition

```

- Remember that TypeScript can perform type checking on arrays, ensuring that you only use compatible types when working with array elements.

- - - - - 

## Tuples

- Tuple Type Annotation:
  We can define a tuple type annotation by specifying the types of each element in the tuple within square brackets [], separated by commas.

```ts
let person: [string, number, boolean];

```

- Tuple Literal Syntax:
  We can initialize a tuple with values using a tuple literal, where the values are provided in the same order as the element types specified in the tuple type annotation.

```ts
let person: [string, number, boolean] = ["John", 30, true];

```

The above code initializes the person tuple with three values: "John" (string), 30 (number), and true (boolean), in the specified order.

![Annotation 2023-07-05 105714](https://github.com/saidali-ibn-zafar/TypeScript-Fundamentals-v3/assets/120341849/a508e30a-560c-4d54-9c72-c78462893cf5)


- Accessing Tuple Elements:
    We can access individual elements in a tuple using square bracket notation with the corresponding index (0-based index).

```ts
let person: [string, number, boolean] = ["John", 30, true];
console.log(person[0]); // Output: "John"
console.log(person[1]); // Output: 30
console.log(person[2]); // Output: true

```

- Array Destructuring with Tuples:
  We can use array destructuring to extract individual elements from a tuple and assign them to separate variables.

```ts
let person: [string, number, boolean] = ["John", 30, true];
let [name, age, isEmployed] = person;

console.log(name); // Output: "John"
console.log(age); // Output: 30
console.log(isEmployed); // Output: true

```

Tuples in TypeScript provide a way to define and work with arrays that have a fixed number of elements with different types. They can be useful when you need to represent a specific structure or pattern in your data.

## Errors
- Here is some error that we can encounter them: 
```ts
// 1. Accessing elements with invalid indices:
let person: [string, number] = ["John", 30];
console.log(person[2]); // Error: Tuple type '[string, number]' of length '2' has no element at index '2'.
console.log(person[1].toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number'.

// 2. Assigning incorrect values to tuple elements:
let person: [string, number] = ["John", "30"]; // Error: Type 'string' is not assignable to type 'number'.

// 3. Modifying tuple length:
let person: [string, number] = ["John", 30];
person.push(true); // Error: Property 'push' does not exist on type '[string, number]'.
person = ["John", 30, true]; // Error: Type '[string, number, boolean]' is not assignable to type '[string, number]'.

```

- - - - - 

## Limitations 
As As of TypeScript 4.3, there’s limited support for enforcing tuple length constraints. 

For example, we get the support we’d hope for on assignment:

![Annotation 2023-07-05 110108](https://github.com/saidali-ibn-zafar/TypeScript-Fundamentals-v3/assets/120341849/775c31b2-419f-4ffb-99f9-19575d173e7f)
