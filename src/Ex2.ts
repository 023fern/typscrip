class Customer {
    private id: number;
    private name: string;
    private discount: number; // Discount in percent

    constructor(id: number, name: string, discount: number) {
    this.id = id;
    this.name = name;
    this.discount = discount;
}

    public getId(): number {
    return this.id;
}

    public getName(): string {
    return this.name;
}

    public getDiscount(): number {
    return this.discount;
}

    public setDiscount(discount: number): void {
    this.discount = discount;
}

    public toString(): string {
    return `${this.name}(${this.id})(${this.discount}%)`;
}
}

class Invoice {
    private id: number;
    private customer: Customer;
    private amount: number;

constructor(id: number, customer: Customer, amount: number) {
    this.id = id;
    this.customer = customer;
    this.amount = amount;
}

    public getId(): number {
    return this.id;
}

    public getCustomer(): Customer {
    return this.customer;
}

    public setCustomer(customer: Customer): void {
    this.customer = customer;
}

    public getAmount(): number {
    return this.amount;
}

    public setAmount(amount: number): void {
    this.amount = amount;
}

    public getCustomerId(): number {
    return this.customer.getId();
}

    public getCustomerName(): string {
    return this.customer.getName();
}

    public getCustomerDiscount(): number {
    return this.customer.getDiscount();
}

    public getAmountAfterDiscount(): number {
    return this.amount * (1 - this.customer.getDiscount() / 100);
}

    public toString(): string {
    return `Invoice[id=${this.id},customer=${this.customer.toString()},amount=${this.amount}]`;
}
}

export { Customer, Invoice };