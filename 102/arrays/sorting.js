const numbers = [2, 3, 1];
numbers.sort();
numbers.reverse();

const people = [
  {
    name: "Rob"
  },
  {
    name: "john"
  }
];

//sort case insensitive by name
people.sort(function(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(people);
