//use arguments array to iterate value and provide sum
//NOT ECMA6 - see rest.js

function sum() {
  let total = 0;
  for (let value of arguments) {
    total += value;
    return total;
  }
}

console.log(sum(1, 2, 3, 4, 5));

function func1(a, b, c) {
  console.log(arguments[0]); // expected output: 1
}

func1(1, 2, 3);
