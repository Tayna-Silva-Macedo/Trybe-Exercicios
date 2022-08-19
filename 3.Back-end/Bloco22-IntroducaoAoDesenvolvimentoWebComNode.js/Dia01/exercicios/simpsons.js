const fs = require('fs').promises;

const readAll = async () => {
  const simpsonsJSON = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsObjs = JSON.parse(simpsonsJSON);
  const simpsonsStrings = simpsonsObjs.map(({ id, name }) => `${id} - ${name}`);

  simpsonsStrings.forEach((simpson) => console.log(simpson));
};

const getSimpsonById = async (id) => {
  const simpsonsJSON = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsObjs = JSON.parse(simpsonsJSON);
  const chosenSimpson = simpsonsObjs.find(
    (simpson) => Number(simpson.id) === id
  );

  if (!chosenSimpson) throw new Error('id não encontrado');

  return chosenSimpson;
};

const filterSimpsons = async () => {
  const simpsonsJSON = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsObjs = JSON.parse(simpsonsJSON);
  const newSimpsonsObjs = simpsonsObjs.filter(
    (simpson) => simpson.id !== '10' && simpson.id !== '6'
  );

  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsonsObjs));
};

const createSimpsonsFamily = async () => {
  const simpsonsJSON = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsObjs = JSON.parse(simpsonsJSON);

  const ids = [1, 2, 3, 4];
  const simpsonsFamily = simpsonsObjs.filter((simpson) =>
    ids.includes(Number(simpson.id))
  );

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
};

const addNelsonToFamily = async () => {
  const familyJSON = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const familyObjs = JSON.parse(familyJSON);

  familyObjs.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(familyObjs));
};

const replaceNelson = async () => {
  const familyJSON = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const familyObjs = JSON.parse(familyJSON);

  const withOutNelson = familyObjs.filter(
    (simpson) => simpson.name != 'Nelson Muntz'
  );

  withOutNelson.push({ id: '5', name: 'Maggie Simpson' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(withOutNelson));
};

const main = async () => {
  await readAll();

  try {
    const simpson = await getSimpsonById(1);
    console.log(simpson);
  } catch (error) {
    console.log(error.message);
  }

  await filterSimpsons();

  await createSimpsonsFamily();

  await addNelsonToFamily();

  await replaceNelson();
};

main();
