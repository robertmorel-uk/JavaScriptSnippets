//use of args array to get sum of arguments
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5, 6)); //21

//get sum of arguments and apply discount
//rest operator must be last parameter
function sumDiscount(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sumDiscount(0.1, 20, 30)); //45
