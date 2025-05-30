
/*
    Generics: it is a way to create components (functions, classes and interfaces) that work with 
                different types without losing type safety.
*/

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("hello"); // Explicit
let output2 = identity(100);             // Inferred


function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const first = getFirstElement<number>([1, 2, 3]);
