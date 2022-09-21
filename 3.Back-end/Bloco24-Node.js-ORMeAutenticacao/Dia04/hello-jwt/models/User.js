const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.join(__dirname, 'data', 'users.json');

const readUsers = async () => {
  try {
    const contentFile = await fs.readFile(DATA_PATH, 'utf-8');

    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const setUsers = async (user) => {
  await fs.writeFile(DATA_PATH, JSON.stringify(user));
};

const getAll = async () => {
  const users = await readUsers();

  return users;
};

const findByUsername = async (username) => {
  const users = await getAll();
  const userFind = users.find((user) => user.username === username);

  return userFind;
};

const create = async (newUser, admin) => {
  const users = await getAll();

  const newUsersFile = [...users, { ...newUser, admin }];

  await setUsers(newUsersFile);
};

module.exports = {
  getAll,
  findByUsername,
  create,
};
