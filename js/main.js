$(document).ready(function(){
	$('arrivals .item #title').mouseenter(function(){
		$(this).css("color","transparent")
		.siblings('ul').slideDown(100);
	})
	$('arrivals .links').mouseleave(function(){
		$(this).slideUp(100)
		.siblings('p#title').css("color","#000");
	})
})