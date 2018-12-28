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