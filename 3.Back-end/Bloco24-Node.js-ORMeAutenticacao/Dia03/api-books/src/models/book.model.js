module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      releaseYear: {
        type: DataTypes.INTEGER,
      },
      totalPages: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'books',
      timestamps: false,
      underscored: true,
    }
  );

  return Book;
};
