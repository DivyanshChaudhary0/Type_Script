
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
