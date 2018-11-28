//create a new array of elements excluding a selection
const numbers = [1, 2, 3, 4];
//call function
const output = exNum(numbers, [1, 2]);
console.log(output);

function exNum(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}
