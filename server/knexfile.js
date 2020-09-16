
module.exports = {

  development: 
  {
    client: 'sqlite3',
    connection: {filename: './data/ingredients.db3'},
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {directory: './data/seeds'},
    debug: false
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
