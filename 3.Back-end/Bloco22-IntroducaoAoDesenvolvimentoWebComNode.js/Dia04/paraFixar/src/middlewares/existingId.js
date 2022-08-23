const teams = require('../files/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((team) => team.id === id)) {
    next();
  } else {
    res.sendStatus(404);
  }
};

module.exports = existingId;