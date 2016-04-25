$(document).ready(function() {

	$(".photo").hover(
		function(){
			$(this).addClass("photo-active");
		}, function () {
			$(this).removeClass("photo-active");
		});

	$("#thai-jump").click(function(){
		$('html, body').animate({
		scrollTop: $( $.attr(this, 'href')).offset().top
		}, 300);
	})

	$("#japan-jump").click(function(){
		$('html, body').animate({
		scrollTop: $( $.attr(this, 'href')).offset().top
		}, 300);
	})	

	$("#china-jump").click(function(){
		$('html, body').animate({
		scrollTop: $( $.attr(this, 'href')).offset().top
		}, 300);
	})

	$("#france-jump").click(function(){
		$('html, body').animate({
		scrollTop: $( $.attr(this, 'href')).offset().top
		}, 300);
	})

	$("#ned-jump").click(function(){
		$('html, body').animate({
		scrollTop: $( $.attr(this, 'href')).offset().top
		}, 300);
	})

	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

});