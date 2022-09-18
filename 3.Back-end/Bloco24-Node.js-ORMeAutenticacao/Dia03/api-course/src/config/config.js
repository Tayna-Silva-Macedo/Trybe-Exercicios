module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'associations',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'associations_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: 'root',
    password: null,
    database: 'associations_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
