const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  }
};

//iterate properties and methods
for (let key in circle) {
  console.log(key, circle[key]);
}

//create array all keys of circle object
for (let key of Object.keys(circle)) {
  console.log(key);
}

//create array all entries of circle object
for (let entry of Object.entries(circle)) {
  console.log(entry);
}

//check if property exist in object
if ("radius" in circle) {
  console.log("yes");
}
