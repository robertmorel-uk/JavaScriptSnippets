//Output FizzBuzz if 3 or 5
const output = fizzBuzz(90);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}

//fizzbuzz loop
function fizzbuzzLoop() {
  let i = false;
  if (typeof i != "number") console.log(NaN);

  for (i = 0; i < 50; i++) {
    if (i % 5 == 0 && i % 3 == 0) console.log("FizzBuzz" + i);
    else if (i % 3 == 0) console.log("Fizz" + i);
    else if (i % 5 == 0) console.log("Buzz" + i);
  }
}

fizzbuzzLoop();

//document.getElementById('numberOnPage').innerHTML = 'FizzBuzz Code';
function evenOdd(number) {
  for (i = 0; i <= 10; i++) {
    if (i % 2 == 0) console.log(i + " Even");
    else console.log(i + " Odd");
  }
}

evenOdd();
