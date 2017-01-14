var express = require('express');
var router = express.Router();
var deliusers = require('../model/deliusers') //在wedding数据库下创建开weddingusers

var pwd = require('../encrypt/sha1')
	//
	//
	//var jiami=mima.hex_sha1(val)

deliusers.find((err, users) => {
		if(err) {
			throw new Error('查询失败！')
		};
		if(users && users.length == 0) {
			[{
				us: 'aaa',
				pwd: '6216f8a75fd5bb3d5f22b6f9958cdede3fc086c2',
				avatar: null,
				petName: 111,
				pname: null,
				sel: null,
				numder: 0,
				state: 0
			}, {
				us: 'bbb',
				pwd: '1c6637a8f2e1f75e06ff9984894d6bd16a3a36a9',
				avatar: null,
				petName: null,
				pname: null,
				sel: null,
				numder: 0,
				state: 0
			}, {
				us: 'ccc',
				pwd: '1c6637a8f2e1f75e06ff9984894d6bd16a3a36a9',
				avatar: null,
				petName: null,
				pname: null,
				sel: null,
				numder: 0,
				state: 0
			}].forEach((u) => {
				deliusers.create(u, (err, user) => {
					if(err) {
						throw new Error('创建用户失败!')
					}
					console.log('添加用户' + user.us + '成功！')
				})
			})
		}
	})
	//注册

router.post('/reguser', (req, res) => {
	var user1 = {};
	deliusers.find((err, users) => {
		if(err) {
			throw new Error('001')
		};
		users.forEach((u) => {
			if(req.body.us == u.us) {
				user1.lo = true;
			}
		})
		res.send(user1)
	})
})
router.post('/reguserzc', (req, res) => {
	req.body.pwd = pwd.hex_sha1(req.body.pwd)
	req.body.petName = 'deliceus'
	req.body.avatar = 'http://localhost:3000/uploads/upallavar11.png'

	deliusers.create(req.body, (err, user) => {
		if(err) {
			throw new Error('创建用户失败!')
		}

		req.session.logState = true;
		req.session.logUser = req.body.us;

		res.send({
			isSucc: true
		})

	})
})

//手机端

router.get('/ploginall', (req, res) => {
	deliusers.find((err, users) => {
		res.jsonp(users)
	})
})

router.get('/preg', (req, res) => {
	var ppwd = pwd.hex_sha1(req.query.pwd)
	deliusers.create({
		us: req.query.name,
		pwd: ppwd
	}, (err, user) => {
		if(err) {
			throw new Error('创建用户失败!')
		}
		res.jsonp({
			istrue: true
		})
	})
})

//登录

router.post('/loguser', (req, res) => {

	var user1 = {};
	deliusers.find((err, users) => {
		if(err) {
			throw new Error('001')
		};
		users.forEach((u) => {
			if(req.body.us == u.us) {
				req.session.logUser = u.us;
				user1.lo = true;

			}
		})
		res.json(user1)
	})
})

router.post('/loguserzc', (req, res) => {
	req.body.pwd = pwd.hex_sha1(req.body.pwd)
	deliusers.find((err, users) => {
		if(err) {
			throw new Error('001')
		};
		users.forEach((u) => {
			if(req.body.us == u.us) {
				if(u.pwd == req.body.pwd) {
					req.session.logState = true;
					req.session.logUser = u.us;
					//					req.session.cookie.originalMaxAge = 600000;
					res.send({
						isSucc: true
					})
				} else {
					res.send({
						isSucc: false
					})
				}
			}
		})
	})

})

router.get('/usermsg', (req, res) => {
	deliusers.find((err, users) => {
		if(err) {
			throw new Error('001')
		};
		users.forEach((u) => {
			if(req.session.logUser == u.us) {
				res.send({
					usermsg: u
				})

			}
		})
	})
})
var avatar = 'aa';
router.post('/usermsgnew', (req, res) => {

	deliusers.find((err, users) => {
		if(err) {
			throw new Error('001')
		};
		var lengava = req.body

		var size = 0,
			key;
		for(key in lengava) {
			if(lengava.hasOwnProperty(key)) size++;
		}

		console.log(size)

		if(size == 1) {
			avatar = req.body.imgurl
			res.send({
				isTrun: false
			})
		} else {
			if(avatar == 'aa') {

				deliusers.update({
					us: req.session.logUser
				}, {
					'$set': {
						petName: req.body.petName,
						pname: req.body.pname,
						sel: req.body.sel,
						cihop: req.body.cihop
					}
				}, (err, updates) => {
					res.send({
						isTrun: true
					})
				})
			} else {

				if(req.body.pname == undefined || req.body.sel == undefined || req.body.cihop == undefined || req.body.petName == undefined) {

					res.send({
						isTrun: false
					})
				} else {
					deliusers.update({
						us: req.session.logUser
					}, {
						'$set': {
							petName: req.body.petName,
							pname: req.body.pname,
							sel: req.body.sel,
							cihop: req.body.cihop,
							avatar: avatar
						}
					}, (err, updates) => {
						res.send({
							isTrun: true
						})
					})

				}
			}
		}

	})
})

router.get('/quituser', (req, res) => {
	req.session.logState = false;
	res.json();
})

router.get('/islog', (req, res) => {
	if(req.session.logState) {
		res.send({
			islog: req.session.logState
		})
	} else {
		res.send({
			islog: req.session.logState
		})

	}
	req.session.logState = false;
	res.json();
})

module.exports = router;