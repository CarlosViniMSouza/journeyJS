// JS Functions

/*
    The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:.

    See an example:
*/

let result = function (...args) {
  let sum = 0;

  for (let arg of args) {
      sum += arg;
  }

  return sum;
}

console.log(`\nThe sum result: ${result(1, 2, 3, 4, 5, 6)}`);

/* 
  JavaScript functions have a built-in object called the arguments object.

  See an example:
*/

let output = sumAll(10, 15, 30, 45, 75);

function sumAll () {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
  }
  return sum;
}

console.log(`\nThe output is ${output}`);
