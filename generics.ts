
/*
    Generics: it is a way to create components (functions, classes and interfaces) that work with 
                different types without losing type safety.
*/

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("hello"); // Explicit
let output2 = identity(100);             // Inferred
