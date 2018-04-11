var lista_personas=[];
var pos=0;

$(".btn-enviar").click(function(){
	// anula el evento por defecto
	event.preventDefault();

	var inp_nombres=$("#inp-nombres").val();
	var inp_apellidos=$("#inp-apellidos").val();
	var inp_correo=$("#inp-correo").val();
	
	var persona={
		nombres:inp_nombres,
		apellidos:inp_apellidos,
		correo:inp_correo
	}
	lista_personas.push(persona);
	console.log(lista_personas);

  $(".lista-usuarios").append("<li data-pos='"+pos+"' onclick='traerDatos(this)'>"+inp_nombres+" "+inp_apellidos+"</li>")
 

  limpiarValores()
  pos++;

	
})

function limpiarValores(){
  $("#inp-nombres").val("");
  $("#inp-apellidos").val("");
  $("#inp-correo").val("");
	
}


function traerDatos(ele){
var pos=$(ele).attr("data-pos");
$(".datos-nombre").text(lista_personas[pos].nombres+" "+lista_personas[pos].apellidos)
$(".datos-correo").text(lista_personas[pos].correo)

}



