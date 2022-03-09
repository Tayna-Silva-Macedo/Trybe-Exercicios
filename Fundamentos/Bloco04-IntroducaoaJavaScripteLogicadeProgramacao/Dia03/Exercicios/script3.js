let array = ["java", "javascript", "python", "html", "css"];
let maior = array[0];
let menor = array[0];

for (let i = 1; i < array.length; i += 1) {
  if (array[i].length > maior.length) {
    maior = array[i];
  }
}

for (let j = 1; j < array.length; j += 1) {
  if (array[j].length < menor.length) {
    menor = array[j];
  }
}

console.log("A maior palavra é: ", maior);
console.log("A menor palavra é: ", menor);
