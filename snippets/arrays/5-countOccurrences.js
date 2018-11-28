//count how many times an element appears in ana array
const numbers = [1, 2, 3, 4];
//call function
const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
  // let count = 0;
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}
