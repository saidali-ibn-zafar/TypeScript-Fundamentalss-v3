// Write a generic function that takes an array of any type and returns the last element of the array. The function should work with arrays of different data types.

function getLastElement<T>(arr: T[]): T | undefined {
  if (arr.length > 0) return arr[arr.length - 1];
  return undefined
}  

const numbers = [1, 2, 3, 4, 5];
const lastNumber = getLastElement(numbers); //  output: 5

const fruits = ["apple", "banana", "orange"];
const lastFruit = getLastElement(fruits); //  output: "orange"

// - - - - - 

// Write a generic function that takes two arrays of the same type and merges them into a single array.

function mergeArray<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const mergedNumbers = mergeArrays(numbers1, numbers2); //  output: [1, 2, 3, 4, 5, 6]

const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "grape"];
const mergedFruits = mergeArrays(fruits1, fruits2); //  output: ["apple", "banana", "orange", "grape"]

// - - - - - 
// Map:

// The map function takes an array of elements, transforms each element using a mapping function, and returns a new array containing the transformed elements.

function mapArray<T, U>(arr: T[], mappingFn: (item: T) => U): U[] {
  return arr.map(mappingFn);
}

// Example usage:
const numbers = [1, 2, 3, 4];
const squaredNumbers = mapArray(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]

// - - - - - 

// Filter:

// The filter function takes an array of elements, applies a filtering function to each element, and returns a new array containing only the elements that pass the filter condition.

function filterArray<T>(arr: T[], filterFn: (item: T) => boolean): T[] {
  return arr.filter(filterFn);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// - - - - - 

// Reduce:

// The reduce function takes an array of elements and accumulates them into a single value using a reducing function.

function reduceArray<T, U>(arr: T[], reducerFn: (accumulator: U, currentValue: T) => U, initialValue: U): U {
  return arr.reduce(reducerFn, initialValue);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const sum = reduceArray(numbers, (acc, num) => acc + num, 0);
console.log(sum); // Output: 15

