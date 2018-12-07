// Get area of a square
function square(number) {
  return number * number;
}

// ecma6:

// Assign function to variable
const square = function(number) {
  return number * number;
};

// Arrow function
const square = number => {
  return number * number;
};

// If only 1 parameter
const square = number => {
  return number * number;
};

// If no parameters
const square = () => {
  return number * number;
};

// on Single line
const square = number => number * number;

// Call function
console.log(square(5)); // 25
