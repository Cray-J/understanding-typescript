var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var heinz = new Car("Heinz");
heinz.honk();
heinz.accelerate(50);
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var baseObject = {
    width: 0,
    length: 0
};
var Construction = /** @class */ (function () {
    function Construction(width, length) {
        this.width = width;
        this.length = length;
    }
    Construction.create = function (baseObject) {
        return new Construction(baseObject.width, baseObject.length);
    };
    Construction.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Construction;
}());
var rectangle = Construction.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
var ExpPerson = /** @class */ (function () {
    function ExpPerson(firstName) {
        this.person = "";
        this.firstName = firstName;
    }
    ExpPerson.prototype.get = function () {
        return this.firstName;
    };
    ExpPerson.prototype.set = function (name) {
        if (name.length > 3) {
            this.firstName = name;
        }
        else {
            this.firstName = "";
        }
    };
    return ExpPerson;
}());
var person1 = new ExpPerson("firstName");
console.log(person1.get());
person1.set("Ma");
console.log(person1.get());
person1.set("Maximilian");
console.log(person1.get());
//# sourceMappingURL=task.js.map