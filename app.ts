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