function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

const operations = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
};

let selectedOperation = "add";
console.log(calculate(10, 2, operations[selectedOperation]));

selectedOperation = "subtract";
console.log(calculate(10, 2, operations[selectedOperation]));

selectedOperation = "multiply";
console.log(calculate(10, 2, operations[selectedOperation]));

selectedOperation = "divide";
console.log(calculate(10, 2, operations[selectedOperation]));
