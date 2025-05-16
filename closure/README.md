# ⚙️ Closure (Functions with memories)

When a function is invoked, an **execution context** is created. This context has its own local memory (also called a variable environment). Once the function finishes executing, its local memory is deleted—except for the return value.

But what if our functions could **keep data alive** between executions?

That would allow our functions to have their own cache or persistent memory. And it all starts with **returning a function from another function**.

    Summary

    - Closure is the most esoteric of JavaScript concepts.
    - Enable powerful pro-level functions like 'once' and 'memoize'.
    - Many JavaScript design patterns including the module pattern use closure.
    - Build iterators, handle partial application and maintain state in an asynchronous world.
