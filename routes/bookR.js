const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Author = require('../models/Author')




router.get('/books/new', (req, res, next) => {
    Author.find()
        .then(auth => res.render("./books/newBook", { auth }))
        .catch(err => console.log(err))
})


router.post('/books/create', (req, res, next) => {
    Book.create(req.body)
        .then(book => res.redirect('/books'))
        .catch(err => console.log(err))
})

router.get("/books", (req, res, next) => {
    Book
        .find()
        .then(book => res.render("books/allBooks", { book }))
        .catch(err => console.log(err))
})



router.post("/books/:id/delete", (req, res, next) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => res.redirect("/books"))
        .catch(err => console.log("error deleting book"))
})




router.get("/books/:id/edit", (req, res, next) => {
    Book.findById(req.params.id)
        .then(book => {
            Author.find()
                .then(authors => {
                    res.render("books/editBook", { book, authors })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})

router.post("/books/:id/update", (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.redirect(`/books/${book._id}`))
        .catch(err => console.log(err))

})



router.get("/books/:id", (req, res, next) => {
    Book.findById(req.params.id)
        .populate('author')
        .then(book => {
            res.render("books/bookDetails", { book })
        })
        .catch(err => console.log(err))
})





module.exports = router;