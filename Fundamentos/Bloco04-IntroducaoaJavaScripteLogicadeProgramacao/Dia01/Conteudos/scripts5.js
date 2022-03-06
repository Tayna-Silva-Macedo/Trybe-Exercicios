const test = 70;
let result = "";

if (test >= 80) {
  result = "aprovada"
}

else if (test < 80 && test >= 60) {
  result = "lista"
}

else {
  result = "reprovada"
}

switch (result) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera.");
    break;

  case "reprovada":
    console.log("Você foi reprovada(o).");
    break;

  default:
    console.log("Não se aplica")
    break;
}