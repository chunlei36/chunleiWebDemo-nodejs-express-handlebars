//a创建概要

var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
		us: String,
		pwd: String,
		avatar: String,
		petName: String,
		pname: String,
		sel: String,
		cihop:String,
		numder: Number,
		state: Number
	})
	//创建模型           模型名字  模型概要
var User = mongoose.model('deliusers', UserSchema) //决定汽油桶内数据名
	//导出
module.exports = User;