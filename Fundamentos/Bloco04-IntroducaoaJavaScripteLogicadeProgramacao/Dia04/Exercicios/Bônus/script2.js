function arrayOfNumbers(vector) {
  let pares = [];
  for (let i = 0; i < vector.length; i += 1) {
    let subArray = vector[i];
    for (let j = 0; j < subArray.length; j += 1) {
      if (subArray[j] % 2 === 0) {
        pares.push(subArray[j]);
      }
    }
  }
  return pares;
}

console.log(
  arrayOfNumbers([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
  ])
);
