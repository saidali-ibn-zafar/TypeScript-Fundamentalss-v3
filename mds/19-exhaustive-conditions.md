
## Exhaustive Conditions

```ts
type Shape = Square | Circle;

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case 'square':
      return shape.sideLength ** 2;
    case 'circle':
      return Math.PI * shape.radius ** 2;
    default:
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
  }
}
```
