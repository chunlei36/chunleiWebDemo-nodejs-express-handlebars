$(function() {
	//重置上下线焦点
	function czFoucs() {
		$('.up_right').css('display', 'none');
		$('.down_left').css('display', 'none');
		$('.up_left').css({
			'display': 'block',
			'background': '#FA6D2E'
		});
		$('.down_right').css({
			'display': 'block',
			'background': '#FA6D2E'
		});
		$('.login_begin').css('color', '#FA6D2E');
		$('.register_begin').css('color', '#957E63');
	}
	czFoucs();
	$('.login_begin').click(function() {
		czFoucs();
		$('#reg-form').slideUp();
		$('#login-form').slideDown();

		$(this).css('color', '#FA6D2E');
		$('.register_begin').css('color', '#957E63');
	})
	$('.login_begin2').click(function() {
		czFoucs();
		$('#reg-form').slideUp();
		$('#login-form').slideDown();

		$(this).css('color', '#FA6D2E');
		$('.register_begin').css('color', '#957E63');
	})

	$('.register_begin').click(function() {
		$('.up_right').css({
			'display': 'block',
			'background': '#FA6D2E'
		});
		$('.down_left').css({
			'display': 'block',
			'background': '#FA6D2E'
		});
		$('.up_left').css('display', 'none');
		$('.down_right').css('display', 'none');
		$('#login-form').slideUp();
		$('#reg-form').slideDown();
		$(this).css('color', '#FA6D2E');
		$('.login_begin').css('color', '#957E63');
	})
	$('.register_begin2').click(function() {
		$('.up_right').css({
			'display': 'block',
			'background': '#FA6D2E'
		});
		$('.down_left').css({
			'display': 'block',
			'background': '#FA6D2E'
		});
		$('.up_left').css('display', 'none');
		$('.down_right').css('display', 'none');
		$('#login-form').slideUp();
		$('#reg-form').slideDown();
		$(this).css('color', '#FA6D2E');
		$('.login_begin').css('color', '#957E63');
	})

	//背景透明度渐变

	$(".l_box>div").mouseover(function() {

		$(this).removeClass('bg_moveww3')
		$(this).addClass('bg_moveww2')

	});
	$(".l_box>div").mouseleave(function() {
		$(this).removeClass('bg_moveww2')
		$(this).addClass('bg_moveww3')

	})
})

$(window).resize(function() {
	//登录的错误信息自适应
	var w1 = $('#uid1').offset().left + $('#uid1').outerWidth() + 5;
	var h1 = $('#uid1').offset().top;
	var w2 = $('#psw1').offset().left + $('#psw1').outerWidth() + 5;

	var h2 = $('#psw1').offset().top;
	$("#easytip-div-main-uid1").css({
		left: w1,
		transtion: 'left 1s'
	});
	$("#easytip-div-main-uid1").css({
		top: h1,
		transtion: 'top 1s'
	});
	$("#easytip-div-main-psw1").css({
		left: w2,
		transtion: 'left 1s'
	});
	$("#easytip-div-main-psw1").css({
		top: h2,
		transtion: 'top 1s'
	});
	//注册的错误信息自适应
	var w22 = $('#pwd').offset().left + $('#pwd').outerWidth() + 5;
	var h22 = $('#pwd').offset().top;
	var w11 = $('#uid2').offset().left + $('#uid2').outerWidth() + 5;
	var h11 = $('#uid2').offset().top;

	$("#easytip-div-main-uid2").css({
		left: w11,
		transtion: 'left 1s'
	});
	$("#easytip-div-main-uid2").css({
		top: h11,
		transtion: 'top 1s'
	});
	$("#easytip-div-main-pwd").css({
		left: w22,
		transtion: 'left 1s'
	});
	$("#easytip-div-main-pwd").css({
		top: h22,
		transtion: 'top 1s'
	});
})