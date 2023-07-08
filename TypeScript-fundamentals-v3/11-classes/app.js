// CLASSES
var Invoice = /** @class */ (function () {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var InvoiceOne = new Invoice("Saidali", "work on his website", 250);
var InvoiceTwo = new Invoice("Ali", "work on his website", 300);
console.log(InvoiceOne, InvoiceTwo);
var invoices = [];
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);
console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
// so we have public which is the default one
// then private which can be used inside the class
// and readonly which can be used inside and outside but only reading not changing value
