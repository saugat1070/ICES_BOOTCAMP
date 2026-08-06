# ICES - JavaScript Course Summary & Assignments

Hey everyone! Here's a quick recap of what we've covered so far and the assignments you need to complete.

---

## Session 1 - JavaScript Fundamentals

Topics covered:

- **Console methods** - `console.log()`, `console.error()`, `console.table()`, `console.warn()`, `console.clear()`
- **Variables & Keywords** - `let`, `var`, and their differences
- **Data Types** - String, Number, Boolean, Undefined, Object
- **Type Coercion** - How JavaScript converts types automatically (e.g., `"1" + 1` vs `"1" * 1`)
- **Operators** - Arithmetic (`+`, `-`, `*`, `/`, `%`), Comparison (`>`, `>=`, `===`), Logical (`&&`, `||`)
- **Ternary Operator** - `condition ? trueValue : falseValue`
- **Conditional Statements** - `if/else`, `switch`
- **Loops** - `for`, `while`, `do-while`, `for...in`, `for...of`
- **Functions** - Declaration, Expression, Arrow functions, IIFE
- **Callbacks** - Passing functions as arguments
- **Variable Scope** - Block scope vs function scope

---

## Session 2 - Arrays & Objects

Topics covered:

- **Array Methods** - `push()`, `pop()`, `shift()`, `unshift()`
- **Higher-Order Array Methods** - `forEach()`, `map()`, `filter()`, `reduce()`
- **Objects** - Properties (attributes) and methods
- **Problem Solving** - Building a product inventory system

---

## Assignments

### Assignment 1 - Calculator

Build a calculator program that supports:

- Subtraction
- Multiplication
- Modulo
- Division

Take two numbers as input and perform the selected operation.

---

### Assignment 2 - Social Profile Object

Create an object with the following structure:

```js
const profile = {
    fullName: "Your Name",
    email: "your@email.com",
    numberOfLike: 100,
    comments: ["comment1", "comment2", "comment3"],
    bookmarks: false,
    friendsName: ["friend1", "friend2"]
};
```

Implement these methods:

1. **like()** - Increment `numberOfLike` by 1
2. **editProfile(newName, newEmail)** - Update `fullName` and `email`
3. **addComment(comment)** - Add a new comment to the array
4. **removeComment(comment)** - Remove a specific comment from the array
5. **addFriend(name)** - Add a new friend to the array
6. **removeFriend(name)** - Remove a specific friend from the array
7. **toggleBookmark()** - Toggle `bookmarks` between `true` and `false`

---

### Assignment 3 - Product Inventory System (Project)

You have been given a list of products. Complete the program with:

1. **Show inventory** - Display all products
2. **Add product** - Add a new product (name, category, price)
3. **Remove product** - Remove a product by name
4. **Filter by category** - Show products of a specific category
5. **Filter by price range** - Show products between a min and max price (e.g., 100-1000)

Use a `switch` statement for the menu and make sure the program exits when the user selects "Exit".

---

## Submission

- Complete all assignments and push your code to your GitHub repository.
- Use meaningful variable names and keep your code clean.
- Test your code before submitting.

Good luck!
