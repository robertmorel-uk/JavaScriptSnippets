let number = 10;
let numberObj = { value: 10 };

function increment(number, numberObj) {
  number++;
  numberObj++;
}

increment(number);
//primitive pass by value
console.log(number); //10
//object pass by reference
console.log(numberObj); //11
