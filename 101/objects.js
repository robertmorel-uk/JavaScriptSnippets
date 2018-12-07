// Object that defines properties and methods of a car
let carParts = {
  engine: true,
  wheels: 4,
  model: "Ford",
  drive: function() {},
  brake() {} // ecma6 method
};

console.log(carParts);
//{ engine: true,wheels: 4,model: 'Ford',drive: [Function: drive],brake: [Function: brake] }

// Add properties using dot or bracket notation
carParts.age = 8;
carParts["ageString"] = "8 years, 3 months";

let selection = "roadStatus";
carParts[selection] = true;

console.log(carParts);
//{ engine: true, wheels: 4, model: 'Ford', drive: [Function: drive],
//brake: [Function: brake], age: 8, ageString: '8 years, 3 months', roadStatus: true }
