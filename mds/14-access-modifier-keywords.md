## Access modifier keywords

- TypeScript provides three access modifier keywords:
`public`, `private` and `protected`

TypeScript provides three `access modifier keywords`, which can be used with class fields and methods, to describe `who should be able to see and use them`.

`public` - everyone (this is the default)
`protected` - the instance itself, and subclasses
`private` - only the instance itself

- - - - - 

1) Public (default): Members marked as public are accessible from anywhere, both within the class and outside of it.
   ```ts
    class MyClass {
    public publicProperty: number = 10;

    public publicMethod(): void {
    console.log("This is a public method.");
    }
    }

   ```

2) Private: Members marked as private are only accessible within the class where they are defined. They cannot be accessed or modified from outside the class.
   ```ts
    class MyClass {
    private privateProperty: number = 10;

    private privateMethod(): void {
    console.log("This is a private method.");
    }
    }
   ```

3) Protected: Members marked as protected are accessible within the class where they are defined and within subclasses (derived classes) that extend the base class. They cannot be accessed from outside the class hierarchy.

   ```ts
    class MyBaseClass {
    protected protectedProperty: number = 10;

    protected protectedMethod(): void {
    console.log("This is a protected method.");
    }
    }

    class MyDerivedClass extends MyBaseClass {
    public accessProtected(): void {
    console.log(this.protectedProperty);
    this.protectedMethod();
    }
    }

   ```
   
