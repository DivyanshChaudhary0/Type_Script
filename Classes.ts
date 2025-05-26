
class Person5 {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name,
        this.age = age
    }

    greet(): string {
        return `Hello My name is ${this.name} and I am ${this.age} years old`
    }
}

const new_Person = new Person5('Bhola', 20);
console.log(new_Person.greet());


// Access Modifiers
// public - access from anywhere, this is default.
// private - access only within the class.
// protected - access within the class and its subclasses
class Car5{
    public name: string;
    private model: string;
    protected price: number;

    constructor(name: string, model: string, price: number){
        this.name = name;
        this.model = model;
        this.price = price;
    }

    public getModel(): string{
        return `Model is ${this.model}`
    }
}

const swift = new Car5('Swift','Z15442',200000);  // we can only access getModel and name outside the class
console.log(swift.getModel());
console.log(swift.name);


// Inheritance

class Animal{
    constructor(public name:string){

    }

    getVoice(): string{
        return `Some voice ....`
    }

    getName(): string{
        return `Dog name is ${this.name}`
    }
}

class Dog extends Animal{
    constructor(public name: string){
        super(name);
    }

    getVoice(): string {
        return 'woff! woff! woff!'
    }
}

const dog = new Dog('Sheruuu');
console.log(dog.getVoice());
console.log(dog.getName())


abstract class Shape{
    abstract getArea(): number;

    printArea(): void{
        console.log(`Area is ${this.getArea()}`)
    }

}

class Rectangle extends Shape{
    constructor(public width:number, public height:number){
        super();
    }

    getArea(): number{
        return this.width * this.height
    }
}

const rect = new Rectangle(10,20);
rect.printArea();


// getter and setter in classes

class Circle{
    private _radius: number;

    constructor(radius:number){
        this._radius = radius;
    }

    get radius(): number{
        return this._radius;
    }

    set radius(value) {
        if(value < 0){
            throw new Error("Radius must be positive");
        }
        this._radius = value;
    }
}


let circle = new Circle(10);
console.log(circle.radius);

circle.radius = 20;
console.log(circle.radius);
