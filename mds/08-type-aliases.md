## What is `Type Aliases` ?
- In TypeScript, a `type alias` is a way to create a new name for an existing type. It allows you to define your own custom names for types, making your code more `readable` and `maintainable`.

```ts
// Type alias for a string or number
type myType = string | number;

// Usage of type aliases
const myName: myType = "Saidali";

```

- In TypeScript, we can use the `type` keyword to create type aliases.
- And after type keyword we give a name, so it is called, `TitleCase`.


- - - - - 

Type aliases help to address this, by allowing us to:
- define `a more meaningful name` for this type
- declare the particulars of the type in `a single place`
- `import and export` this type from modules, the same as if it were an exported value

```ts
///////////////////////////////////////////////////////////
// @filename: types.ts
export type UserContactInfo = {
  name: string
  email: string
}
///////////////////////////////////////////////////////////
// @filename: utilities.ts
import { UserContactInfo } from "./types"
               
(alias) type UserContactInfo = {
    name: string;
    email: string;
}
import UserContactInfo
function printContactInfo(info: UserContactInfo) {
  console.log(info)
               
(parameter) info: UserContactInfo
  console.log(info.email)
                    
(property) email: string
}
```

[Click for more](https://github.com/saidali-ibn-zafar/TypeScript-Fundamentals-v3/blob/main/TypeScript-fundamentals-v3/08-type-aliases/app.ts)
