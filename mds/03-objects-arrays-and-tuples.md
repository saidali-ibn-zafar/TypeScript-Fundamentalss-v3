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

In progress...



