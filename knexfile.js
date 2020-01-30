// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/testdb.db'
    }
  },

  migrations: {
    directory: './data/migrations',
    tableName: 'dbmigrations',
  }

};
