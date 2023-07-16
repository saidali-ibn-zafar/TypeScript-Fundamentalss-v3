
## Readonly

- The readonly modifier is used in TypeScript to indicate that a property or array element can only be read and cannot be modified once it is assigned a value. It is a way to enforce immutability for certain members.

```ts
class Point {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(dx: number, dy: number): void {
    // Error: Cannot assign to 'x' because it is a read-only property.
    this.x = this.x + dx;
    // Error: Cannot assign to 'y' because it is a read-only property.
    this.y = this.y + dy;
  }
}

const point = new Point(0, 0);
console.log(point.x, point.y);  // Output: 0 0

point.x = 10;  // Error: Cannot assign to 'x' because it is a read-only property.
point.y = 20;  // Error: Cannot assign to 'y' because it is a read-only property.

```

In this example, the readOnlyProperty is declared as a readonly property, meaning its value cannot be changed after it is assigned. Similarly, the readOnlyArray is a readonly array, which prevents modifying its elements.

If you try to assign a new value to a readonly property or modify an element of a readonly array, TypeScript will generate a compilation error to prevent the modification.

The readonly modifier helps enforce immutability and ensures that certain members remain constant after they are initialized.

It's important to note that the immutability enforced by readonly is only at compile-time, providing static type checking. It does not prevent modifications at runtime through means like type assertions or direct access to the object.
