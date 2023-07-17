## null

```ts
const userInfo = {
  name: "Saidali",
  email: "myEmailAdress@gmail.com",
  secondaryEmail: null, // user has no secondary email
}
```

- - - - - 

## undefined

`undefined` means the value is not available(yet?)

```ts
const formInProgress = {
  createAt: new Date(),
  data: new FormData(),
  completedAt: undefined, // 
}
function submitForm() {
  formInProgress.completedAt = new Date()
}
```

- - - - - 

