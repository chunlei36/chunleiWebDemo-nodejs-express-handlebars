$(window).ready(function() {
	$('#lunch_nav').hover(function(){
		$('#shadow_eerie').fadeIn(2000);
	},function(){
		$('#shadow_eerie').fadeOut(2000);
	})
	$('#lunch_nav').hover(function(){
		$('#nav_message').fadeIn(2000);
	},function(){
		$('#nav_message').fadeOut(2000);
	})
	$('#delicacy_two').hover(function(){
		$('#delicacy_two_catetwo>div').fadeIn(2000);
	},function(){
		$('#delicacy_two_catetwo>div').fadeOut(2000);
	})
	
	//		$('#delicacy_three_catetwo').siblings().slideUp(1000);
//		$('#delicacy_three_catetwo>div').slideDown(1000);
	$('#search_one').click(function () {
		$('#delicacy_three_catetwo').css({
			display:'block',
			animationName:'moveTwo'
		}).siblings().css('display','none');
		$('#delicacy_three_catetwo>div').css({
			visibility: 'visible',
		})
	})
	$('#search_three').click(function () {
		$('#delicacy_three_catethree').css({
			display:'block',
			animationName:'moveTwo'
		}).siblings().css('display','none');
		$('#delicacy_three_catethree>div').css({
			visibility: 'visible',
			animationName: 'zoomTwo'
		})
	})
	$('#search_two').click(function () {
		$('#delicacy_three_cateone').css({
			display:'block',
			animationName:'moveOne'
		}).siblings().css('display','none');
		$('#delicacy_three_cateone>div').css({
			visibility: 'visible',
			animationName:'none'
		})
	})
	$('#search_four').click(function () {
		$('#delicacy_three_catetwo').css({
			display:'block',
			animationName:'moveOne'
		}).siblings().css('display','none');
		$('#delicacy_three_catetwo>div').css({
			visibility: 'visible',
			animationName: 'zoomTwo'
		})
	})
}).scroll(function() {
	$('article>section>div').each(function() {
		$(this).find('.delicacy_cateone').css({
				visibility: 'visible',
				animationName: 'zoom'
			});
		$(this).find('.delicacy_catetwo').css({
				visibility: 'visible',
				animationName: 'zoom'
		});
		var scrollTop = $(window).scrollTop()+$(window).height()-$(this).offset().top;
		console.log(scrollTop)
		if(scrollTop >= 800) {
			$(this).find('.delicacy_catethree').css({
				visibility: 'visible',
				animationName: 'zoom'
			});
			$(this).find('.delicacy_catefour').css({
				visibility: 'visible',
				animationName: 'zoom'
			});
		};
		if (scrollTop>=2000) {
			$('#delicacy_three_cateone>div').css({
				visibility: 'visible',
				animationName: 'zoomOne'
			});
		};
		if (scrollTop>=2600) {
			$('#delicacy_four_cateone>div').css({
				visibility: 'visible',
				animationName: 'zoomTwo'
			});
		}
	})
})