## What is `Intersection Types` ?
- `Intersection types` in TypeScript allow you to combine multiple types into a `single type`, resulting in a new type that includes all the properties and methods from the intersected types. The syntax for defining an intersection type is to use the ampersand `(&)` symbol between the types we want to intersect.
```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  department: string;
};

type EmployeePerson = Person & Employee;

```

```ts
const employee: EmployeePerson = {
  name: "John Doe",
  age: 30,
  id: 12345,
  department: "IT",
};
```

In this case, the employee object satisfies the EmployeePerson type because it includes all the required properties from both Person and Employee.

- - - - - 
