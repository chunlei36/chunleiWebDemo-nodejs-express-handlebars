//控制点击时的背景色和字体颜色
$('.m_left li').removeClass('fg');
$('.m_left a').removeClass('mc');

$('.m_left li').click(function() {
	$('.m_left li').removeClass('fg');
	$(this).addClass('fg');
	$('#m_right_init').fadeOut(100)
})
$('.m_left a').click(function() {
	$('.m_left a').removeClass('mc');
	$(this).addClass('mc');
	$('#m_right_init').fadeOut(100)

})
$('#mytitle').click(function() {
	$('#m_right_init').fadeIn(100)

})

//angular  开始
var app = angular.module('myApp', ['ngRoute']);
app.controller('MyCtrl', function($scope, $http) {
		console.log(11111111)
		$scope.personTC = function() {
			if(confirm('确定退出？')) {
				$http({ //返回parmis对象
					//请求后端接口
					url: '/deliuser/quituser',
					method: 'get'
				}).success(function(data) {
					window.location = '/';
				}).error(function(e) {
					console.log(e)

				})
			}
		}

		$http({ //返回parmis对象
			//请求后端接口
			url: '/deliuser/usermsg',
			method: 'get'
		}).success(function(data) {
			$scope.usermsg = data.usermsg;
		}).error(function(e) {
			console.log(e)

		})

	})
	//各个页面详细
	//个人资料
app.controller('DataCtrl', function($scope, Service, $http) {
	$scope.usermsg = {}
	$http({ //返回parmis对象
		//请求后端接口
		url: '/deliuser/usermsg',
		method: 'get'
	}).success(function(data) {
		$scope.usermsg = data.usermsg;
	}).error(function(e) {
		console.log(e)

	})
	$scope.btnTJall = function() {
		if($scope.usermsg.sel == '' || $scope.usermsg.petName == '' || $scope.usermsg.pname == '' || $scope.usermsg.cihop == '') {
			alert('修改信息不全')
		} else {
			console.log('修改')
			console.log($scope.usermsg)
			$http({ //返回parmis对象
				//请求后端接口
				url: '/deliuser/usermsgnew',
				method: 'post',
				data: $scope.usermsg
			}).success(function(result) {
				//			console.log(result)
				if(result.isTrun) {
					window.location.reload();
					//					$('#m_right_init').hide()

				} else {
					alert('填写信息不全！')
				}
			}).error(function(e) {
				console.log(e)
			})
		}
	}
})

//我的收藏
app.controller('CollectCtrl', function($scope, Service) {

})

//我的订单
app.controller('OrderCtrl', function($scope, Service) {
	$scope.users = Service.getUsers();
})

//账户设置
app.controller('SettingCtrl', function($scope, Service) {

	})
	//配置服务
app.service('Service', function() {
	var users;
	var times;
	var prices;
	var total;
	this.getUsers = function() {
		if(!users) {
			users = [{
				img: 'images/myImages/68.png',
				mname: '泰港茶餐厅',
				times: '2016-4-2',
				price: '48',
				count: '1',
				total: '48',
			}, {
				img: 'images/myImages/70.png',
				mname: '法桐你好餐厅',
				times: '2016-5-8',
				price: '163',
				count: '2',
				total: '326',
			}, {
				img: 'images/myImages/71.png',
				mname: '慢族年代秀',
				times: '2016-5-9',
				price: '168',
				count: '1',
				total: '168',
			}]
		}
		return users;
	}

})

//配置路由
app.config(function($routeProvider) {
	$routeProvider
		.when('/data', {
			templateUrl: 'tpl/data.html',
			controller: 'DataCtrl'
		})
		.when('/collect', {
			templateUrl: 'tpl/collect.html',
			controller: 'CollectCtrl'
		})
		.when('/order', {
			templateUrl: 'tpl/order.html',
			controller: 'OrderCtrl'
		})
		.otherwise({
			redirectTo: 'tpl/data.html',
			controller: 'DataCtrl'

		})

})

function canF() {
	$('.o_article').hide(100)

}

function canF1() {
	$('.o_article').hide(100)
	$('.o_article').show(100)

}