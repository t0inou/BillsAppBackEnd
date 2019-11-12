const express = require('express');
var mysql = require('mysql');
const app = express();

app.use(function (req, res, next) {
    res.locals.connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'invoice'
    });
    res.locals.connection.connect();
    next();
});

app.get('/', function (req, res) {
    res.send('Hello')
});

app.listen(3000, function () {
    console.log('app listening on port 3000')
});