# ⚙️ Closure (Functions with memories)

When a function is invoked, an **execution context** is created. This context has its own local memory (also called a variable environment). Once the function finishes executing, its local memory is deleted except for the return value.

But what if our functions could **keep data alive** between executions?

That would allow our functions to have their own cache or persistent memory. And it all starts with **returning a function from another function**.

### Returning Functions from Function

```js
function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);
```

**🔴 Global Execution Context (Memory Creation Phase)**

> Call Stack: [Global Execution Context]

- `createdFunction` is stored in memory with a reference to its code.
- `generatedFunc` is set to "Uninitialized" aka TDZ.
- `result` is also set to "Uninitialized" aka TDZ.

**🔴 Global Execution Context (Code Execution Phase)**

- `const generatedFunc = createFunction();`

📦 new Execution Context created for `createFunction()`

> Call Stack: [Global Execution Context, createFunction]

**🟢 createFunction Execution Context (Memory Creation Phase)**

- `multiplyBy2` is stored in memory

**🟢 createFunction Execution Context (Code Execution Phase)**

- `return multiplyBy2`

> Call Stack: [Global Execution Context]

🔗 Now `generatedFunc` now holds the reference to the `multiplyBy2` function

‼️ IMPORTANT: Even though `createFunction` has finished execution, the returned `multiplyBy2` still has access to its original scope. This is where closure happens.

↪️ Now control goes back to Global Execution Context

- `const result = generatedFunc(3);`

> Call Stack: [Global Execution Context, generatedFunc]

**🔵 generatedFunc/multiplyBy2 Execution Context (Memory Creation Phase)**

- `num` is `undefined`

**🔵 generatedFunc/multiplyBy2 Execution Context (Code Execution Phase)**

- `num` is set to 3
- Returns 3 \* 2 = 6

> Call Stack: [Global Execution Context]

🎉 So `result` become 6

> Call Stack: []

🏁 End of Program

---

    Summary

    - Closure is the most esoteric of JavaScript concepts.
    - Enable powerful pro-level functions like 'once' and 'memoize'.
    - Many JavaScript design patterns including the module pattern use closure.
    - Build iterators, handle partial application and maintain state in an asynchronous world.
