const express = require('express');
const app = express();
const {viewBooksRoute} = require('./getBook.js')
const {editBookRoute} = require('./editBook.js')
const {deleteBookRoute} = require('./deleteBook.js')
const {addBookRoute} = require('./addBook.js')
var PORT = process.env.PORT || 8080

app.use(viewBooksRoute, editBookRoute, deleteBookRoute, addBookRoute)

app.listen(PORT)