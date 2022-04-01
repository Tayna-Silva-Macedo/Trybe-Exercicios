// const numero = 4;

// const fatorial = (numero) => {
//   let fatorial = 1;
//   for (let i = numero; i > 0; i -= 1) {
//     fatorial *= i;
//   }
//   return `O fatorial de ${numero} é: ${fatorial}`;
// };

// console.log(fatorial(numero));

// const fatorial = (numero) => numero > 1 ? numero * fatorial(numero - 1) : 1;

// console.log(fatorial(numero));

// const maiorPalavra = (frase) => {
//   const arrayDePalavras = frase.split(" ");
//   let maior = arrayDePalavras[0].length;
//   let resposta = arrayDePalavras[0];

//   for (let i = 1; i < arrayDePalavras.length; i += 1) {
//     if (arrayDePalavras[i].length > maior) {
//       maior = arrayDePalavras[i].length;
//       resposta = arrayDePalavras[i];
//     }
//   }
//   return `A maior palavra é "${resposta}" e possui ${maior} letras.`;
// };

// console.log(
//   maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu")
// );

// const maiorPalavra = (frase) => frase.split(' ').sort((palavraA, palavraB) => palavraB.length - palavraA.length)[0];

// console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));

// const botao = document.querySelector('button');
// const texto = document.querySelector('p');
// let cliques = 0;

// const contador = () => texto.innerText = `Número de cliques: ${cliques += 1}`;

// botao.addEventListener('click', contador);

const skills = ["Android", "iOS", "Architecture", "Teach", "Run"];

function construindoFraseSkills(par1) {
  const funcao1 = (parInterno) => `Tryber ${parInterno} aqui!
  
  Tudo bem?`;

  let resultado = `${funcao1(par1)}
  
  Minhas cinco principais habilidades são:`;

  skills.forEach(
    (skill, index) =>
      (resultado = `${resultado}
  
  -${skill}`)
  );

  resultado = `
  ${resultado}
  
  #goTrybe
  `;

  return resultado;
}

console.log(construindoFraseSkills("Tayná"));
