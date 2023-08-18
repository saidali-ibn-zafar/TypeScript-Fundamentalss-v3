## Function Type Void

```ts
function printString(str) {
  console.log(str);
}
console.log(printString("Hello World"));

//result:
//Hello World
//undefined
```

We have defined a function printString(str) that takes one argument str.

Inside the function body, there is a console.log(str); statement. So, when we call printString("Hello World") in the console.log() statement, it will execute the function and print "Hello World" to the console.

The console.log(printString("Hello World")); line is equivalent to calling printString("Hello World") (which logs "Hello World" to the console) and then passing the result of that call (which is undefined, since the function doesn't have an explicit return statement) to the outer console.log().

This is why we see "Hello World" followed by "undefined" in the output. The first line logs the string passed to the function, and the second line logs the return value of the function call, which is undefined.




