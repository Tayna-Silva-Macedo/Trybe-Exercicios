const express = require('express');
const booksRoute = require('./routes/books.route');

const app = express();

app.use(express.json());
app.use('/books', booksRoute);

module.exports = app;
