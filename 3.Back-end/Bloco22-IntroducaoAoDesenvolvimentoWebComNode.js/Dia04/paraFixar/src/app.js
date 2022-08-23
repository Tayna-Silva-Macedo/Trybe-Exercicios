const express = require('express');

const existingId = require('./middlewares/existingId');
const validateTeam = require('./middlewares/validateTeam');

const teams = require('./files/teams');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', validateTeam, (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);

  const team = teams.find((team) => team.id === id);
  const index = teams.indexOf(team);

  const updated = { id, ...req.body };

  teams.splice(index, 1, updated);

  res.status(201).json(updated);
});

app.get('/teams/:id', existingId, (req, res) => {
  const team = teams.find(({ id }) => id === Number(req.params.id));

  res.status(200).json(team);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);

  const team = teams.find((team) => team.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);

  res.status(200).end();
});

module.exports = app;
