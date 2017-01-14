$(document).ready(function() {

	$('.carousel').on('slide.bs.carousel', function(event) {
		var tag = $(event.relatedTarget).attr("tag");
		var progress = $(event.relatedTarget).attr("progress");

		$('#img_home').attr("src", "images/paymentImages/home.png");
		$('#img_intro').attr("src", "images/paymentImages/intro.png");
		$('#img_gift').attr("src", "images/paymentImages/gift.png");
		$('#img_feedback').attr("src", "images/paymentImages/feedback.png");
		$('#img_related').attr("src", "images/paymentImages/related.png");

		$('#img_' + tag).attr("src", "images/paymentImages/" + tag + "_selected.png");
		$("#progress").animate({
			width: progress,
			left: (progress / 2) - 400
		}, 500);
	});
	//确认订单   数量 与 价格
	var num=$('.contentone_one>span:nth-child(2)').text();
	var money=parseInt($('.contentone_two>span').text());
	$('.contentone_one>span:nth-child(1)').click(function () {
		--num;
		$('.contentone_one>span:nth-child(2)').text(num)
		if (num<1) {
			$('.contentone_one>span:nth-child(2)').text(1)
			num=1;
		}
		var money_all=money*num;
		$('.contentone_two>span').text(money_all);
	})
	$('.contentone_one>span:nth-child(3)').click(function () {
		++num;
		$('.contentone_one>span:nth-child(2)').text(num)
		if (num>=8) {
			$('.contentone_one>span:nth-child(2)').text(8)
			num=8;
		}
		var money_all=money*num;
		$('.contentone_two>span').text(money_all);
	})
	//支付倒计时
	var s=60;
	var m=$('#payment>div>p>span:nth-child(2)>b:nth-child(1)').text()
	function count() {
		s--;
		$('#payment>div>p>span:nth-child(2)>b:nth-child(2)').text(s);
		if (s==0) {
			s=61;
		}
		else if (s==60) {
			m--;
			$('#payment>div>p>span:nth-child(2)>b:nth-child(1)').text(m)
		}
	}
	setInterval(count,1000)
	//验证信息倒计时
	var s2=5;
	$('#validate').click(function () {
		var timer=setInterval(function () {
			s2--;
			console.log(s2)
			$('#validate').text(s2+'秒后可再发送');
			validate.style.Attr='readonly';
			if (s2==0) {
				s2=5;
				clearInterval(timer);
				$('#validate').text('再次发送');
				$(this).removeAttr('readonly');
			}
		},1000)
	})
	//支付逻辑
	$('#payment li').each(function (i,item) {
		$(this).click(function () {
			$(this).addClass('payment_change_one').siblings().removeClass('payment_change_one');
			$(this).children().children('b').addClass('payment_change_two');
			$(this).siblings().children().children('b').removeClass('payment_change_two');
		})
	})
	$('.codes').click(function () {
		$('#bar_codes').show();
	})
	$('#payment li:nth-child(1)').click(function () {
		$('.codes').show();
		$('.message').hide()
	})
	$('#payment li:nth-child(2)').click(function () {
		$('.codes').show();
		$('.message').hide()
	})
	$('#payment li:nth-child(3)').click(function () {
		$('.codes').hide();
		$('.message').show()
	})
	$('#payment li:nth-child(4)').click(function () {
		$('.codes').hide();
		$('.message').show()
	})
	$('#payment li:nth-child(5)').click(function () {
		$('.codes').hide();
		$('.message').show()
	})
	$('#finish').click(function () {
		$('#bar_codes').hide();
	})
	$('#bar_codes').click(function () {
		$(this).hide();
	})
	
	$('#finish_two').click(function () {
		var bukong=$('.message input').val();
		if (bukong=='') {
			alert('请银行填写信息');
		}
		if (bukong!='') {
			$('#finish_two').attr('href','javascript:switchinternetke(4)')
		}
	})
});

function switchinternetke(internetkeIndex) {
	$('.carousel').carousel(internetkeIndex);
}