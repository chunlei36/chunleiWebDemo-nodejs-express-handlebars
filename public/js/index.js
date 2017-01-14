$('.slide1_2').on('mouseover', function() {
	$('.slide1_2_we').fadeIn(1000)
})
$('.slide1_2').on('mouseleave', function() {
		$('.slide1_2_we').fadeOut(1000)
	})
	//	<!--头部-->
var navigation = $('#nav-main').okayNav();

var tttt;
var tttt2;

$('#fullpage').fullpage({
	sectionsColor: ['#262626', '#262626', '#262626', '#262626'],
	anchors: ['page1', 'page2', 'page3', 'page4'],
	//anchors: ['page1', 'page2', 'page3', 'page4'], //控制不同section的锚点
	navigation: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
	loopHorizontal: true,
	verticalCentered: false,
	keyboardScrolling: true,
	afterLoad: function(anchorLink, index) {

		console.log(anchorLink, index)
		if(index == 1) {
			clearInterval(tttt)
			$('#nav-main').slideDown(1000)
		}
		if(index == 2) {

			$('#nav-main').hide()
			$('.sec3_1>img').hide()
				//side自动滚动
			tttt = setInterval(function() {
				$.fn.fullpage.moveSlideRight();
			}, 3000);
			clearInterval(tttt2)

		}
		if(index == 3) {
			$('#nav-main').hide()
			$('.sec3_1>img').slideDown(500)
			clearInterval(tttt)
			tttt2 = setInterval(function() {
				$.fn.fullpage.moveSlideRight();
			}, 10000);
			$('.section_4>img').hide()

		}
		if(index == 4) {

			$('.sec3_1>img').hide()
			$('.section_4>img').slideDown(500)
			$('#nav-main').hide()
			clearInterval(tttt2)

		}
	}

})

//<!--压力动画-->
$(function() {

	$(window).load(function() {
		$('.section1_img2').nGyroParallax({
			magnification: .0001
		});
		$('.section1_img3').nGyroParallax({
			magnification: .004
		});
		$('.section1_img4').nGyroParallax({
			magnification: .0001
		});
		$('.sec3_2_2').nGyroParallax({
			magnification: .0001
		});

		//					$('.section1_img3').nGyroParallax();
		//					$('.section1_img5').nGyroParallax();

	});

});





$(document).ready(function() {
	var $li = $('#picID li');
	var arr = [];
	$.each($li, function(i, item) {
		arr.push([
			parseInt($(item).css('left')),
			parseInt($(item).css('top')),
			parseInt($(item).css('z-index')),
			parseInt($(item).css('width')),
			parseInt($(item).css('opacity') * 100)
		])
	})
	$('.next').click(function() {
		arr.unshift(arr[arr.length - 1]);
		arr.pop();
		$.each($li, function(i, item) {
			$(item).css('z-index', arr[i][2])
			$(item).stop().animate({
				left: arr[i][0],
				top: arr[i][1],
				width: arr[i][3],
				opacity: (arr[i][4] / 100),
			}, 400);
		})
	})
	$('.prev').click(function() {
		arr.push(arr[0]);
		arr.shift();
		$.each($li, function(i, item) {
			$(item).css('z-index', arr[i][2])
			$(item).stop().animate({
				left: arr[i][0],
				top: arr[i][1],
				width: arr[i][3],
				opacity: (arr[i][4] / 100),
			}, 400);
		})
	})

	setInterval(function() {
		arr.push(arr[0]);
		arr.shift();
		$.each($li, function(i, item) {
			$(item).css('z-index', arr[i][2])
			$(item).stop().animate({
				left: arr[i][0],
				top: arr[i][1],
				width: arr[i][3],
				opacity: (arr[i][4] / 100),
			}, 400);
		})
	}, 3000)
})













