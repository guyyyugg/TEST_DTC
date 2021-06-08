const models = require('../models');
var crypto = require('crypto');
exports.index = function(req, res, next) {
    return models.Station.findAll().then(station=>{
        res.render('index', { station:station });
    })
    
  }

  exports.show_login = function(req, res, next) {
      res.render('login', {});
  }


  exports.login = function(req, res, next) { 
    // console.log(req.body.email)
    // console.log(req.body.password)
    var hash = crypto.createHash('md5').update(req.body.password).digest('hex');
    return models.Member.findOne({
        where: {
            username: req.body.email,
            password: hash
        }
    }).then(user =>{
        if(user == null){
            return res.redirect('/show_login');;
        }
        else if(user != null){
            res.redirect('/');
        }
    }).catch(e=>{
		return console.log("error");
	})
 };


 exports.show_signup = function(req, res, next) { 
    res.render('signup', {});
    
 };

 exports.signup = function(req, res, next) { 
    console.log(req.body.email)
    console.log(req.body.password)
    var hash = crypto.createHash('md5').update(req.body.password).digest('hex');
    return models.Member.create({
		username: req.body.email,
        password: hash
	}).then(lead => {
		res.redirect('/show_login');
	})
 };




 
 exports.makerpoint = function(req, res, next) {
    return models.Makertime.findAll().then(Makertime=>{
        res.render('makerpoint', { Makertime:Makertime });
    })
    
}

exports.getdata = function(req, res, next) {
    return models.Makertime.findAll().then(Makertime=>{
        res.json({Makertime:Makertime})
    })
    
}