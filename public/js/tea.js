//$('#first').mouseover(function(){
//	$('#word').css({display:'block'});
//	$('#cover').css({display:'block'});
//});
//$('#first').mouseout(function(){
//	$('#word').css({display:'none'});
//	$('#cover').css({display:'none'});
//});
$(function(){
	$('#first').hover(function(){
		$('#word').fadeIn(500);
	},function(){
		$('#word').fadeOut(500);
	})
})
$(function(){
	$('#first').hover(function(){
		$('#cover').fadeIn(500);
	},function(){
		$('#cover').fadeOut(500);
	})
})
