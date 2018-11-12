let carParts = {
  engine: true,
  wheels: 4,
  model: "Ford"
}

console.log(carParts);

//add properties using dot or bracket notation
carParts.age = 8;
carParts["ageString"] = "8 years, 3 months";

let selection = "roadStatus";
carParts[selection] = true;

console.log(carParts);