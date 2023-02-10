// interface Rectangle {
//   height: number,
//   width: number
// };

// const rectangle: Rectangle = {
//   height: 20,
//   width: 10
// };

// const rectangleElement = document.getElementById("rectangle");
// if (rectangleElement) {
//   rectangleElement.innerHTML = `The rectangle has a height of ${rectangle.height} and a width of ${rectangle.width}.`;
// }


interface Rectangle {
  height: number,
  width: number,
  getArea: () => number
};

class Square implements Rectangle {
  height: number;
  width: number;
  getArea(): number {
    const area = this.height * this.width;
    // console.log(`The area of the square is ${area}`);
    return area;
  }
}

const square = new Square();
square.height = 10;
square.width = 20;

square.getArea();

const rectangleElement = document.getElementById("rectangle");
if (rectangleElement) {
  rectangleElement.innerHTML = `The area of the square is ${square.getArea()}`;
}

// ----------------------- Example 2 ---------------------------
class gPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  greeting() {
     // console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      // return `${this.name} ${this.age}`;
  }
}

const getPerson = new gPerson("John Doe", 30);
getPerson.greeting(); // Output: Hello, my name is John Doe and I am 30 years old.

const getPersonE = document.getElementById("getPersonE");
if (getPersonE) {
   getPersonE.innerHTML = `Hello, my name is ${getPerson.name} and I am ${getPerson.age} years old.`;
}


// ----------------------- Example 3 ---------------------------
interface User {
  firstName: string,
  lastName: string,
  getFullName: () => string
};

class Customer implements User {
  firstName: string;
  lastName: string;
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const customer = new Customer();
customer.firstName = "John";
customer.lastName = "Doe";
customer.getFullName();


// console.log('customer.getFullName', customer.getFullName());
const getCustomer = document.getElementById("getCustomer");
if (getCustomer) {
  getCustomer.innerHTML = `Hello, my fullName is ${customer.getFullName()}`;
}

//data types example of Typescript
let num1: number = 123;
console.log(num1); // 123

let jname: string = "John Doe";
console.log(jname); // John Doe

// example: Interfaces can also be used to enforce a specific type for function parameters and return values: 
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = function(a: number, b: number): number {
  return a + b;
};

console.log("addfn: ", add(1, 2)); // 3

// Example: 
interface Vehicle {
  make: string;
  model: string;
  year: number;
  startEngine(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine(): void {
    console.log("The engine is running.");
  }
}

let car: Car = new Car("Toyota", "Camry", 2020);
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

