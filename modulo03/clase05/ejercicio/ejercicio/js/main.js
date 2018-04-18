$(window).load(function(){

	$('.flexslider').flexslider();

	$(".owl-carousel").owlCarousel({
  	items:5,
  	margin:10,
  	loop:true
  });



	
	$(".link-up").click(function(){
			$("html").animate(
			{
					scrollTop:0
			},1000);
			//$(window).scrollTop(0);
	})

	$(window).scroll(function(){
		var top;
		top=$(window).scrollTop();
		console.log(top);
		if(top>300){
			$(".link-up").fadeIn();
		}
		else{
			$(".link-up").fadeOut();
		}

		if(top>100){
			$(".header-site").addClass("fixed-menu");
		}
		else{
			$(".header-site").removeClass("fixed-menu");
		}



	})

  $("#op-services").click(function(){

  	var top_temporal;
  	top_temporal=$("#services").offset().top;
  	$("html").animate(
			{
					scrollTop:top_temporal-120
			},1000);
  })

  $("#portafolio").click(function(){
  	var top_temporal;
  	top_temporal=$("#project").offset().top;
  		$("html").animate(
			{
					scrollTop:top_temporal-120
			},1000);
  })






})