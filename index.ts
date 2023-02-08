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


// npm install -g typescript
// Run the command: tsc index.ts
// This will compile the TypeScript file index.ts into a JavaScript file with the same name (index.js) in the same directory. You can then include this JavaScript file in your HTML page to run your TypeScript code in the browser.

