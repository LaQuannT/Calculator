// Define function for simple math

function add(num, num2) {
  return num + num2;
}

function subtract(num, num2) {
  return num - num2;
}

function multiply(num, num2) {
  return num * num2;
}

function divide(num, num2) {
  if (num2 === 0) {
    throw new Error('Cannot divide by zero');
  }
  return num / num2;
};

// create a function that takes two numbers and an operator, calls the right math function and returns total

function total(num, operator, num2) {
  switch (operator) {
    case '+':
      return add(num, num2);

    case '-':
      return subtract(num, num2);

    case '*':
      return multiply(num, num2);

    case '/':
      return divide(num, num2);

    default:
      throw new Error('Invalid operator');
  }
};
