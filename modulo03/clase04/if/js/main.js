// si el usuario es "admin" y el pass es "1234"

$("#validar").click(function(){
	event.preventDefault();
	var user;
	var pass;
	user=$("#inp_user").val();
	pass=$("#inp_pass").val();
	/*
	if(user=="admin"){
		//$(".resultado").text("usuario correcto")

			 if(pass=="1234"){
					$(".resultado").text("datos correctos");
					window.location="http://www.google.com";
				}
				else{
					$(".resultado").text("datos incorrectos")
				}

	}
	else{
		$(".resultado").text("datos incorrectos")

	}
*/


	if(user=="admin" && pass="1234"){
			window.location="http://www.google.com";
	}else{
		$(".resultado").text("datos incorrectos")
	}




	

})
