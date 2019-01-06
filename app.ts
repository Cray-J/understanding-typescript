import calculateCircumference = MyMath.Circle.calculateCircumference;

console.log("It works!");

// string
let myName = 'Kris';

// number - can be floating numbers
let myAge = 30.5;

// boolean
let hasHobby = true;

// assign types
let myRealAge: number;
myRealAge = 30;
// myRealAge = '30'; invalid after type assigning

// array
let hobbies = ["Cooking", "Sports"];
hobbies = ["100"];
console.log(hobbies[0]);
console.log(typeof hobbies);

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum : enum values increment from last value (so unless Blue is assigned a value, it gets 101
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue  = 2 // 2
}
let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
}


// argument types
function multiply(value1: number, value2: number) {
    return value1 * value2;
}
// console.log(multiply(20, "Kris"));
console.log(multiply(10, 2));

// function types
// let myMultiply; allows assigning of any function
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: {name: string, age: number} = {
    name: "Kris",
    age: 30
};
// userData = {
//    a: "Hello",
//    b: 22
// };


// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data;
    }
};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]}

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 30;
myRealRealAge = "30";

// check types
let finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("finalValue is a number");
}

// never
function neverReturns(): never {
    throw new Error('an error!');
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull; // undefined
let canThisBeAny: number | null = null;
canThisBeAny = 12;




// Exercise

type BankAccount = {money: number, deposit:(value: number) => void}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};



let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "Kris",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Betting", "Gaming"]
};


myself.bankAccount.deposit(3000);
console.log(myself);

// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => {
  return number1 * number2;
};
console.log(multiplyNumbers(10, 3));


const greet = () => {
    console.log("Hello!");
};
greet();

const greetFriend = friendName => console.log("Hello " + friendName);
greetFriend("Manu");

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(20);


// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5]; // array of numbers
console.log(Math.max(33, 99, 10, -3));  // List of numbers
console.log(Math.max(...numbers));  // Spread operator: Turns an array into a list of values. Spread operator when used in function call

function makeArray(name: string, ...args: number[]) { // Rest operator: When used as parameter. Fetches all parameters and makes an array
    return args;
}
console.log(makeArray("Kris",1, 2, 6));

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// console.log(hobby1, hobby2);
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);


const userData1 = { userName: "Kris", age: 31 };
// const userName = userData1.userName;
// const age = userData1.age;
// console.log(userName, age);
// const {userName, age} = userData1; // valid
const {userName: myName1, age: myAge1} = userData1; // assigning aliases
console.log(myName1, myAge1);


// Template Literals - extended strings (strings with more features)
const userName = "Kris";
const greeting = ` This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);


// Tuples
function printInfo1(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}

// allowed in typescript 3
//function printInfo2(...info: [string, number]) {
 //   console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
//}


// Modules and namespaces


// namespace

/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import CircleMath = MyMath.Circle;

console.log(MyMath.calculateRectangle(10, 20));
console.log(CircleMath.calculateCircumference(20));


// modules

//import { calculateCircumference, PI} from './math/circle';
import * as Circle from './math/circle';

console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));


// interfaces

interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;  // alternative properties where we dont know the type/name in advance
    greetPerson(lastName: string): void;
}

function greetPerson(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Michelle";
}

const person: NamedPerson = {
    firstName: "Kris",
    age: 31,
    hobbies: ["Cooking", "Sports"],
    greetPerson(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

//greetPerson({firstName: "Kris", age: 31});
changeName(person);
greetPerson(person);
person.greetPerson("Anything");

class Person implements NamedPerson {
    firstName: string;
    greetPerson(lastName: string): void {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

const myPerson = new Person();
myPerson.firstName = "Kristoffer";
greetPerson(myPerson);
myPerson.greetPerson("Jensen");

// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));

// Interface inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 40,
    firstName: "Kris",
    greetPerson(lastName: string): void {
        console.log("Hello" );
    }
};


// Simple generic

function echo(data: any) {
    return data;
}

console.log(echo("kris"));
console.log(echo(31));
console.log(echo({name: "Kris", age: 31}));


// Better generic

function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("kris"));
console.log(betterEcho(31));
console.log(betterEcho({name: "Kris", age: 31}));


// Built-in generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
//testResults.push("Testing"); // Wont work


// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

printAll<string>(["Banana", "Apple"]);

// Generic types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

// Generic class
class SimpleMath<T extends number | string, U extends number | string > {
    baseValue: T;
    multiplyValue: U;
    calculateValue(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculateValue());