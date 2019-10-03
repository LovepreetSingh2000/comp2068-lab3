'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Bhai', { title: 'Bhai', comment: 'My bhai is 20 year old' });
});

module.exports = router;