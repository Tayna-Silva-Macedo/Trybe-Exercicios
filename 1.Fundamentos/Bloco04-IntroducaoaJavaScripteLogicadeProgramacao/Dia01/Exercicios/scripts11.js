const salarioBruto = 3000;
let inss;
let ir;

if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
  inss = 0.08 * salarioBruto;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = 0.09 * salarioBruto;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = 0.11 * salarioBruto;
} else if (salarioBruto > 5189.82) {
  inss = 570.88;
} else {
  inss = "O salário bruto deve ser um valor positivo!";
}

const salarioBase = salarioBruto - inss;

if (salarioBase >= 0 && salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  ir = 0.075 * salarioBase - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  ir = 0.15 * salarioBase - 354.8;
} else if ((salarioBase >= 3751.06 && salarioBase <= 4664, 68)) {
  ir = 0.225 * salarioBase - 636.13;
} else if (salarioBase > 4664.68) {
  ir = 0.275 * salarioBase - 869.36;
} else {
  ir = "O salário bruto deve ser um valor positivo!";
}

const salarioLiquido = salarioBase - ir;

console.log("O salário líquido é: " + salarioLiquido);
