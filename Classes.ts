
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
