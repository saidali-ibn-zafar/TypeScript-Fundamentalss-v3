## Array Types in TypeScript

We usually read from left to right, so the things that are more important should come first. We say: "this is an array of strings", or "this is an array of strings or numbers".

```ts
Copyleft-to-right: copy code to clipboard
// ✅ reads nice from left to write
function add(items: Array<string>, newItem: string)

// ❌ looks very similar to just "string"
function add(items: string[], newItem: string)
```  


```ts
// ✅ prefer readonly so that you don't accidentally mutate items
function add(items: ReadonlyArray<string>, newItem: string)

// ❌ "readonly" and "Array" are now separated
function add(items: readonly string[], newItem: string)
```
