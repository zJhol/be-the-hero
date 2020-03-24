const knex = require('knex');
const configuration = require('../../knexfile');

// Fazendo a conexão passando as configurações de desenvolvimento
const connection = knex(configuration.development);

module.exports = connection;