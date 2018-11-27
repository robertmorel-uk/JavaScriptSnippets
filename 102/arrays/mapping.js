const numbers = [1, -1, 2, 3];
//filter numbers greater than 0
const filtered = numbers.filter(n => n > 0);
//wrap each element in li tag
const items = filtered.map(n => "<li>" + n + "</li>");
//return string of array wrapped in <ul> tags
const html = "<ul>" + items.join("") + "</ul>";

console.log(items);
console.log(html);

//map array element to an array of objects
const itemsObj = filtered.map(n => {
  const obj = { value: n };
  return obj;
});

//refactored ecma6
//const itemsObj = filtered.map(n => ({ value: n }));

console.log(itemsObj);
