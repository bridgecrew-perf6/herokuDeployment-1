const express = require('express');
const app = express();
const path = require('path');
var{booksData} = require('../constants/constants.js')
app.use(express.urlencoded())

app.get('/editBook' , (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views/editBook.html'))
})
app.post('/edited', (req, res)=>{
    console.log('inside post editBook route')
    const isbn = req.body.isbn
    console.log(req.body)
    books=  booksData.filter(book => book.isbn != isbn)
    books.push(req.body)
    // console.log(booksData)
    res.render(path.join(__dirname, '..', 'views/books.ejs'), {books})
} )


module.exports = {
    editBookRoute: app
}