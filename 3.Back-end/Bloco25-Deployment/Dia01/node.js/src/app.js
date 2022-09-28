const express = require('express');

const app = express();

app.use(express.json());

const MESSAGE = process.env.MESSAGE;

app.get('/', (req, res) => res.send(MESSAGE));

module.exports = app;
