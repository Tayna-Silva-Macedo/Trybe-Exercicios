const custo = 65;
const venda = 100;

if (custo >= 0 && venda >= 0) {
  const custoTotal = 1.2 * custo;
  const lucroTotal = (venda - custoTotal) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Os valores não podem ser negativos!");
}
