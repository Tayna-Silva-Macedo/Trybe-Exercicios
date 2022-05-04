let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multiplicacao = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    let item = numbers[index] * numbers[index + 1];
    multiplicacao.push(item);
  } else {
    let item = numbers[index] * 2;
    multiplicacao.push(item);
  }
}

console.log(multiplicacao);
