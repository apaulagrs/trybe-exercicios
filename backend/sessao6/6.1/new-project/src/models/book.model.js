const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  // toda vez que o servidor for iniciado a tabela será recriada. útil em testes, mas não em produção.
  (async () => {
    await sequelize.sync({ force: true });
  })();

  return Book;
};

module.exports = bookModel;