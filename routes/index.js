var express = require('express');
var router = express.Router();
//var weddingusers = require('../model/weddingusers') //在wedding数据库下创建开weddingusers

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index',{layout:null});
});
router.get('/aaa', function(req, res, next) {
	res.render('dinner',{layout:'layout'});
});
router.get('/merShop', function(req, res, next) {
	res.render('merShop',{layout:'layout'});
});


router.get('/login', function(req, res, next) {
	res.render('login',{layout:null});
});
//dinner
router.get('/dinner', function(req, res, next) {
	res.render('dinner',{layout:'layout'});
});

router.get('/dinner/merShop', function(req, res, next) {
	res.render('merShop',{layout:'layout'});
});


router.get('/dinner/merShop2', function(req, res, next) {
	res.render('merShop2',{layout:'layout'});
});
router.get('/dinner/merShop3', function(req, res, next) {
	res.render('merShop3',{layout:'layout'});
});











//dinner


router.get('/my', function(req, res, next) {
	res.render('my',{layout:'layout'});
});
router.get('/login', function(req, res, next) {
	res.render('login',{layout:null});
});
router.get('/tea', function(req, res, next) {
	res.render('tea',{layout:'layout'});
});

router.get('/aboutus', function(req, res, next) {
	res.render('aboutUs',{layout:'layout'});
});
router.get('/download', function(req, res, next) {
	res.render('download',{layout:null});
});


router.get('/payment', function(req, res, next) {
	res.render('Payment',{layout:null});
});



router.get('/contactus', function(req, res, next) {
	res.render('contactus',{layout:'layout'});
});






//router.get('/personal', function(req, res, next) {
//	
//	weddingusers.find({
//		us: req.session.logUser
//	}, (err, users) => {
//		res.render('personal',{layout:'layout',users:users[0]});
//	})
//	//res.render('personal',{layout:'layout',title1:'users'});
//	
//	
//});



router.get('/about_us', function(req, res, next) {
	res.render('about_us',{layout:'layout'});
});
router.get('/contactUs', function(req, res, next) {
	res.render('contactUs',{layout:'layout'});
});

router.get('/lunch', function(req, res, next) {
	res.render('Lunch',{layout:'layout'});
});












module.exports = router;

