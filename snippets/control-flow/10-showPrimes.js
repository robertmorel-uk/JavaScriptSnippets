//Show all prime numbers up to limit
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

//Check if a number is prime
function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

console.log(showPrimes(53));
console.log(isPrime(53));
