var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var param = {"name":"XXXX"};
    res.send(param);
});

module.exports = router;