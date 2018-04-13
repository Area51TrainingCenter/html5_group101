$("#accion_sumar").click(function(){
	//detengo el comporatamiento por defecto
	event.preventDefault();
	
	var num1;
	var num2;
	var suma;
	num1=$("#inp_num1").val();
	num2=$("#inp_num2").val();
	
// quiero saber si el 1er numero es
// mayor que el segundo
	
	if(num1>num2){
		suma=parseInt(num1)+parseInt(num2);

		$(".resultado").text(suma);
		// si la condicion resuelve verdad
	}
	else{
			$(".resultado").text("el num1 no puede ser menor que el numer 2");
		// si la condicion resuelve falso
	}

})