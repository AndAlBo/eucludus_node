/**
 * Created by Андрей on 27.08.2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('test', { title: 'Eucludus' });
});

module.exports = router;