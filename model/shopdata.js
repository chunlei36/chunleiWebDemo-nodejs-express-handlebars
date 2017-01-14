//a创建概要
var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
			shopID: String,
			navImgD: [String],
			navImgS: [String],
			msg1mh2: String,
			msg1p1: String,
			msg1p2: String,
			msg1p3: String,
			msg1p4: String,
			msg1p4s: String,
			msg2pb1: String,
			msg2pb2: String,
			msg2h2: String,
			msg2p: [String],
			msg2ppdiv: [String],
			msg3h2: String,
			msg3p: [String],
			msg4h2: String,
			msg4p: [String],
			//		菜单
			zc:String,
			msg5img: String,
			msg5divp1: [String],
			lb:String,
			
			msg5divp2: [String],
			zw:String,
			
			msg5divp3: [String],
			rr:String,
			
			msg5divp4: [String]
		}

	)
	//创建模型           模型名字  模型概要
var User = mongoose.model('shopdata', UserSchema) //决定汽油桶内数据名
	//导出
module.exports = User;