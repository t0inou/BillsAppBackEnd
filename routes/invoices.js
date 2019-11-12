var express = require('express');
var router = express.Router();

router.get('/invoices', function (req, res, next) {
    res.locals.coonnection.query('SELECT * from invoices', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;