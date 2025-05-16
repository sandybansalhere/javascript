/**
 * -----DRY PRINCIPLE-----
 * Breaking the Do Not Repeat Yourself Principle
 */
function copyArrayAndMultiplyBy2(numbers) {
  const output = [];

  for (let i = 0; i < numbers.length; i++) {
    output.push(numbers[i] * 2);
  }

  return output;
}

function copyArrayAndDivideBy2(numbers) {
  const output = [];

  for (let i = 0; i < numbers.length; i++) {
    output.push(numbers[i] / 2);
  }

  return output;
}

/**
 * -----HIGHER ORDER FUNCTION-----
 * That takes function as an argument or,
 * Return a function
 */
function copyArrayWithManipulation(arr, callback) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }

  return output;
}

function multiplyBy2(num) {
  return num * 2;
}

/**
 * -----CALLBACK-----
 * A callback is a function that is passed into another function
 * example: multiplyBy2
 */
const result = copyArrayWithManipulation([1, 2, 3], multiplyBy2);
console.log(result);
