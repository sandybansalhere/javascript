# ⚙️ Closure (Functions with memories)

When a function is invoked, an **execution context** is created. This context has its own local memory (also called a variable environment). Once the function finishes executing, its local memory is deleted—except for the return value.

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

**🔴 Memory Creation Phase (Global)**

In this phase JavaScript setup the memory space:

- `createdFunction` is stored in memory with a reference to its code.
- `generatedFunc` is set to "Uninitialized" aka TDZ.
- `result` is also set to "Uninitialized" aka TDZ.

Then:

**🔴 Code Execution Phase (Global)**

🔗 Line: `const generatedFunc = createFunction();`

new Execution Context created for `createFunction()`

**🟢 Memory Creation Phase - `createFunction`**

- `multiplyBy2` is stored in memory

**🟢 Code Execution Phase - `createFunction`**

- Returns `multiplyBy2`

👉 Now `generatedFunc` now holds the reference to the `multiplyBy2` function

‼️ IMPORTANT: Even though `createFunction` has finished execution, the returned `multiplyBy2` still has access to its original scope. This is where closure happens.

🔗 Line: `const result = generatedFunc(3);`

**🔵 Memory Creation Phase - `generatedFunc`(multiplyBy2)**

- `num` is `undefined`

**🔵 Code Execution Phase - `generatedFunc`(multiplyBy2)**

- `num` is set to 3
- Returns 3 \* 2 = 6

---

👉 So `result` become 3

    Summary

    - Closure is the most esoteric of JavaScript concepts.
    - Enable powerful pro-level functions like 'once' and 'memoize'.
    - Many JavaScript design patterns including the module pattern use closure.
    - Build iterators, handle partial application and maintain state in an asynchronous world.
