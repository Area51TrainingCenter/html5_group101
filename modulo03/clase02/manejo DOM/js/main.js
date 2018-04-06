//alert("Bienvenido a la clase")

var elemento=document.getElementById('title');
//elemento.innerHTML="Texto modificado";
elemento.addEventListener("click",tarea)

function tarea(){
	//alert("click");
	//var parrafo=document.getElementsByClassName("texto")

	//parrafo[0].innerHTML="TextoCambiado";
	var parrafo=document.getElementById("texto");
	//parrafo.innerHTML="Cambiando el texto con JS";

	// chanca las clases 
	// parrafo.className="alerta";
	//agrega a la existente
	parrafo.classList.add("alerta");

	//parrafo.ClassName.remove();
}
	