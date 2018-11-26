const numbers = [1, 2, 3, 4];

//remove last element and return it
const last = numbers.pop();
console.log(numbers);
//remove first element and return it
const first = numbers.shift();
console.log(numbers);
//remove 1 element from position 1
const middle = numbers.splice(1, 1);
console.log(numbers);
