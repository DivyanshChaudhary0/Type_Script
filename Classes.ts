
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

