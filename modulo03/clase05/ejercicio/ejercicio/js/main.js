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
	})

  $("#op-services").click(function(){
  	$("html").animate(
			{
					scrollTop:647
			},1000);
  })

  $("#portafolio").click(function(){
  		$("html").animate(
			{
					scrollTop:1747
			},1000);
  })






})