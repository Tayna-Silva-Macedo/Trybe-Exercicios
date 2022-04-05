const techList = (array, nome) => {
  if (array.length === 0) {
    return "Vazio!";
  }

  const listaOrdenada = array.sort();
  const novaArray = [];

  for (let i = 0; i < listaOrdenada.length; i += 1) {
    novaArray.push({
      tech: listaOrdenada[i],
      name: nome,
    });
  }
  return novaArray;
};

module.exports = techList;
