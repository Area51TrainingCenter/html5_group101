$(".ui-nav-site li").click(function(){
	var opcion=$(this).attr("data-opcion");
	//alert("#"+opcion);

	var top=$("#"+opcion).offset().top;
	//alert(top);
	$("html").animate({scrollTop:top-110},1000);
})