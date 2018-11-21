const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  }
};

//copy circle object using old method
const another = {};

for (let key in circle) {
  another[key] = circle[key];
}

console.log(another);

//refactored
const anotherCircle = Object.assign({}, circle);
console.log(anotherCircle);

//using spread
const anotherSpread = { ...circle };
console.log(anotherSpread);
