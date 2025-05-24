
let a = 10;
a = 10;
console.log(a); 


const s:string = "Bhola Chaudhary"
console.log(s);


let bool:boolean = false;
bool = true
console.log(bool);


const arr: number[] = [1,2,3,4];
const str: string[] = ['sheetal','divyansh','manish']

let newArr: number[] = arr.map((val) => val*2);
let newStr: string[] = str.map((val) => val.concat('sh'));

const obj: object = {
    name: "Ram",
    age: 20,
    class: 12
}

const obj1: {name:string, age:number} = {
    name: "Bhola",
    age: 38
}


// tuples
const customArr : [number, string] = [40,"Bhola Chaudhary"]

const cordinates3D : [number,number,number] = [10,20,30];

const userData: [string, number] = ["name", 1234]

const response: [number, string] = [200, "Success"];
// response.push(0);   drawback of tuples


// enums

enum Color {
    Red = 'red',
    Green = 'green',
    Yellow = 'yellow'
}

const color: Color = Color.Red

// let small = 1
// let medium = 2
// let large = 3

// const enum Size {
//     Small = 1,
//     Medium,
//     Large
// }

enum Size {
    Small = 1,
    Medium,
    Large
}

let size: Size = Size.Medium;
console.log(size);

// unknown
const notSure: unknown = 'a'
if(typeof(notSure) === 'number'){
    console.log(notSure);
}
else if(typeof(notSure) === 'string'){
    console.log(notSure.charAt(0));   
}

// never 

// function infiniteLoop(): never {
//     while(true){
//         console.log(1);
//     }
// }

// function throwError(message: string): never{
//     throw new Error(message)
// }

// throwError("Something went wrong");


// void
function sum(a:number,b:number):void {
    console.log(a+b);
    // return undefined; valid
    // return null; not valid
}


// type inference and type assertion
let num = 10;  // the type is automatically assigned, that is type inference

let someValue: any = "Hello World";
// let strLength = someValue.length;  But suggestions are not coming here
let strLength = (someValue as string).length;
console.log(strLength);


// union types
let id: number | string = 10;
id = 'divyansh'

function printId(id: string | number){
    if(typeof id  === "string"){
        console.log(id.toUpperCase());
    }
    else{
        console.log(id);
    }
}

// interface
interface Person{
    name: string,
    age: number
}

let person: Person = {
    name: "Bhola",
    age: 30
}

interface MathOp{
    (a:number, b:number): number;
}

let add: MathOp = (x,y) => x+y;
let subtract: MathOp = (x,y) => x-y;

console.log(add(10,15),subtract(15,10));


// type alias

type Person1 = {
    name: string,
    age: number
}

let person1: Person = {
    name: "Jaat",
    age: 100
}

type ID = string | number;
let userID: ID = 'Divyansh';
userID = 200


// Difference between alias and interface
interface User{
    name: string,
    age: number
}

interface User{
    address: string
}

// it is merged in User

let user: User = {
    name: "Something",
    age: 100,
    address: "Khera sattu"
}

type User1 = {
    name: string,
    age: number
}

// type User1 = {
//     address: string
// }                                                        can not write like this

type User2 = User1 & {
    address: string
}

// Now User2 have the User1 and User2 properties itself

// Optional Properties

interface Animal {
    name: string,
    weight?: string,
    food?: string,
    age: number
}

let tiger: Animal = {
    name: "tiger",
    age: 30,
    food: "non-veg"
}