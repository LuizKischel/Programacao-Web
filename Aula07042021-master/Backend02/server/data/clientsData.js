const database = require('../database/database');

exports.getClients = function() {
    return database.query('select * from clientes');
}

exports.getClient = function(clientID) {
    return database.query('select * from clientes where id = $1',[clientID]);
}

exports.deleteClient = function(clientID) {
    return database.none('delete from clientes where id = $1',[clientID]);
}

exports.saveClient = function(client) {
    return database.one('insert into clientes (nome, endereco, cnpj, cpf) values ($1, $2, $3, $4) returning *',
    [client.nome, client.endereco, client.cnpj, client.cpf]);
}