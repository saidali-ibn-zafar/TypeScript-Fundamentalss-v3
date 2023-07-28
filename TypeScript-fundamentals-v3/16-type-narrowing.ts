// Union type representing either a string or a number
type StringOrNumber = string | number;

// Type guard function to check if the input is a string
function isString(value: StringOrNumber): value is string {
  return typeof value === 'string';
}

// Usage of type narrowing
function processValue(value: StringOrNumber): void {
  if (isString(value)) {
    // Inside this block, 'value' is narrowed down to type 'string'
    console.log(`The length of the string: ${value.length}`);
  } else {
    // Inside this block, 'value' is narrowed down to type 'number'
    console.log(`The square of the number: ${value * value}`);
  }
}
