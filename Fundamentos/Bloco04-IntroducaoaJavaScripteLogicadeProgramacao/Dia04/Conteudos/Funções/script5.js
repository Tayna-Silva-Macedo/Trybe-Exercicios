function triangulo(firstAngle, secondAngle, thirdAngle) {
  const positive = firstAngle > 0 && secondAngle > 0 && thirdAngle > 0;
  const soma = firstAngle + secondAngle + thirdAngle;

  if (positive) {
    if (soma === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return "O valor não pode ser negativo ou zero!";
  }
}

console.log(triangulo(60, 60, 60));
