
# 📘 TypeScript Overview

## 🔹 What is TypeScript?

TypeScript is a **superset of JavaScript** that adds **static typing**, **interfaces**, and **advanced tooling** to modern JavaScript. It is developed and maintained by Microsoft.

---

## ✅ TypeScript Types

TypeScript provides several **built-in types** and supports **custom types** as well.

### 🔸 Primitive Types

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

### 🔸 Special Types

- `any` – disables type checking
- `unknown` – similar to `any` but safer
- `never` – indicates values that never occur
- `void` – used for functions with no return

### 🔸 Complex Types

- **Arrays**: `number[]` or `Array<number>`
- **Tuples**: `[string, number]`
- **Objects**: `{ name: string; age: number }`
- **Enums**: `enum Role { Admin, User }`
- **Unions**: `string | number`
- **Intersections**: `TypeA & TypeB`

### 🔸 Custom Types

- **Type Alias**:
  ```ts
  type User = {
    id: number;
    name: string;
  };


## ⚔️ TypeScript vs JavaScript

| Feature                 | JavaScript   | TypeScript          |
| -----------------------| -------------| --------------------|
| Typing System           | Dynamic      | Static (optional)   |
| Compilation             | Not required | Required            |
| Error Checking          | Runtime      | Compile-time        |
| Tooling & IntelliSense  | Basic        | Advanced            |
| Learning Curve          | Easy         | Moderate            |
| Code Scalability        | Difficult    | Easier and safer    |
| Ecosystem Compatibility | Native       | Needs transpilation |



```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const user = {
  name: "Alice",
  age: 25,
};

console.log(greet(user.name));
```


## `TypeScript Advanced Types`

* `any`
* `unknown`
* `never`
* `enum`
* `tuple`

---

## `any`

### Definition

The `any` type disables all type checking. It can represent any JavaScript value and be assigned to any other type.

### Use Case

* Use `any` when migrating from JavaScript or when you don't know the type in advance.

### Example

```ts
let value: any = 42;
value = "hello"; // OK
value = [1, 2, 3]; // OK
```

---

## `unknown`

### Definition

The `unknown` type is a safer alternative to `any`. You can assign any value to an `unknown` variable, but you must do type-checking before using it.

### Use Case

* Use `unknown` when you want to accept dynamic input but enforce type checking before usage.

### Example

```ts
let input: unknown = "hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

---

## `never`

### Definition

The `never` type represents a value that never occurs. This is used for functions that throw errors or have infinite loops.

### Use Case

* Use `never` when a function never returns or to ensure exhaustive checks in conditional logic.

### Example

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

---

## `enum`

### Definition

An `enum` (short for "enumeration") allows you to define a set of named constants. Useful for readable and maintainable code.

### Use Case

* Use `enum` when you have a fixed set of related constants (e.g., directions, statuses).

### Example

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
```

You can also assign custom values:

```ts
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
```

---

## `tuple`

### Definition

A tuple is a fixed-length array with known types at each position. Useful for representing structured data.

### Use Case

* Use `tuple` when the position and type of elements are known and important.

### Example

```ts
let person: [string, number];
person = ["Alice", 30]; // ✅
person = [30, "Alice"]; // ❌ Error: Type mismatch
```

Tuples can include optional and rest elements:

```ts
let record: [string, number?, ...boolean[]];
```

---

## Summary Table

| Type      | Description                        | Use Case                        |
| --------- | ---------------------------------- | ------------------------------- |
| `any`     | Opt-out of type checking           | Temporary flexibility           |
| `unknown` | Safe alternative to `any`          | Type-safe dynamic values        |
| `never`   | Represents values that never occur | Error functions, exhaustiveness |
| `enum`    | Named set of constants             | Fixed related values            |
| `tuple`   | Array with fixed types and length  | Structured and positional data  |

---

Use TypeScript's advanced types to write safe, scalable, and maintainable code. Choose the right type for the right context.

# TypeScript - Core Concepts: Type Inference, Assertion, Functions, and Class Access Modifiers

This README covers essential TypeScript concepts including:

* Type Inference
* Type Assertion
* Functions (Regular, Expression, Arrow, Default Parameters)
* Access Modifiers in Classes

---

## 🔹 Type Inference

### 📖 Definition:

TypeScript can automatically infer the type of a variable based on the assigned value.

### ✅ Example:

```ts
let message = "Hello"; // inferred as string
// message = 10; ❌ Error: number not assignable to string
```

---

## 🔹 Type Assertion

### 📖 Definition:

Type assertion lets you tell the compiler the exact type of a variable.

### ✅ Syntax:

```ts
let someValue: any = "this is a string";
let strLength = (someValue as string).length;
// or
let strLength2 = (<string>someValue).length;
```

---

## 🔹 Functions

### 1. Regular Function

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

### 2. Function Expression

```ts
const greet = function(name: string): string {
  return `Hello, ${name}`;
};
```

### 3. Arrow Function

```ts
const greet = (name: string): string => `Hello, ${name}`;
```

### 4. Function with Default Parameter

```ts
function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}
```

---

## 🔹 Access Modifiers in Classes

### 1. Public

Accessible from anywhere. Default modifier.

```ts
class User {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

### 2. Private

Accessible only within the class.

```ts
class User {
  private password: string;
  constructor(password: string) {
    this.password = password;
  }
}
```

### 3. Protected

Accessible within the class and subclasses.

```ts
class User {
  protected role: string;
  constructor(role: string) {
    this.role = role;
  }
}

class Admin extends User {
  getRole() {
    return this.role; // ✅ Accessible
  }
}
```

---

## ✅ Summary

| Feature          | Description                             |
| ---------------- | --------------------------------------- |
| Type Inference   | TS auto-detects type                    |
| Type Assertion   | Developer specifies the type explicitly |
| Regular Function | Standard named function                 |
| Expression Fn    | Function stored in a variable           |
| Arrow Function   | Concise syntax with `=>`                |
| Default Param    | Fallback value if no argument passed    |
| Public           | Accessible everywhere                   |
| Private          | Only within class                       |
| Protected        | Within class and subclasses only        |

---

TypeScript provides static type checking to help developers write safer and more maintainable code. Understanding and using these core concepts enhances productivity and code quality.
