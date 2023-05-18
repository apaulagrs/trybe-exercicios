const { 
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,  
} = require('sequelize-test-helpers');
const BookModel = require('../../src/models/book.model');

describe('Book Model', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('have name "Book"', () => {
    checkModelName(Book)('Book');
  })
  it('have "title", "author", "pageQuantity" and "publisher" property', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
});