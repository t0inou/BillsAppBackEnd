var express = require('express');
var router = express.Router();

router.get('/users', function (req, res, next) {
    res.locals.coonnection.query('SELECT * from users', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;