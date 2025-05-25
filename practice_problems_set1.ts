
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


// Define a union type for a vehicle that can either be a bike or a car with different properties,
// Write a function to log details based on the vehicle type


type Bike = {
    type: "bike",
    name: string,
    price: number,
    model: string
}

type Car = {
    type: 'car',
    name: string,
    price: number,
    model: string
}

type VehicleData = Bike | Car

function showDetails(vehicle: VehicleData){
    if(vehicle.type === 'bike'){
        console.log("Bike");
    }
    else{
        console.log("Car");
    }
}

let myCar: VehicleData = {
    type: "car",
    name: "Swift",
    price: 120000,
    model: 'dont know'
}

let myBike: VehicleData = {
    type: "bike",
    name: "Hero_Honda",
    price: 100000,
    model: 'Splendor'
}

showDetails(myBike);
showDetails(myCar);
