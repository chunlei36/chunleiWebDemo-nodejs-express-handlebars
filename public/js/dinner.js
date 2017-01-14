$(window).load(function() {}).scroll(function() {
	$('.aa').each(function() {
		//当前滚动高度
		var scrollTop = $(window).scrollTop() + $(window).height() - $(this).offset().top;
		if(scrollTop >= 100) {
			$(this).find('img').css({
				visibility: 'visible',
				animationName: 'move'
			});
			$(this).find('.bb').css({
				visibility: 'visible',
				animationName: 'move2'
			});
		}
	})
});

//头部渐变
$(".d_header>div").mouseover(function() {
	$(".d_header>div>div").fadeIn(500);
	$(".d_header>div").animate({
		'opacity': '0.8'
	});

});
$(".d_header>div").mouseleave(function() {
	$(".d_header>div>div").fadeOut(500);
	$(".d_header>div").animate({
		'opacity': '1'
	});

});