const url = 'https://api.coincap.io/v2/assets';
const urlConversao =
  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

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

const fetchUsdCurrencies = async () => {
  try {
    const resposta = await fetch(urlConversao);
    const dados = await resposta.json();
    const conversao = await dados.usd;
    return conversao;
  } catch (error) {
    console.log(error);
  }
};

const configurarSaida = async () => {
  const moedas = await fetchCoins();
  const conversao = await fetchUsdCurrencies();

  const listaDeMoedas = document.getElementById('containerCrypto');

  const apenas10Primeiras = moedas.filter((moeda, i) => i < 10);

  apenas10Primeiras.forEach((moeda) => {
    const novaLi = document.createElement('li');
    const preco = Number(moeda.priceUsd);
    const precoConvertido = (preco * conversao.brl).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

    novaLi.innerText = `${moeda.name} (${moeda.symbol}): ${precoConvertido}`;

    listaDeMoedas.appendChild(novaLi);
  });
};

window.onload = () => configurarSaida();
