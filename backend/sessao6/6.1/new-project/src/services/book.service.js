const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    oder: [['title', 'ASC']],
  });
  return books;
};

const getById = async (id) => {
  const books = await Book.findByPk(id);
  return books;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });
  return books;
};

const createBook = async (title, author, pageQuantity, publisher) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });
  return newBook;
};

const updateBook = async (id, title, author, pageQuantity, publisher) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id }},
  );
  console.log(updatedBook);
  return updatedBook;
};

const deleteBook = async (id) => {
  const book = await Book.destroy({ where: { id } });
  console.log(book);
  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
  getByAuthor,
};