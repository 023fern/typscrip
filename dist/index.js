"use strict";
// const { Author, Book } = require("./Ex1")
// const authors = [
//     new Author("Bantita", "Test1@gmail.com"),
//     new Author("Apisara", "Test2@gmail.com")
// ]
// const book = new Book("book1", authors, 85)
//  book.setPrice(75) //test
//  book.setQty(1) //test
// console.log(book.toString());
const { Customer, Invoice } = require("./Ex2");
const customer = new Customer(1, "Bantita", 20);
const invoice = new Invoice(1, customer, 100);
console.log(customer.toString());
console.log(invoice.toString());
console.log(invoice.getAmountAfterDiscount());
// const { Person, Student, Staff } = require("./Ex3")
// const person = new Person("Bantita","Nakhon Pathom")
// const student = new Student(person.getName(),person.getAddress(),"SoftWare Engineering",19,11400)
// const staff = new Staff(person.getName(),person.getAddress(),"NPRU",24000)
// console.log(student.toString());
// console.log(staff.toString());
// const { Shape, Circle, Rectangle, Square } = require("./Ex4")
// const shape = new Shape()
// const circle = new Circle(17)
// const rectangle = new Rectangle(17, 27)
// const square = new Square(17)
// console.log(circle.getArea().toFixed(2));
// console.log(circle.getPerimeter().toFixed(2));
// console.log(rectangle.getArea().toFixed(2));
// console.log(rectangle.getPerimeter().toFixed(2));
// console.log(square.getArea().toFixed(2));
// console.log(square.getPerimeter().toFixed(2));
// const {Customer,Visit,DiscountRate} = require("./Ex5")
// const customer = new Customer("Bantita")
// customer.setMember(true);
// customer.setMemberType("gold");
// const visit = new Visit(customer.getName());
// visit.setServiceExpense(700);
// visit.setProductExpense(17);
// const discountRate = new DiscountRate();
// const serviceDiscount = discountRate.getServiceDiscountRate(customer.getMemberType()) * visit.getServiceExpense();
// const productDiscount = discountRate.getProductDiscountRate(customer.getMemberType()) * visit.getProductExpense();
// const totalExpenseAfterDiscount = visit.getTotalExpense() - serviceDiscount - productDiscount;
// console.log(visit.toString());
// console.log("Service Discount:", serviceDiscount);
// console.log("Product Discount:", productDiscount);
// console.log("Total Expense After Discount:", totalExpenseAfterDiscount);
