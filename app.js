const express = require('express');
var mysql = require('mysql');
var users = require('./routes/users');
var invoices = require('./routes/invoices');

const app = express();

app.use(function (res, next) {
    res.locals.connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'invoice'
    });
    res.locals.connection.connect();
    next();
});

app.use('/users', users);

app.use('/invoices', invoices);

app.get('/', function (res) {
    res.send('Hello')
});

app.user(function (res, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000, function () {
    console.log('app listening on port 3000')
});