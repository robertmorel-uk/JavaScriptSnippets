function interest(principal, rate, years) {
  //set default rate if not set
  rate = rate || 3.5;
  years = years || 5;

  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5));

//ECMA6

function interestEcma(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interestEcma(10000, 3.5, 5));
