function square(number) {
  return number * number;
}

// Arrow functions
const square = function (number) {
  return number * number;
}

// ecma6
const square = number => {
  return number * number;
}

// if only 1 parameter
const square = number => {
  return number * number;
}

// if no parameters
const square = () => {
  return number * number;
}

// if only single line
const square = number => number * number;

// call function
console.log(square(5)); // 25
