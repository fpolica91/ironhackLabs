const express = require('express');
const router = express.Router();
const Author = require('../models/Author');





router.get('/authors/new', (req, res, next) => {
    res.render("./author/newAuth")
})


router.post('/authors/create', (req, res, next) => {
    Author.create(req.body)
        .then(author => res.redirect("/authors"))
        .catch(err => console.log('error creating author', err))

});

router.get("/authors", (req, res, next) => {
    Author
        .find()
        .then(auth => res.render("./author/allAuth", { auth }))
        .catch(err => console.log(err))
})

module.exports = router;