const { User, Book } = require('../models');

const getBooksByUserId = (id) => {
  return User.findOne({
    where: { id },
    include: [{ as: 'books', model: Book, through: { attributes: [] } }],
  });
};

module.exports = {
  getBooksByUserId,
};
