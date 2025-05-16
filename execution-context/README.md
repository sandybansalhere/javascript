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

**🔴 Memory Creation Phase - Global** (Call Stack: [Global Execution Context])

- `num`: `Uninitialized` (TDZ)
- `multiplyBy2`: is stored in memory with a reference to its code
- `output`: `undefined`

‼️ IMPORTANT: `const` and `let` are hoisted but not initialized — they’re in the Temporal Dead Zone (TDZ).

**🔴 Code Execution Phase - Global**

- `num`: 3
- 🔗 Line: `var output = multiplyBy2(num);`

new Execution Context created for `multiplyBy2()`

**🟢 Memory Creation Phase - multiplyBy2** (Call Stack: [Global Execution Context, multiplyBy2])

- `inputNumber`: `undefined`
- `result`: `undefined`

**🟢 Code Execution Phase - multiplyBy2**

- `inputNumber`: 3
- `result`: 3 \* 2 = 6
- Returns 6

Updated Call Stack: [Global Execution Context]

Execution Context for multiplyBy2 will be removed from Call Stack, and result will be stored in output and Control goes back to the Global Execution Context and There is no line left for execution Finally, the Global Execution Context is also removed from the Call Stack.

Call Stack: []

🏁 End of Program

---

    Summary

    - Whenever JavaScript's program runs a Gloabl Execution Context gets created
    - Each Execution Context has two components:
        1. Memory (Variable Env)
        2. Code (Thread of Execution)
    - Execution Context created in two phase:
        1. Memory Creation Phase
        2. Code Execution Phase
    - Whenever a function is invoked new Execution Context gets created
