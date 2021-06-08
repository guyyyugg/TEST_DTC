var express = require('express');
var router = express.Router();

let index = require("../controllers/index");
/* GET home page. */
router.get('/', index.index );
router.get('/show_login', index.show_login );
router.post('/login', index.login );
router.get('/show_signup', index.show_signup );
router.post('/signup', index.signup );

router.get('/makerpoint', index.makerpoint );
router.post('/getdata', index.getdata );
router.get('/getdata', index.getdata );
module.exports = router;
