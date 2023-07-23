type MyFunction = () => string;

// Extract the return type of the function
type MyReturnType = ReturnType<MyFunction>; // This will be equivalent to `string`

// - - - - - 

function add(a: number, b: number): number {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>; // This will be equivalent to `number`
