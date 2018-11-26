//primitives
const numbers = [1, 2, 3, 4, 3];

//find array item at position
console.log(numbers.indexOf(3));
//find array item from position
console.log(numbers.indexOf(3, 3));
//at last position
console.log(numbers.lastIndexOf(3));

//check if element exists in array
console.log(numbers.indexOf(1) !== -1);
//ecma script 6
console.log(numbers.includes(1));

//reference types

const courses = [{ id: 1, name: "a" }, { id: 2, name: "b" }];

//wont work as object not equal by reference
courses.includes({ id: 1, name: "a" });
//use find with calback function as parameter
const course = courses.find(function(course) {
  return course.name === "a";
});

//refactored ecma 6
const course = courses.find(course => course.name === "a");

console.log(course);
