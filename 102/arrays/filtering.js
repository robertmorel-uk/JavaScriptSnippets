const numbers = [1, -1, 0, 2, 3];

//filter numbers greater than 0
const filtered = numbers.filter(function(value) {
  return value > 0;
});

//ecma6
const filteredEcma6 = numbers.filter(n => n > 0);

console.log(filteredEcma6);
