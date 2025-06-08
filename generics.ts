
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


// interface generics
interface keyPair<T,U> {
  key: T,
  value: U
}

let keyPairValue: keyPair<string,number> = {
  key: 'pair',
  value: 10
}

// generic constraints
function getLength<T extends {length: number}>(item:T):number {
  return item.length
}

console.log(getLength('Hello'));
console.log(getLength([1,2,3,4,5]));
// console.log(getLength(123))  can not get the length


// class generics
class Box<T> {
  content: T ;

  constructor(value: T){
    this.content = value;
  }

  getContent():T {
    return this.content;
  }

}

const numberBox = new Box(20);
console.log(numberBox.getContent());

const stringBox = new Box('Bhola');
console.log(stringBox.getContent());


class Stack<T> {
  private items: T[] = []

  push(value:T):void {
    this.items.push(value)
  }

  pop():T | undefined {
    return this.items.pop();
  }

  getItems(): T[] {
    return this.items;
  }

}

let numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.getItems());
console.log(numberStack.pop());


let stringStack = new Stack<string>();
stringStack.push('Hello');
stringStack.push('Hello');
stringStack.push('Hello');
console.log(stringStack.getItems());
console.log(stringStack.pop());
console.log(stringStack.getItems());

// Literal types

type isVisible = true | false;

type Action = 'add' | 'delete' | 'update'

function takeAction(action: Action): void{
  switch(action){
    case 'add': 
      console.log("Add");
      break;

    case 'delete':
      console.log("delete");
      break;

    case 'update':
      console.log("update");
      break;

  }
}


function printStatus(status: 'success' | 'error' | 'loading'): void{
  console.log(status);
}

printStatus('success');
printStatus('loading');


interface ButtonConfig {
  size: 'small' | 'medium' | 'large'
  color: 'white' | 'black' | 'green'
}

const Btn: ButtonConfig = {
  size: 'medium',
  color: 'green'
}

/*
  Index signature is used to define types of objects that can have properties of dynamic keys, where the 
  keys are not known in advance but you still enforce the type of the value.
*/

interface Fruits {
  [key: string]: string
}

const fruitsArray: Fruits = {
  apple: "A red fruit",
  banana: "A yellow fruit"
}

console.log(fruitsArray['apple']);

