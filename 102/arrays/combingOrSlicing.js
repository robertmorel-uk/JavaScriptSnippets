const first = [1, 2, 3];
const second = [4, 5, 6];

//combine 2 arrays
const combined = first.concat(second);
console.log(combined);

//slice array starting at 2 and finishing at 4
const slice = combined.slice(2, 4);
console.log(slice);

//slice array starting at 2
const slice2 = combined.slice(2);
console.log(slice2);

//copy arrray
const slice3 = combined.slice();
console.log(slice3);
