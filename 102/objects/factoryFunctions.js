//factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    }
  };
}

const circle1 = createCircle(2);
console.log(circle1);
