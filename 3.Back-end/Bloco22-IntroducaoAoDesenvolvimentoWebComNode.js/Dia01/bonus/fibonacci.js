const readLine = require('readline-sync');

const handleFibonacci = (n) => {
  let fibonacci = [];

  fibonacci[0] = 1;
  fibonacci[1] = 1;

  for (let i = 2; i < n; i += 1) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }

  if(n === 1) {
    return [fibonacci[0]];
  }

  return fibonacci;
};

const main = () => {
  const n = readLine.questionInt("Enter 'n' value: ");

  if (n <= 0) {
    return console.log("Enter a number greater then '0'!");
  }

  console.log(handleFibonacci(n));
};

main();
