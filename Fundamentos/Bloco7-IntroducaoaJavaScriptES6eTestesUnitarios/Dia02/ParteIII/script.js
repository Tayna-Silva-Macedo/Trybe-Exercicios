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

const listaChaves = (objeto) => Object.keys(objeto);

const tamanhoObjeto = (objeto) => Object.keys(objeto).length;

const valoresObjeto = (objeto) => Object.values(objeto);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

const totalEstudantes = (objeto) => {
  let total = 0;

  const lessons = Object.keys(objeto);
  for (let i = 0; i < lessons.length; i += 1) {
    total += objeto[lessons[i]].numeroEstudantes;
  }

  return total;
};

// console.log(totalEstudantes(allLessons));

const valorDaChave = (objeto, posicao) => Object.values(objeto)[posicao];

// console.log(valorDaChave(lesson1, 2));

const verificarPar = (objeto, chave, valor) => {
  const paresChaveValor = Object.entries(objeto);
  let contem = false;

  for (let i = 0; i < paresChaveValor.length; i += 1) {
    if (paresChaveValor[i][0] === chave && paresChaveValor[i][1] === valor) {
      contem = true;
    }
  }
  return contem ? "Sim" : "Não";
};

console.log(verificarPar(lesson3, "turno", "noite"));
