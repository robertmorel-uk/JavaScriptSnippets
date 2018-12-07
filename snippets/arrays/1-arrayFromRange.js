//Create an array from a range
//if second param is less than first return empty array
const numbers = arrayFromRange(1, -4);
console.log(numbers); //[]
//if second param is bigger than first return array from range
const numbersPlus = arrayFromRange(1, 4);
console.log(numbersPlus); //[1,2,3,4]

function arrayFromRange(min, max) {
  //create an array
  const output = [];
  //loop through range and add each number to array
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}
