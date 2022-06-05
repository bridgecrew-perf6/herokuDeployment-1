const express = require('express');
const app = express();
const path = require('path');
const {booksData} = require('../constants/constants.js')

app.get('/books', (req, res)=>{
    let books = booksData
    res.render(path.join(__dirname , '..', 'views/books.ejs'), {books})
})

app.get('/book/:isbn', (req, res)=>{
    var ISBN = req.params.isbn
    let books =  []
    books.push(booksData.find(book => book.isbn == ISBN))
    res.render(path.join(__dirname , '..', 'views/books.ejs'), {books})
})
module.exports = {
    viewBooksRoute : app
}