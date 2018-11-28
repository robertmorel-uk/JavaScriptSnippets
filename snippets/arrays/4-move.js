//move an element in an array
const numbers = [1, 2, 3, 4];
//call function (move array element at position 1, 3 places)
const output = move(numbers, 1, 3);
console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset.");
    return;
  }

  //copy array
  const output = [...array];
  //splice at index, then access splice array position 0 to get element
  const element = output.splice(index, 1)[0];
  //put in place
  output.splice(position, 0, element);
  return output;
}
