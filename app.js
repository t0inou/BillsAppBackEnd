const express = require('express');
var mysql = require('mysql');
var users = require('./routes/users');
var invoices = require('./routes/invoices');
var jwt = require('express-jwt');

const app = express();

//Connexion to the database
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

app.use('/users', users);

app.use('/invoices', invoices);

//Route test
app.get('/', function (req, res, next) {
    res.send('Hello')
});

//Route for logging in
app.post('/login', function (req, res, next) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
            if (results.length > 0) {
                response.redirect('/');
            } else {
                response.send('Incorrect Username and/or Password');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password');
        response.end();
    }
    res.sendStatus(200);
})


//Route for catching errors
app.use(function (res, res, next) {
    var err = new Error('Not Found ... BUG');
    err.status = 404;
    next(err);
});

app.listen(3000, function (req, res, next) {
    console.log('app listening on port 3000')
});