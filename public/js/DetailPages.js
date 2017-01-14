$(document).ready(function () {
	var $li=$('#menus_showtwo>ul>li');
	$.each($li,function (i,item) {
		$(item).click(function () {
			var l=-(i*700);
			console.log($(this))
			$(this).removeClass('fuzzy_bgc').siblings().addClass('fuzzy_bgc')
			$('#menus_showone_one').animate({
				left:l,
			},500)
		})
	});
	$('#menus_showone_two>a').click(function () {
		$('#coating').fadeIn(500);
//		$('#menus_showone_three').slideDown(1000);
//		$('#menus_showone_four').fadeIn(500)
	})
	$('#concealment').click(function () {
		$('#coating').fadeOut(500);
//		$('#menus_showone_three').slideUp(1000);
//		$('#menus_showone_four').fadeOut(500)
	})
	$('#menus_showone_four').click(function () {
		$('#coating').fadeOut(500);
//		$('#menus_showone_three').slideUp(1000);
//		$('#menus_showone_four').fadeOut(500)
	})
	$('#briefing_showfive_one>ul>li').each(function () {
		$(this).hover(function () {
			$(this).children('ul>li>div:nth-child(4)').fadeIn(1000);
		},function () {
			$(this).children('ul>li>div:nth-child(4)').fadeOut(1000);
		})
	})
})