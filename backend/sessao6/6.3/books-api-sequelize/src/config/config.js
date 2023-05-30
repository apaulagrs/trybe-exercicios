const configDevelopment = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_DEVELOPMENT,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

const configTest = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_TEST,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

const configProduction = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_PRODUCTION,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: configDevelopment,
  test: configTest,
  production: configProduction,
};