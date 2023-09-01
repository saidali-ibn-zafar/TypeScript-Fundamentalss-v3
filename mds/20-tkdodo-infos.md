## Array Types in TypeScript

We usually read from left to right, so the things that are more important should come first. We say: "this is an array of strings", or "this is an array of strings or numbers".

```ts
Copyleft-to-right: copy code to clipboard
// ✅ reads nice from left to write
function add(items: Array<string>, newItem: string)

// ❌ looks very similar to just "string"
function add(items: string[], newItem: string)
```  

- - - - - 

Let's face it - most arrays that we take as input to our functions should be readonly to avoid accidental mutation. I'm also touching that topic in a separate article. If you use the generic notation, you can just replace Array with ReadonlyArray and move on. If you use the array notation, you have to split it up into two parts:

```ts
// ✅ prefer readonly so that you don't accidentally mutate items
function add(items: ReadonlyArray<string>, newItem: string)

// ❌ "readonly" and "Array" are now separated
function add(items: readonly string[], newItem: string)
```

- - - - - 

What happens if we widen our add function to also accept numbers - so we'd want an Array of strings or numbers. Not a problem with the generic notation:

```ts
// ✅ works exactly the same as before
function add(items: Array<string | number>, newItem: string | number)
```

```ts
// ❌ looks okay, but isn't
function add(items: string | number[], newItem: string | number)
```
