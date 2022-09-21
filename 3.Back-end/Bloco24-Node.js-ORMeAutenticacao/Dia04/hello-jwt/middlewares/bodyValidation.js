const joiHelper = require('../helpers/joi');

const bodyValidation = (req, _res, next) => {
  const { username, password } = req.body;
  
  const { error } = joiHelper.loginSchema.validate({ username, password });

  if (error) return next(error);

  return next();
};

module.exports = bodyValidation;
