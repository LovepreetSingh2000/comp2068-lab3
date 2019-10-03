'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Sister', { title: 'Sister', comment: 'My sister always fights with me' });
});

module.exports = router;