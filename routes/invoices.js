var express = require('express');
var router = express.Router();

//Route to get all invoices
router.get('/', function (req, res, next) {
    res.locals.connection.query('SELECT * from invoices', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;