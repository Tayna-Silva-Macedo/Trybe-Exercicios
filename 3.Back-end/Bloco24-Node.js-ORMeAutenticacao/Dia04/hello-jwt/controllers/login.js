const services = require('../services/user');

const login = async (req, res, next) => {
  const { username, password } = req.body;

  const { error, token } = await services.login(username, password);

  if (error && error.type === 'invalidCredentials') {
    const err = new Error(error.message);
    err.statusCode = 404;
    return next(err);
  }

  return res.status(200).json({ token });
};

module.exports = login;
