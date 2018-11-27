const numbers = [1, -1, 2, 3];

//get sum of all elements in array
let sum = 0;
for (let n of numbers) {
  sum += n;
}

console.log(sum);

//reduce method using accumulator
const sumRed = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sumRed);
