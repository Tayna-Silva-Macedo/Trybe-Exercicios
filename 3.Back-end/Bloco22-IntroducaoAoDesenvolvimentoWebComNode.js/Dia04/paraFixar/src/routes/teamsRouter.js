const express = require('express');

const validateTeam = require('../middlewares/validateTeam');
const existingId = require('../middlewares/existingId');
const apiCredentials = require('../middlewares/apiCredentials');

const teams = require('../files/teams');
let nextId = 3;

const router = express.Router();

router.get('/', (req, res) => res.json(teams));

router.use(apiCredentials);

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', validateTeam, (req, res) => {
  if (
    !req.teams.teams.includes(req.body.initials) ||
    teams.some((team) => team.initials === req.body.initials)
  ) {
    return res.sendStatus(401);
  }

  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;

  res.status(201).json(team);
});

router.put('/:id', validateTeam, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);

  res.status(201).json(updated);
});

router.delete('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  
  res.sendStatus(200).end();
});

module.exports = router;
