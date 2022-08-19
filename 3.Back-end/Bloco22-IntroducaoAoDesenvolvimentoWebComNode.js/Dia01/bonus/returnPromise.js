const doMath = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (
      typeof num1 !== 'number' ||
      typeof num2 !== 'number' ||
      typeof num3 !== 'number'
    ) {
      return reject(new Error('Informe apenas números'));
    }

    const result = (num1 + num2) * num3;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
};

const main = async () => {
  try {
    const resolve = await doMath(5, 7, 5);
    console.log(resolve);
  } catch (error) {
    console.log(error.message);
  }
};

main();
