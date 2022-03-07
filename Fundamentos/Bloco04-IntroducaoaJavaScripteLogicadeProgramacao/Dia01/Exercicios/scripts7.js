const grade = 100;

if (grade >= 90 && grade <= 100) {
  console.log("Nota: A");
} else if (grade >= 80 && grade < 90) {
  console.log("Nota: B");
} else if (grade >= 70 && grade < 80) {
  console.log("Nota: C");
} else if (grade >= 60 && grade < 70) {
  console.log("Nota: D");
} else if (grade >= 50 && grade < 60) {
  console.log("Nota: E");
} else if (grade < 50 && grade > 0) {
  console.log("Nota: F");
} else {
  console.log("Nota inválida!");
}
