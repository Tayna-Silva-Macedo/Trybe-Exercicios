const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const adicionarChaveValor = (objeto, chave, valor) => (objeto[chave] = valor);

adicionarChaveValor(lesson2, "turno", "noite");

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const alunosMatematica = (objeto) => {
  let total = 0;
  const chaves = Object.keys(objeto);

  for (let i = 0; i < chaves.length; i += 1) {
    if (objeto[chaves[i]].materia === "Matemática") {
      total += objeto[chaves[i]].numeroEstudantes;
    }
  }
  return total;
};

// console.log(alunosMatematica(allLessons));

const informacoes = (objeto, professor) => {
  let materias = [];
  let numeroDeEstudantes = 0;
  const valores = Object.values(objeto);
  for (let i = 0; i < valores.length; i += 1) {
    if (valores[i].professor === professor) {
      materias.push(valores[i].materia);
      numeroDeEstudantes += valores[i].numeroEstudantes;
    }
  }
  return { aulas: materias, estudantes: numeroDeEstudantes };
};

const relatorio = (objeto, professor) => {
  let relatorioFinal = {};
  relatorioFinal.professor = professor;
  Object.assign(relatorioFinal, informacoes(objeto, professor));
  return relatorioFinal;
};

console.log(relatorio(allLessons, "Maria Clara"));
