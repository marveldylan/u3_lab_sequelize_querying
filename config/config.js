module.exports = {
  development: {
    database: 'sequelize_querying_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'sequelize_querying_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
}
