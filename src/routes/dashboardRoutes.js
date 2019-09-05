const express = require('express');
const dashboardRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav, books, authors) {

    dashboardRouter.route('/')
        .get((req, res) => {

            Bookdata.find()
                .then(function (books) {
                    console.log(books);
                    res.render('dashboard', {
                        nav,
                        title: 'dashboard',
                        books
                    });
                });
        });

    dashboardRouter.route('/delete/:id')
        .get((req, res) => {
            const id = req.params.id;
            Bookdata.deleteOne({
                    _id: id
                })
                .then(function () {
                    res.redirect('/dashboard');

                });
        })


    dashboardRouter.route('/update/:id')
        .get((req, res) => {
            const id = req.params.id;
            Bookdata.updateOne({
                    _id: id
                })
                .then(function (books) {
                    res.render('update', {
                        nav,
                        title: 'update',
                        books,

                    });

                });
        })


    //database code
    dashboardRouter.route('/add')
        .get((req, res) => {
            var item = {
                title: req.param('book_title'),
                genre: req.param('genre'),
                author: req.param('author')
            }
            var book = new Bookdata(item);
            book.save();
            res.redirect('/books')
        });
    return dashboardRouter;
}
module.exports = router;