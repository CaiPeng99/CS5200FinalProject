const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookId:{
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    title:{
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: false,
    },
    summary: {
        type: String,
        required: false,
    },
    seriesName: {
        type: String,
        required: false,
    },
    genres: {
        type: String,
        required: false,
    },
    form: {
        type: String,
        required: false,
    },
    format: {
        type: String,
        required: false,
    },
    ISBN: {
        type: String,
        required: false,
    },
    pages: {
        type: Number,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    publisher: {
        type: String,
        required: false,
    },
    publicationYear: {
        type: Number,
        required: false,
    },
    subgenres: {
        type: String,
        required: false,
    },
    lexile: {
        type: String,
        required: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        required: false,
    }
  }, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;