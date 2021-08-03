// Update with your config settings.

require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: __dirname + '/DB/migrations'
    },
    seeds: {
      directory: __dirname + '/DB/seeds'
    },
  }
};

// module.exports = {

//   development: {
//     client: 'postgresql',
//     connection: {
//       user: process.env.BD_USER,
//       password: process.env.DB_PW,
//       database: process.env.DB_NAME
//     },
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user: 'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user: 'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
