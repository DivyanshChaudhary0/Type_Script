
// Write a ts function to calculate the factorial of a number with proper type annotation

function factorial(num: number):number {
    let fact = 1;

    while(num > 0){
        fact *= num;
        num--;
    }

    return fact;
}

console.log(factorial(5));

// Define a function that accepts a user object(with name, age and email and) and return a formatted string

interface User{
    name: string,
    age: number,
    email: string
}

function Person(user: User):string {
    return `${user.name} ${user.email} ${user.age}`
}

let user = {
    name: "Bhola",
    age: 20,
    email: "hypr@gmail.com"
}

console.log(Person(user));


// WAF that calculates the total price of an array of product objects. Each object has a price and quantity.

interface Product {
    price: number;
    quantity: number
}

function calculateTotal(products: Product[]):number {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}

let product: Product[] = [
    {
        price: 200,
        quantity: 1
    },
    {
        price: 300,
        quantity: 2
    },
]

console.log(calculateTotal(product));
