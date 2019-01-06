"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("It works!");
// string
var myName = 'Kris';
// number - can be floating numbers
var myAge = 30.5;
// boolean
var hasHobby = true;
// assign types
var myRealAge;
myRealAge = 30;
// myRealAge = '30'; invalid after type assigning
// array
var hobbies = ["Cooking", "Sports"];
hobbies = ["100"];
console.log(hobbies[0]);
console.log(typeof hobbies);
// tuples
var address = ["Superstreet", 99];
// enum : enum values increment from last value (so unless Blue is assigned a value, it gets 101
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(20, "Kris"));
console.log(multiply(10, 2));
// function types
// let myMultiply; allows assigning of any function
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Kris",
    age: 30
};
// userData = {
//    a: "Hello",
//    b: 22
// };
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 30;
myRealRealAge = "30";
// check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("finalValue is a number");
}
// never
function neverReturns() {
    throw new Error('an error!');
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull; // undefined
var canThisBeAny = null;
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Kris",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Betting", "Gaming"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
// Arrow Functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friendName) { return console.log("Hello " + friendName); };
greetFriend("Manu");
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(20);
// Rest & Spread
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5]; // array of numbers
console.log(Math.max(33, 99, 10, -3)); // List of numbers
console.log(Math.max.apply(Math, numbers)); // Spread operator: Turns an array into a list of values. Spread operator when used in function call
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Kris", 1, 2, 6));
// Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// console.log(hobby1, hobby2);
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData1 = { userName: "Kris", age: 31 };
// const userName = userData1.userName;
// const age = userData1.age;
// console.log(userName, age);
// const {userName, age} = userData1; // valid
var myName1 = userData1.userName, myAge1 = userData1.age; // assigning aliases
console.log(myName1, myAge1);
// Template Literals - extended strings (strings with more features)
var userName = "Kris";
var greeting = " This is a heading!\nI'm " + userName + ".\nThis is cool!";
console.log(greeting);
// Tuples
function printInfo1(name, age) {
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
var CircleMath = MyMath.Circle;
console.log(MyMath.calculateRectangle(10, 20));
console.log(CircleMath.calculateCircumference(20));
// modules
//import { calculateCircumference, PI} from './math/circle';
var Circle = require("./math/circle");
console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
function greetPerson(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Michelle";
}
var person = {
    firstName: "Kris",
    age: 31,
    hobbies: ["Cooking", "Sports"],
    greetPerson: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
//greetPerson({firstName: "Kris", age: 31});
changeName(person);
greetPerson(person);
person.greetPerson("Anything");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greetPerson = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Kristoffer";
greetPerson(myPerson);
myPerson.greetPerson("Jensen");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 40,
    firstName: "Kris",
    greetPerson: function (lastName) {
        console.log("Hello");
    }
};
// Simple generic
function echo(data) {
    return data;
}
console.log(echo("kris"));
console.log(echo(31));
console.log(echo({ name: "Kris", age: 31 }));
// Better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("kris"));
console.log(betterEcho(31));
console.log(betterEcho({ name: "Kris", age: 31 }));
// Built-in generics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
//testResults.push("Testing"); // Wont work
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Banana", "Apple"]);
// Generic types
var echo2 = betterEcho;
console.log(echo2("Something"));
// Generic class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculateValue = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculateValue());
//# sourceMappingURL=app.js.map