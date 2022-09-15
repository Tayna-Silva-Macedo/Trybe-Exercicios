const booksService = require('../services/books.service');

const error500Message = 'Algo deu errado';

const getAll = async (req, res) => {
  try {
    const { author } = req.query;

    let books;

    if (author) {
      books = await booksService.getByAuthor(author);
    } else {
      books = await booksService.getAll();
    }

    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await booksService.getById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;

    const newBook = await booksService.create({
      title,
      author,
      pageQuantity,
      publisher,
    });

    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity, publisher } = req.body;

    const updatedBook = await booksService.update(id, {
      title,
      author,
      pageQuantity,
      publisher,
    });

    if (!updatedBook)
      return res.status(404).json({ message: 'Book not found!' });

    return res.status(200).json({ message: 'Book updated!' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await booksService.remove(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book removed' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
