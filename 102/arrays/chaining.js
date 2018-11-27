const numbers = [1, -1, 2, 3];

//filter numbers greater than 0
const items = numbers
  .filter(n => n > 0)
  //map to array of objects
  .map(n => ({ value: n }))
  //filter greater than 1
  .filter(obj => obj.value > 1)
  //map to value property of object
  .map(obj => obj.value);

console.log(items);
