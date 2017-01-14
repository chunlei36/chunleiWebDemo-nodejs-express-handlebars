$(document).scroll(function() {
	var a = $(document).scrollTop()
	if(a>200){
//		$('#header').css('background-color','rgba(0,0,0,0.7)')
		$('#header').addClass('headermove11')
	}else{
		$('#header').removeClass('headermove11')
	}
})