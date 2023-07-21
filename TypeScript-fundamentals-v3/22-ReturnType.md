```ts
type MyFunction = () => string;

// Extract the return type of the function
type MyReturnType = ReturnType<MyFunction>; // This will be equivalent to `string`
```
