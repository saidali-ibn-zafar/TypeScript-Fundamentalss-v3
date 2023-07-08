// CLASSES
class Invoice {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const InvoiceOne = new Invoice("Saidali", "work on his website", 250);
const InvoiceTwo = new Invoice("Ali", "work on his website", 300);

console.log(InvoiceOne, InvoiceTwo);

let invoices: Invoice[] = [];
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);

console.log(invoices);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

// so we have public which is the default one
// then private which can be used inside the class
// and readonly which can be used inside and outside but only reading not changing value
