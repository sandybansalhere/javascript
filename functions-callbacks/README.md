# Functions & Callbacks

```js
function tenSquared() {
  return 10 * 10;
}

tenSquared();
```

```js
function nineSquared() {
  return 9 * 9;
}

nineSquare();
```

`tenSquared` and `nineSquared` are nearly identical functions, only changing the number. Here we are breaking **🔴 DRY - Don’t Repeat Yourself** principle.

## ✅ Generalizing Functions

We can make the generalized function to make it reusable by accepting a parameter:

- **[Generalizing Functions](./generalizing-functions.js)**

Parameters (placeholders) means we don't need to decide what data to run our functionality or until we run the function.

- Then provide an actual value (argument) when we run the function.

## 🔄 Higher Order Functions

Follows the same principle, we may not want to decide exactly what some of our functionality is until we run our function. **Higher Order Functions are those function which takes function as an argument or return a function**.

- **[Higher Order Functions](./higher-order-functions.js)**

Callbacks & Higher Order Functions simplify our code and keep it DRY, Callbacks are core aspect of async JavaScript, and are under-the-hood of promises, async/await.

    Summary

    Functions in JavaScript are first class objects, They can be treated like any other JavaScript object

    1. Assigned to variables and properties of other objects.
    2. Passed as arguments into functions.
    3. Returned as values from functions.
