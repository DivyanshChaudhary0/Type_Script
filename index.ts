
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
    console.log(notSure.charAt(1));   
}

// never 

function infiniteLoop(): never {
    while(true){
        console.log(1);
    }
}

function throwError(message: string): never{
    throw new Error(message)
}

throwError("Something went wrong");


// void
function sum(a:number,b:number):void {
    console.log(a+b);
    // return undefined; valid
    // return null; not valid
}


