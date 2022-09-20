const jwt = require('jsonwebtoken');
const model = require('../models/User');

const { JWT_SECRET } = process.env;

const login = async (username, password, admin = false) => {
  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    return {
      error: {
        message: 'Invalid username or password',
        code: 'invalidCredentials',
      },
    };
  }

  const isAdmin = admin || (username === 'admin' && password === 's3nh4S3gur4???');

  const payload = {
    username,
    admin: isAdmin,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token };
};

const create = async (username, password) => {
  const userExists = await model.findOne(username);

  if (userExists) {
    return {
      error: {
        message: 'Username already exists',
        code: 'usernameExists',
      },
    };
  }

  const admin = Math.floor(Math.random() * 100) > 50;

  await model.create(username, password, admin);

  return login(username, password, admin);
};

module.exports = {
  create,
  login,
};
