
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