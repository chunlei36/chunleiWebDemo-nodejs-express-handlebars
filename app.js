var creds = require('./model/credentials') //加密配置
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
//给数据库加session
var MongoStore=require('connect-mongodb-session')(session)
var bodyParser = require('body-parser');
//导入连接数据库模块
var conn = require('./model/conn');
var mongoose = require('mongoose')
var routes = require('./routes/index'); //根目录
var deliuser = require('./routes/deliuser'); //根目录
var detailpages = require('./routes/detailpages'); //根目录
//引入路由

var exphbs = require('express-handlebars');
var app = express();
//配置
app.engine('.html', exphbs({
	extname: 'html',
	defaultLayout: 'layout',
	helpers: {
		addOne: function(i) {
			return i + 1;
		},
		section: function(name, opt) {
			if(!this._section) {
				this._section = {}
			}
			this._section[name] = opt.fn(this)
		}
	}
}));

app.set('view engine', '.html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//中间件
app.use(logger('dev')); //日志阀门，首先在指定的logger日志里记录
app.use(bodyParser.json()); //body转换
app.use(bodyParser.urlencoded({ //对url的解析
	extended: false
}));
//传入cookie密钥 
app.use(cookieParser(creds.cookieSecret)); //对ucookie的接解析
//初始化session需要传入cookie密钥
//collection:'sessionInfo'在后台数据库中创建sessionInfo数据表单
var store=new MongoStore({
	uri:creds.mongo.dev.conn,
	collection:'sessionInfo'
})
//设置collection的默认配置
app.use(session({
	secret: creds.cookieSecret,
	cookie:{maxAge:3600000}, //
	resave: false,
	saveUninitialized: true,
	store:store
}))
app.use(express.static(path.join(__dirname, 'public'))); //指定默认目录为根目录，可访问
//处理ajax方式上传文件，没有格式限制，可预览
var jqupload = require('jquery-file-upload-middleware') //处理用户上传
app.use('/upload', (req, res, next) => { //只会处理路径里包含upload才能被处理
	var now = Date.now();
	jqupload.fileHandler({
		uploadDir: function() {
			// __dirname：为node中的方法 当前根目录即test,只能放在后台js中才能解析出来，放入前台无法解析
			return __dirname + '/public/uploads/' + now;
		},
		uploadUrl: function() {
			return '/uploads/' + now;
		}
	})(req, res, next);
})
//处理闪存消息
//locals全局传参
//两种传参方式
//	res.locals.flash=req.session.flash
//	res.rend('page',{flash:xxx})  覆盖上面
//中间件的方式
//每打开一个页面将session传给locals
app.use((req, res, next) => { //闪存处理消息
	//两种传参方式
	res.locals.flash = req.session.flash;
	delete req.session.flash;
	next()
})

//上面的中间件
//下面是三个路由，决定流向何方，起始也是中间件
//数据库
//保持连接不自动断开，否则会自动因资源而断开
var opts = {
		server: {
			socketOptions: {
				keepAlive: 1
			}
		}
	}
	// conn.connect(creds.mongo.dev.conn,opts)
//	连接地址
mongoose.connect(creds.mongo.dev.conn, opts);
var db = mongoose.connection;
//在控制台上输出
db.on('error',()=>{
	console.error('连接数据库错误')
})
db.once('open', () => {
	console.log('连接成功！')
})


app.use('/', routes);
app.use('/deliuser', deliuser);
app.use('/detailpages', detailpages);


//app.use('/chat', chat);
//路由初始哈市
 
// catch 404 and forward to error handler
app.use(function(req, res, next) { //三个定义的页面没找到进入404
	var err = new Error('Not Found');
	err.status = 404;
	next(err); //进入下一个
});

// error handlers

// development error handler
// will print stacktrace
if(app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', { //渲染error页面
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;