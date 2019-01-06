function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person2 {
    constructor() {
        console.log("Hi");
    }
}


// Factory
function logging(value: boolean) {
    return value ? logged: null;
}

@logging(true)
class Car2 {
}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant2{
    name = "Green Plant";
}
const newPlant = new Plant2();
(<any>newPlant).print();


// Method decorator
// Property decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overwritable(value: boolean) {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project2 {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project2("SuperProject");
project.calcBudget();
project.calcBudget = function() {
    console.log(2000);
};
project.calcBudget();


// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if(printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}
const course = new Course("name");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);

