const express = require('express');
var mysql = require('mysql');
var users = require('./routes/users');
var invoices = require('./routes/invoices');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'invoice_final'
});

connection.connect();

//Connexion to the database
// app.use(function (request, response, next) {
//     response.locals.connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'invoice_final'
//     });
//     response.locals.connection.connect();
//     next();
// });

app.use('/users', users);
app.use('/invoices', invoices);

//Route test
app.get('/', function (req, res, next) {
    res.send('Hello')
});

//Route for logging in
app.post('/login', function (request, response, next) {
    var email = request.body.email;
    var password = request.body.password;
    console.log(email);
    console.log(password);
    if (email && password) {
        connection.query('SELECT * FROM vendor_master WHERE email_id = ? AND user_password = ?', [email, password], function (error, results, fields) {
            if (results.length > 0) {
                response.redirect('/');
            } else {
                response.send('Incorrect Email and/or Password');
            }
            response.end();
        });
    } else {
        response.send('Please enter Email and Password');
        response.end();
    }
    // response.sendStatus(200);
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