const first = [1, 2, 3];
const second = [4, 5, 6];

//combine 2 arrays
const combined = [...first, ...second];
console.log(combined);

//combine arrays with new elements
const combinedX = [...first, 2, ...second, "x"];
console.log(combinedX);

//copy array
const copy = [...combined];
console.log(copy);
