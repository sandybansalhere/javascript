# Execution Context

When JavaScript code runs:

↘️ A **🌍 Global Execution Context** gets created and its added to call stack.

An Execution Context has two components: **Memory** and **Code**. Execution Context created in two phases-

1. **📦 Memory Creation Phase**
2. **</> Code Execution Phase**

Let’s walk through an example:

```js
const num = 3;

function multiplyBy2(inputNumber) {
  var result = inputNumber * 2;
  return result;
}

var output = multiplyBy2(num);
```

**Global Execution Context**

📦 Memory Creation Phase: In this phase, JavaScript parses the code and sets up memory for variables and functions.

| Memory                                          | Code (Thread of execution) |
| ----------------------------------------------- | -------------------------- |
| `num`: `Uninitialized` (in TDZ)                 |                            |
| `multiplyBy2` ✅ `function` (reference to func) |                            |
| `output`: `undefined`                           |                            |

</> Code Execution Phase: In this phase, JavaScript goes through the code line by line and executes it.

| Memory                                          | Code (Thread of execution) |
| ----------------------------------------------- | -------------------------- |
| `num`: 2                                        |                            |
| `multiplyBy2` ✅ `function` (reference to func) |                            |
| `output`: `undefined`                           |                            |

↘️ Whenever the function `multiplyBy2(num)` is executed, a brand new **Execution Context** is created and added to the **Call Stack**. It also goes through two phases: the **Memory Creation Phase** and the **Code Execution Phase**.
Once the function returns a value, its Execution Context is **removed** from the Call Stack, and control returns to the **Global Execution Context**. After all functions have finished executing and their Execution Contexts are removed, the **Global Execution Context** is also **removed from the Call Stack**, marking the end of the program.
