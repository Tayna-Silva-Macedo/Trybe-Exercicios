// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()

//         1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function comoMeVejo() {
  let descricao = document.getElementsByTagName("p");
  descricao[1].innerText =
    "Daqui a dois anos me vejo trabalhando na área da programação, ganhando um salário justo, que me sobre dinheiro para viajar.";
}
comoMeVejo();

//         2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function verdeTrybe() {
  let containerPrincipal = document.getElementsByClassName("main-content");
  containerPrincipal[0].style.backgroundColor = "rgb(76,164,109)";
}
verdeTrybe();

//         3. Crie uma função que mude a cor do quadrado vermelho para branco.
function corBranca() {
  let containerInterno = document.getElementsByClassName("center-content");
  containerInterno[0].style.backgroundColor = "white";
}
corBranca();

//         4. Crie uma função que corrija o texto da tag <h1>.
function corrigeTexto() {
  let titulo = document.getElementsByTagName("h1");
  titulo[0].innerText = "Exercício 5.1 - JavaScript";
}
corrigeTexto();

//         5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function paragrafosMaiusculo() {
  let paragrafos = document.getElementsByTagName("p");
  for (let i = 0; i < paragrafos.length; i += 1) {
    paragrafos[i].innerText = paragrafos[i].innerText.toUpperCase();
  }
}
paragrafosMaiusculo();

//         6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function imprimeParagrafos() {
  let paragrafos = document.getElementsByTagName("p");
  for (let i = 0; i < paragrafos.length; i += 1) {
    console.log(paragrafos[i].innerText);
  }
}
imprimeParagrafos();
