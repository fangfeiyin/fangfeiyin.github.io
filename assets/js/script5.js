$(document).ready(function() {



	$(".photo#1").click(function(){
		if ($(".photo#1").hasClass("photo-active")){
			setTimeout(function(){
				$('.description#one').removeClass("description-active")
			}, 0);
			setTimeout(function(){			
			$(".photo#1").removeClass("photo-active")
			}, 10);			
		} else {
			$(".photo#1").addClass("photo-active");
			setTimeout(function(){
				$('.description#one').addClass("description-active")
			}, 0);
		}
		
	})

	$(".photo#2").click(function(){
		if ($(".photo#2").hasClass("photo-active")){
			setTimeout(function(){
				$('.description#two').removeClass("description-active")
			}, 0);
			setTimeout(function(){			
			$(".photo#2").removeClass("photo-active")
			}, 10);			
		} else {
			$(".photo#2").addClass("photo-active");
			setTimeout(function(){
				$('.description#two').addClass("description-active")
			}, 0);
		}
		
	})

	$(".photo#3").click(function(){
		if ($(".photo#3").hasClass("photo-active")){
			setTimeout(function(){
				$('.description#three').removeClass("description-active")
			}, 0);
			setTimeout(function(){			
			$(".photo#3").removeClass("photo-active")
			}, 10);			
		} else {
			$(".photo#3").addClass("photo-active");
			setTimeout(function(){
				$('.description#three').addClass("description-active")
			}, 0);
		}
		
	})

	$(".photo#4").click(function(){
		if ($(".photo#4").hasClass("photo-active")){
			setTimeout(function(){
				$('.description#four').removeClass("description-active")
			}, 0);
			setTimeout(function(){			
			$(".photo#4").removeClass("photo-active")
			}, 10);			
		} else {
			$(".photo#4").addClass("photo-active");
			setTimeout(function(){
				$('.description#four').addClass("description-active")
			}, 0);
		}
		
	})		
	// $(".photo#2").click(function(){
	// 	$(".photo#2").addClass("photo-active");
	// 	setTimeout(function(){
	// 		$('.description#two').addClass("description-active")
	// 	}, 300);		
	// })


	// $(".photo#3").click(function(){
	// 	$(".photo#3").addClass("photo-active");
	// 	setTimeout(function(){
	// 		$('.description#three').addClass("description-active")
	// 	}, 300);		
	// })

	// $(".photo#4").click(function(){
	// 	$(".photo#4").addClass("photo-active");
	// 	setTimeout(function(){
	// 		$('.description#four').addClass("description-active")
	// 	}, 300);		
	// })


});