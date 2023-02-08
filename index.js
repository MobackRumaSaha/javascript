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
// npm install -g typescript
// Run the command: tsc index.ts
// This will compile the TypeScript file index.ts into a JavaScript file with the same name (index.js) in the same directory. You can then include this JavaScript file in your HTML page to run your TypeScript code in the browser.
