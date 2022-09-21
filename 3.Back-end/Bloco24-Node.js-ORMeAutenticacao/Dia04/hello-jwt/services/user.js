const tokenHelper = require('../helpers/token');
const model = require('../models/User');

const login = async (username, password) => {
  const user = await model.findByUsername(username);

  if (!user || user.password !== password) {
    return {
      error: {
        message: 'Invalid username or password',
        type: 'invalidCredentials',
      },
    };
  }

  const payload = {
    username,
    admin: user.admin,
  };

  const token = tokenHelper.create(payload);

  return { token };
};

const create = async ({ username, password }) => {
  const userExists = await model.findByUsername(username);

  if (userExists) {
    return {
      error: {
        message: 'user already exists',
        type: 'usernameExists',
      },
    };
  }

  const admin = Math.floor(Math.random() * 100) > 50;

  await model.create({ username, password }, admin);

  return login(username, password);
};

module.exports = {
  create,
  login,
};
