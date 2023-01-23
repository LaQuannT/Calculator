document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', displayValue);


});

// variable to hold input values 
let inputValues = [];

// Define function for simple math

function addition(num, num2) {
  return num + num2;
}

function subtraction(num, num2) {
  return num - num2;
}

function multiplication(num, num2) {
  return num * num2;
}

function division(num, num2) {
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

// display the value of a btn when it is clicked
function displayValue() {
  document.querySelectorAll('.btn').forEach(button => {
    button.onclick = function (){
      document.querySelector('#input').textContent = button.getAttribute('value');
      inputValues.push(button.getAttribute('value'));
    }
  });
}