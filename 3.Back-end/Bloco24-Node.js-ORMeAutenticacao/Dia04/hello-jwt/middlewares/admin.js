const admin = (req, res, next) => {
  const { admin: isAdmin } = req.user;

  if (!isAdmin) {
    const err = new Error('Restricted acess');
    err.statusCode = 403;
    return next(err);
  }

  return next();
};

module.exports = admin;
