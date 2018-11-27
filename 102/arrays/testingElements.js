const numbers = [1, 2, 3];

//check if all num are positive (boolean)
const allPositive = numbers.every(function(value) {
  return value >= 0;
});

console.log(allPositive);

//check if some num are positive (boolean)
const atLeastOnePositive = numbers.every(function(value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
