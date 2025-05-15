# 🧠 Understanding Execution Context

When JavaScript code runs:

↘️ A **🌍 Global Execution Context** gets created and its added to call stack (a kind of to-do list for function calls).

An Execution Context has two components: **Memory** and **Code**. Execution Context created in two phases-

1. **📦 Memory Creation Phase**
2. **🧑‍💻 Code Execution Phase**

Let’s walk through an example:

```js
const num = 3;

function multiplyBy2(inputNumber) {
  var result = inputNumber * 2;
  return result;
}

var output = multiplyBy2(num);
```

### 🌍 Global Execution Context

**📦 Memory Creation Phase**: In this phase, JavaScript parses the code and sets up memory for variables and functions.

| Memory                                          | Code (Thread of execution) |
| ----------------------------------------------- | -------------------------- |
| `num`: `Uninitialized` (in TDZ)                 |                            |
| `multiplyBy2` ✅ `function` (reference to func) |                            |
| `output`: `undefined`                           |                            |

Note: const and let are hoisted but not initialized — they’re in the Temporal Dead Zone (TDZ).

**🧑‍💻 Code Execution Phase**: In this phase, JavaScript goes through the code line by line and executes it. This is the phase where actual values are assigned to variables. When the thread of execution encounters a function invocation, a brand new Execution Context is created and added to the Call Stack.

| Memory                                           | Code (Thread of execution) |
| ------------------------------------------------ | -------------------------- |
| `num`: 3                                         |                            |
| `multiplyBy2`: ✅ `function` (reference to func) |                            |
| `output`: `undefined`                            |                            |

### Function Execution Context: `multiplyBy2(num)`

↘️ Whenever the function is executed, a new **Execution Context** is created and pushes it to the **Call Stack**.

**📦 Memory Creation Phase**

| Memory                     | Code (Thread of execution) |
| -------------------------- | -------------------------- |
| `inputNumber`: `undefined` |                            |
| `result`: `undefined`      |                            |

**🧑‍💻 Code Execution Phase**

| Memory           | Code (Thread of execution) |
| ---------------- | -------------------------- |
| `inputNumber`: 3 |                            |
| `result`: 6      |                            |

The function runs, calculates the result, and returns 6.

Then:
• Its Execution Context is **removed from the Call Stack**
• Control goes back to the Global Execution Context

🏁 End of Program

Once all functions are done:
• Their Execution Contexts are removed
• Finally, the **Global Execution Context** is also removed from the Call Stack

This means JavaScript has finished running your program.
