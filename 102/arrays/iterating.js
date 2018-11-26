const numbers = [1, 2, 3, 4];

//loop through array
for (let number of numbers) console.log(number);

//loop using foreach
numbers.forEach(function(number) {
  console.log(number);
});

//ecma 6
numbers.forEach(number => console.log(number));

//ecma 6 show index
numbers.forEach((number, index) => console.log(index, number));
