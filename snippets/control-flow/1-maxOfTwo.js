//get biggest number
function max2(number1, number2) {
  if (number1 > number2) return number1;
  return number2;
}

let maxNumber2 = max2(8, 4);
console.log(maxNumber2);

//refactored
function max3(a, b) {
  if (a > b) return a;
  return b;
}

let maxNumber3 = max2(3, 5);
console.log(maxNumber3);

//ecma6
const max4 = (a, b) => (a > b ? a : b);

let maxNumber4 = max4(1, 4);
console.log(maxNumber4);
