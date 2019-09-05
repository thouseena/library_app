const express = require('express');
const booksRouter = express.Router();
const mongoose = require('mongoose');
const Bookdata = require('../model/Bookdata');


function router(nav, books) {


    booksRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            Bookdata.findOne({
                    _id: id
                })
                .then(function (book) {
                    res.render('book', {
                        nav,
                        title: book.title,
                        book
                    });
                });
        });

    booksRouter.route('/')
        .get((req, res) => {
            Bookdata.find()
                .then(function (books) {
                    console.log(books);
                    res.render('books', {
                        nav,
                        title: 'Books',
                        books
                    });
                });


        });
    return booksRouter;
}

module.exports = router;