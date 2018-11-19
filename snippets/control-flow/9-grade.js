function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}

const grades = [95, 77, 92, 33];
let average = calculateAverage(grades);
let grade_average = calculateGrade(grades);

console.log("Average score is: " + average);
console.log("Average grade is: " + grade_average);
