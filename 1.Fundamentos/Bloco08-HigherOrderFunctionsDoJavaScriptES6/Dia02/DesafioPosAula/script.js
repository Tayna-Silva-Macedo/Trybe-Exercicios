// Desafios pós aula
// Com base no Array abaixo e usando o forEach faça o log de todas as entradas no seguinte formato:
// `${nome} ${sobreNome} tem carta de motorista? ${temCNH ? Sim : Não}

const usuarios = [
  { nome: "Homer", sobreNome: "Simpson", temCNH: true },
  { nome: "Marge", sobreNome: "Simpson", temCNH: true },
  { nome: "Bart", sobreNome: "Simpson", temCNH: false },
  { nome: "Lisa", sobreNome: "Simpson", temCNH: false },
  { nome: "Maggie", sobreNome: "Simpson", temCNH: false },
];

const imprimeSeTemCNHOuNao = (array) => {
  array.forEach((usuario) => {
    console.log(
      `${usuario.nome} ${usuario.sobreNome} tem carta de motorista? ${
        usuario.temCNH ? "Sim" : "Não"
      }`
    );
  });
};

imprimeSeTemCNHOuNao(usuarios);

// Use o FIND para retornar o estado que tem a sigla RR (use mais siglas para validar seu código)
// Use o forEach para fazer o LOG de todos os estados do array da seguinte forma:
// Sigla: SP, Estado: São Paulo - Observação: em ordem alfabética por estado invertida
// Ordene o array de estados
const estados = [
  { AC: "Acre" },
  { AL: "Alagoas" },
  { AP: "Amapá" },
  { AM: "Amazonas" },
  { BA: "Bahia" },
  { CE: "Ceará" },
  { DF: "Distrito Federal" },
  { ES: "Espírito Santo" },
  { GO: "Goías" },
  { MA: "Maranhão" },
  { MT: "Mato Grosso" },
  { MS: "Mato Grosso do Sul" },
  { MG: "Minas Gerais" },
  { PA: "Pará" },
  { PB: "Paraíba" },
  { PR: "Paraná" },
  { PE: "Pernambuco" },
  { PI: "Piauí" },
  { RJ: "Rio de Janeiro" },
  { RN: "Rio Grande do Norte" },
  { RS: "Rio Grande do Sul" },
  { RO: "Rondônia" },
  { RR: "Roraíma" },
  { SC: "Santa Catarina" },
  { SP: "São Paulo" },
  { SE: "Sergipe" },
  { TO: "Tocantins" },
];

console.log(estados.find((estado) => estado.SP));

estados.reverse();

estados.forEach((estado) => {
  console.log(
    `Sigla: ${Object.keys(estado)}, Estado: ${Object.values(estado)}`
  );
});

// Ordene o vetor de estudantes da maior para a menor média, lembrando que a média
// pode ser calculada somando-se as notas de avalição, projeto e trabalho em grupo
// e dividindo por 3

const pessoasEstudantes = [
  { nome: "Alexandre", avaliacao: 7, projeto: 5.5, trabalhoGrupo: 8 },
  { nome: "Marcondes", avaliacao: 6, projeto: 7.5, trabalhoGrupo: 5 },
  { nome: "Rodrigo", avaliacao: 8.5, projeto: 9, trabalhoGrupo: 7 },
  { nome: "Marcella", avaliacao: 8, projeto: 7, trabalhoGrupo: 4 },
  { nome: "Adriana", avaliacao: 9, projeto: 7, trabalhoGrupo: 7 },
  { nome: "Marlene", avaliacao: 7.5, projeto: 8, trabalhoGrupo: 7 },
];

const ordenaPelaMaiorMedia = (array) => {
  array.forEach((pessoa) => {
    let media = (pessoa.avaliacao + pessoa.projeto + pessoa.trabalhoGrupo) / 3;
    pessoa.media = media.toFixed(1);
  });

  array.sort((a, b) => b.media - a.media);

  array.forEach((pessoa) => {
    delete pessoa.media;
  });

  return array;
};

console.log(ordenaPelaMaiorMedia(pessoasEstudantes));
