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

const result = copyArrayWithManipulation([1, 2, 3], multiplyBy2);
console.log(result);
