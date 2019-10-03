'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Father', { title: 'Father', comment: 'I love my father' });
});

module.exports = router;