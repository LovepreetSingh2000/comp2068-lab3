'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Lovepreet Singh', comment: 'I am a computer programmer' });
});

module.exports = router;
