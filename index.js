// interface Rectangle {
//   height: number,
//   width: number
// };
;
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.getArea = function () {
        var area = this.height * this.width;
        // console.log(`The area of the square is ${area}`);
        return area;
    };
    return Square;
}());
var square = new Square();
square.height = 10;
square.width = 20;
square.getArea();
var rectangleElement = document.getElementById("rectangle");
if (rectangleElement) {
    rectangleElement.innerHTML = "The area of the square is ".concat(square.getArea());
}
// ----------------------- Example 2 ---------------------------
var gPerson = /** @class */ (function () {
    function gPerson(name, age) {
        this.name = name;
        this.age = age;
    }
    gPerson.prototype.greeting = function () {
        // console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        // return `${this.name} ${this.age}`;
    };
    return gPerson;
}());
var getPerson = new gPerson("John Doe", 30);
getPerson.greeting(); // Output: Hello, my name is John Doe and I am 30 years old.
var getPersonE = document.getElementById("getPersonE");
if (getPersonE) {
    getPersonE.innerHTML = "Hello, my name is ".concat(getPerson.name, " and I am ").concat(getPerson.age, " years old.");
}
;
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Customer;
}());
var customer = new Customer();
customer.firstName = "John";
customer.lastName = "Doe";
customer.getFullName();
// console.log('customer.getFullName', customer.getFullName());
var getCustomer = document.getElementById("getCustomer");
if (getCustomer) {
    getCustomer.innerHTML = "Hello, my fullName is ".concat(customer.getFullName());
}
//data types example of Typescript
var num1 = 123;
console.log(num1); // 123
var jname = "John Doe";
console.log(jname); // John Doe
var add;
add = function (a, b) {
    return a + b;
};
console.log("addfn: ", add(1, 2)); // 3
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        console.log("The engine is running.");
    };
    return Car;
}());
var car = new Car("Toyota", "Camry", 2020);
console.log(car);
// Output: Car { make: 'Toyota', model: 'Camry', year: 2020 }
car.startEngine();
// Output: The engine is running.
//
// import { Component } from "@angular/core";
// @Component({
//   selector: "app-customer-details",
//   template: `
//     <h2>{{ customer.fullName }}</h2>
//     <p>Email: {{ customer.email }}</p>
//   `
// })
// export class CustomerDetailsComponent {
//   customer: Customer;
//   constructor(private customerService: CustomerService) {}
//   ngOnInit() {
//     this.customer = this.customerService.getSelectedCustomer();
//   }
// }
// interface Customer {
//   firstName: string;
//   lastName: string;
//   email: string;
// }
// @Injectable({
//   providedIn: "root"
// })
// export class CustomerService {
//   selectedCustomer: Customer;
//   getSelectedCustomer(): Customer {
//     return this.selectedCustomer;
//   }
//   setSelectedCustomer(customer: Customer) {
//     this.selectedCustomer = customer;
//   }
// }
// npm install -g typescript
// Run the command: tsc index.ts
// This will compile the TypeScript file index.ts into a JavaScript file with the same name (index.js) in the same directory. You can then include this JavaScript file in your HTML page to run your TypeScript code in the browser.
