function outer() {
  let counter = 0;
  function inner() {
    counter++;
    return counter;
  }
  return inner;
}

const generatedFunc = outer();
const result = generatedFunc();
const result2 = generatedFunc();
console.log(result, result2);
