// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const meuObjeto = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, meuObjeto)
    .then((resposta) => resposta.json())
    .then(
      (dados) =>
        (document.getElementById('jokeContainer').innerText = dados.joke)
    )
    .catch((error) => console.log(error));
};

window.onload = () => fetchJoke();
