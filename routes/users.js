var express = require('express');
var router = express.Router();

//Route to get all users
router.get('/', function (req, res, next) {
    res.locals.connection.query('SELECT * from users', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

//Route to create new user
router.post('/newUsers', function (req, res, next) {
    res.locals.connection.query('INSERT INTO users (username,password) values("' + req.body.username + '", "' + req.body.password + '")', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

//Route to update an existing user
router.post('/updateUsers', function (req, res, next) {
    res.locals.connection.query('UPDATE users set username="' + req.body.username + '", password ="' + req.body.password + '"', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;