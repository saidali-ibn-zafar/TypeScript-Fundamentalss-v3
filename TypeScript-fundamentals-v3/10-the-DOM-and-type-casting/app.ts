// Most of the things are like regular JS, right?

const anchor = document.querySelector("a")!;
// const anchor: HTMLAnchorElement

const form = document.querySelector("form")!;
// const form: HTMLFormElement

const h1 = document.querySelector(".h1Element") as HTMLHeadingElement;

// as you can see, with "as" we are changing the type from type Element to HTMLHeadingElement
