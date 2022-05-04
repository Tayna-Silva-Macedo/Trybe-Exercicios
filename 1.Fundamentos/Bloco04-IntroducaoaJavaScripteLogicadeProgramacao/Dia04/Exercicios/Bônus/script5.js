let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

let moradoresBloco1 = moradores.blocoUm;
let moradoresBloco2 = moradores.blocoDois;

console.log("Moradores Bloco 1: ");
for (let i = 0; i < moradoresBloco1.length; i += 1) {
  console.log(moradoresBloco1[i].nome, moradoresBloco1[i].sobrenome);
}

console.log("Moradores Bloco 2: ");
for (let i = 0; i < moradoresBloco2.length; i += 1) {
  console.log(moradoresBloco2[i].nome, moradoresBloco2[i].sobrenome);
}
