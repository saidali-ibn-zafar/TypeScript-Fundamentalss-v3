// Interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Saidali",
  age: 19,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spend ${amount}`);
    return amount;
  },
};

console.log(me);

const greetPerson = (person: IsPerson) => {
  console.log("Hello, ", person.name);
};

greetPerson(me);
