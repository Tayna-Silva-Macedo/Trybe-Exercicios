const tokenHelper = require('../helpers/token');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = tokenHelper.verify(authorization);

    req.user = payload;

    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};

module.exports = auth;
