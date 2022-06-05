const express = require('express');
const app = express();
const path = require('path');
var{booksData} = require('../constants/constants.js')
app.use(express.urlencoded())

app.get('/addBook', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views/addBook.html'))
})

app.post('/addBook', (req, res) => {
    booksData.push(req.body)
    books = booksData
    res.render(path.join(__dirname , '..', 'views/books.ejs'), {books})
})

module.exports = {
    addBookRoute : app
}