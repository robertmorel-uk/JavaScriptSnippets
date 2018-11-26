const numbers = [3, 4];

//add to end of array
numbers.push(5, 6);

//beginning
numbers.unshift(1, 2);

//middle
//params are beginning,number to delete, what to add
numbers.splice(2, 0, "a", "b");

console.log(numbers);
