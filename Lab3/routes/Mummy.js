'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Mummy', { title: 'Mummy', comment: 'I love my Mummy.' });
});

module.exports = router;