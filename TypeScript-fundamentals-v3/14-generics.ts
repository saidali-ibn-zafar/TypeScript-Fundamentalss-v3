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
