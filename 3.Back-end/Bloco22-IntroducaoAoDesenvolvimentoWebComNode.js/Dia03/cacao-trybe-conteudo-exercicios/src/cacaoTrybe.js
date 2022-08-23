const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';

  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacaoTrybeFile = async (data) => {
  const path = '/files/cacaoTrybeFile.json';

  try {
    return await fs.writeFile(join(__dirname, path), JSON.stringify(data));
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.filter(
    (chocolate) => chocolate.brandId === brandId
  );
};

const getChocolateByName = async (name) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.filter((chocolate) =>
    chocolate.name.toLowerCase().includes(name.toLowerCase())
  );
};

const updateChocolate = async (id, newInformation) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const chocolateToUpdate = cacaoTrybe.chocolates.find(
    (chocolate) => chocolate.id === id
  );

  if (chocolateToUpdate) {
    cacaoTrybe.chocolates = cacaoTrybe.chocolates.map((chocolate) => {
      if (chocolate.id === id) return { ...chocolate, ...newInformation };

      return chocolate;
    });

    await writeCacaoTrybeFile(cacaoTrybe);
    return { ...chocolateToUpdate, ...newInformation };
  }

  return false;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolateByName,
  updateChocolate,
};
