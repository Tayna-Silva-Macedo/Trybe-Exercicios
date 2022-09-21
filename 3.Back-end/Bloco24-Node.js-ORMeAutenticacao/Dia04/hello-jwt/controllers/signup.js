const service = require('../services/user');

const signup = async (req, res, next) => {
  const { username, password } = req.body;

  const { error, token } = await service.create({ username, password });

  if (error && error.type === 'usernameExists') {
    const err = new Error(error.message);
    err.statusCode = 409;
    return next(err);
  }

  return res.status(201).json({ token });
};

module.exports = signup;
