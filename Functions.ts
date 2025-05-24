
// Regular functions
function sum(a:number, b:number):number {
    return a+b;
}

// Function expressions
const multiply = function(a:number, b:number):number {
    return a*b;
}

// Arrow functions
const devide = (a:number, b:number):number => {
    return a/b;
}

console.log(sum(10,20));
console.log(multiply(10,20));
console.log(devide(20,10));

// optional perameters
function optional(a:number,b?:number):number {
    if(b) return a+b;
    else return a;
}

// default perameters
function defaulty(a:number, b:number = 0):number {
    return a+b;
}

// Rest perameters
function rest(...numbers:number[]):number {
    return numbers.reduce((acc,currVal) => acc+currVal,0);
}

console.log(rest(10,20,30,40,50));
