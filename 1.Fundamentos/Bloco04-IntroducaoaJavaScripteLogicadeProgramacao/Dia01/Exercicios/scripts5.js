const firstAngle = 60;
const secondAngle = 60;
const thirdAngle = 60;

const positive = firstAngle > 0 && secondAngle > 0 && thirdAngle > 0;
const soma = firstAngle + secondAngle + thirdAngle;

if (positive) {
  if (soma === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("O valor não pode ser negativo ou zero!");
}