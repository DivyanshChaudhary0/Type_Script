
class BankAccount {
    accountNumber: number;
    private balance: number;

    constructor(accountNumber: number, balance: number = 0){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void{
        this.balance = this.balance + amount
    }

    withdraw(amount: number): void{
        this.balance -= amount
    }

    getBalance(): number{
        return this.balance
    }

}

let myAccount = new BankAccount(12345678,1200);
console.log(myAccount.accountNumber);
console.log(myAccount.getBalance());
myAccount.deposit(1200);
console.log(myAccount.getBalance());
myAccount.withdraw(1200);
console.log(myAccount.getBalance());


/*

2.  Create an employee class with inheritance:
    Define an employee class with property name and salary,
    Create a subclass Manager that adds a departement property.
    Both classes should have a getDeatils method that returns a string with the employee's details.

*/

class Employee{
    name: string;
    salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }

    getDetails(): string{
        return `Name of the employee is ${this.name} and salary is ${this.salary}`
    }

}


class Manager extends Employee{

    department: string;

    constructor(name: string, salary: number, department: string){
        super(name,salary);
        this.department = department;
    }

    getDetails(): string {
        return `Name of the manager is ${this.name} and salary is ${this.salary}`
    }
}

const manish = new Employee('Manish',5000);
console.log(manish.getDetails());

const manager = new Manager('Sheetal',40000,'IT');
console.log(manager.getDetails());

