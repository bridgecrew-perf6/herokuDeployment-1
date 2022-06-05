const express = require('express');
const app = express();
const path = require('path');
var{booksData} = require('../constants/constants.js')

app.get('/deleteBook/:isbn' , (req, res) => {
    const isbn = req.params.isbn
    books = booksData.filter(book => book.isbn != isbn)
    res.render(path.join(__dirname, '..', 'views/books.ejs'), {books})
})

module.exports = {
    deleteBookRoute: app
}