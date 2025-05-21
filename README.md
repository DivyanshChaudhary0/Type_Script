
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
