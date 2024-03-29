const BookService = require('../services/book.service');

const error500Message = 'An error has occurred';

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    let books;

    if (author) {
      books = await BookService.getByAuthor(author);
    } else {
      books = await BookService.getAll();
    }

    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error500Message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await BookService.createBook(title, author, pageQuantity, publisher);

    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error500Message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const { id } = req.params;
    const book = await BookService.updateBook(id, title, author, pageQuantity, publisher);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Successfully updated book' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error500Message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.deleteBook(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Successfully deleted book' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};