module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define(
    'UserBook',
    {},
    {
      tableName: 'users_books',
      timestamps: false,
      underscored: true,
    }
  );

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'bookId',
      otherKey: 'userId',
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'userId',
      otherKey: 'bookId',
    });
  };

  return UserBook;
};
