const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    desc: String,
    rating: String,
    imageUrl: String,
    author: {
        // this refers to Author.js, mongo, provides a unique objID, relative database
        type: Schema.Types.ObjectId,
        ref: "Author"
    }

}, {
        timestamps: true
    })


const Book = mongoose.model("Book", bookSchema);


module.exports = Book;