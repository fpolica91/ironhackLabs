const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    firstName: String,
    lastName: String,
    nationality: String,
    birthday: Date,
    imageUrl: {
        type: String,
        default: "https://vignette.wikia.nocookie.net/race-and-gender-in-memes/images/c/cc/Phone_1.png/revision/latest?cb=20151211185028"
    }

}, {
        timestamps: true
    })

const Author = mongoose.model("Author", authorSchema);


module.exports = Author;