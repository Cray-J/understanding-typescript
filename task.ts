class Car {
    name: string;
    acceleration: number;

    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;
    }

    honk() {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}
const heinz = new Car("Heinz");
heinz.honk();
heinz.accelerate(50);

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);


// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    width = 0;
    length = 0;
};

class Construction extends BaseObject {

    public calcSize(): number {
        return this.width * this.length;
    }
}

const rectangle = new Construction();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());


class ExpPerson {
    private person = "";
    private firstName: string;

    constructor(firstName: string) {
        this.firstName = firstName;
    }

    get() {
        return this.firstName;
    }

    set(name: string) {
        if (name.length > 3) {
            this.firstName = name;
        }
        else {
            this.firstName = "";
        }
    }
}

const person1 = new ExpPerson("firstName");
console.log(person1.get());
person1.set("Ma");
console.log(person1.get());
person1.set("Maximilian");
console.log(person1.get());