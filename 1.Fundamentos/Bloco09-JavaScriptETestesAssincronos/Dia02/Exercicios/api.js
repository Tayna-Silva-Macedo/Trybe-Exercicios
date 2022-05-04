const url = 'https://api.coincap.io/v2/assets';

const fetchCoins = async () => {
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const moedas = await dados.data;
    return moedas;    
  } catch (error) {
    console.log(error);    
  }
};

const configurarSaida = async () => {
  const moedas = await fetchCoins();

  const listaDeMoedas = document.getElementById('containerCrypto');

  const apenas10Primeiras = moedas.filter((moeda, i) => i < 10);

  apenas10Primeiras.forEach((moeda) => {
    const novaLi = document.createElement('li');
    const preco = Number(moeda.priceUsd).toFixed(2);

    novaLi.innerText = `${moeda.name} (${moeda.symbol}): ${preco}`;

    listaDeMoedas.appendChild(novaLi);
  });
};

window.onload = () => configurarSaida();
