const database = require('../database/database');

exports.getBooks = function() {
    return database.query('select * from livros');
}

exports.getBook = function(bookID) {
    return database.query('select * from livros where id = $1',[bookID]);
}

exports.deleteBook = function(bookID) {
    return database.none('delete from livros where id = $1',[bookID]);
}

exports.saveBook = function(book) {
    return database.one('insert into livros (nomelivros, nomeautor, assunto, editora, isbn, qntdEstoque) values ($1, $2, $3, $4, $5, $6) returning *',
    [book.nomelivros, book.nomeautor, book.assunto, book.editora, book.isbn, book.qntdEstoque]);
}

