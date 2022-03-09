let palavra = "banana";
let inversa = "";

for (let i = palavra.length - 1; i >= 0; i -= 1) {
  inversa += palavra[i];
}

console.log(inversa);
