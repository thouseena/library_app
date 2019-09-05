//database connnection


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryApp');
const Schema = mongoose.Schema;


var NewBookSchema = new Schema({
    title: String,
    genre: String,
    author: String
});


var Bookdata = mongoose.model('Book-data', NewBookSchema);

module.exports = Bookdata;