const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'luizbnu321',
    host: 'localhost',
    port: '5432',
    database: 'livraria'
});

module.exports = db;