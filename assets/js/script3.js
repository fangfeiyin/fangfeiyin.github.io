$(document).ready(function() {


	$(".pin#thai").click(function(){
		$(".description-box-thai").fadeIn(500);
		$(".text-thai").fadeIn(500);
		$(".overlay").fadeIn(500);
	});

	$(".pin#japan").click(function(){
		$(".description-box-jap").fadeIn(500);
		$(".text-jap").fadeIn(500);
		$(".overlay").fadeIn(500);
	})

	$(".pin#germany").click(function(){
		$(".description-box-g").fadeIn(500);
		$(".text-g").fadeIn(500);
		$(".overlay").fadeIn(500);
	})

	$(".pin#shanghai").click(function(){
		$(".description-box-s").fadeIn(500);
		$(".text-s").fadeIn(500);
		$(".overlay").fadeIn(500);
	})

	$(".pin#france").click(function(){
		$(".description-box-f").fadeIn(500);
		$(".text-f").fadeIn(500);
		$(".overlay").fadeIn(500);
	})

	$(".pin#ireland").click(function(){
		$(".description-box-i").fadeIn(500);
		$(".text-i").fadeIn(500);
		$(".overlay").fadeIn(500);
	})

	$(".pin#mexico").click(function(){
		$(".description-box-mex").fadeIn(500);
		$(".text-mex").fadeIn(500);
		$(".overlay").fadeIn(500);
	})

	$(".pin#cali").click(function(){
		$(".description-box-cali").fadeIn(500);
		$(".text-cali").fadeIn(500);
		$(".overlay").fadeIn(500);
	})

	$(".pin#vancouver").click(function(){
		$(".description-box-van").fadeIn(500);
		$(".text-van").fadeIn(500);
		$(".overlay").fadeIn(500);
	})

	$(".pin").click(function(event){
		event.stopPropagation();

	})



	// $(".img-container").click(function(){
	// 	$(".description-box-thai").fadeOut(500);
	// 	$(".text-thai").fadeout(500);
	// 	$(".description-box-jap").fadeOut(500);
	// 	$(".text-jap").fadeout(500);
	// 	$(".description-box-g").fadeOut(500);
	// 	$(".text-g").fadeout(500);
	// })

	$(".overlay").click(function(){
		$(".overlay").fadeOut(500);
	})

	$("body").click(function(){
		$(".overlay").fadeOut(500);
		$(".description-box-thai").fadeOut(500);
		$(".text-thai").fadeOut(500);
		$(".description-box-jap").fadeOut(500);
		$(".text-jap").fadeOut(500);
		$(".description-box-g").fadeOut(500);
		$(".text-g").fadeOut(500);
		$(".description-box-s").fadeOut(500);
		$(".text-s").fadeOut(500);
		$(".description-box-f").fadeOut(500);
		$(".text-f").fadeOut(500);
		$(".description-box-i").fadeOut(500);
		$(".text-i").fadeOut(500);
		$(".description-box-mex").fadeOut(500);
		$(".text-mex").fadeOut(500);
		$(".description-box-cali").fadeOut(500);
		$(".text-cali").fadeOut(500);
		$(".description-box-van").fadeOut(500);
		$(".text-van").fadeOut(500);
	})

$(".pin").hover(function(){
    $(this).css("transform", "scale(1.3)");
    }, function(){
    $(this).css("transform", "scale(1)");
});


});