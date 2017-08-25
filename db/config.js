/* the db config is all set, but pay attention what db you bneed to create */

const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'movies_db_dev',
    port: 5432,
    host: 'localhost'
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp({
    database: 'movies_db_production',
    port: 5432,
    host: 'localhost'
  });
}

module.exports = db;
