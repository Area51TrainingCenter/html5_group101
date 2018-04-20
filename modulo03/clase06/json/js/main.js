$(window).load(function(){

		//var servicio="http://jsonplaceholder.typicode.com/users";
 		//$.getJSON(url,function)
 		// var servicio2="";
 		$.getJSON(servicio2,function(data){
 			var limite=data.length;
 			console.log(data);

 			for(var i=0;i<10;i++){
				var nombre=data[i].nombre;
 				var direccion=data[i].direccion;
 				var tipo=data[i].tipo_ingreso;
 				var id=data[i].id;
 				//$("#table-sitios tbody").append("<tr><td>"+nombre+"</td><td>"+direccion+"</td><td>"+tipo+"</td></tr>")
				
				$("#table-sitios tbody").append(`
 						<tr>
 								<td>`+id+`</td>
 								<td>`+nombre+`</td>
 								<td>`+direccion+`</td>
 								<td>`+tipo+`</td>
 								<td> 
 									<button data-id-sitio="`+id+`" type="button" class="ver-sitio btn btn-success" onclick="traerDatos(this)">Ver</button>
 									<button data-id-sitio="`+id+`" type="button" class="btn btn-danger" onclick=borrarFila(this)>Borrar</button>
								</td>
 						</tr>`)

				}

				/*$(".ver-sitio").click(function(){


							$(".title-sitio").text("")
		 						$(".img-sitio").attr("src","");
		 						$(".contenido").html("");



		 					var id=$(this).attr("data-id-sitio");
		 					
		 					
		 					$.getJSON(url,function(data){
		 						var nombre=data[0].nombre;
		 						var foto=data[0].foto_principal;
		 						var contenido=data[0].historia;

		 						$(".title-sitio").text(nombre)
		 						$(".img-sitio").attr("src",foto);
		 						$(".contenido").html(contenido);
		 					})


		 		})*/


 		})
 	
 		/*$(".ver-sitio").click(function(){


					$(".title-sitio").text("")
 						$(".img-sitio").attr("src","");
 						$(".contenido").html("");



 					var id=$(this).attr("data-id-sitio");
 					
 					var url="http://sminnova.com/restapitrujillo/sitiosturisticos/id/"+id;
 					$.getJSON(url,function(data){
 						var nombre=data[0].nombre;
 						var foto=data[0].foto_principal;
 						var contenido=data[0].historia;

 						$(".title-sitio").text(nombre)
 						$(".img-sitio").attr("src",foto);
 						$(".contenido").html(contenido);
 					})


 		})*/


})


	function traerDatos(ele){
 			var id=$(ele).attr("data-id-sitio");
 		

 							$(".title-sitio").text("")
		 					$(".img-sitio").attr("src","");
		 					$(".contenido").html("");

		 					//var url=";
		 					$.getJSON(url,function(data){
		 						var nombre=data[0].nombre;
		 						var foto=data[0].foto_principal;
		 						var contenido=data[0].historia;

		 						$(".title-sitio").text(nombre)
		 						$(".img-sitio").attr("src",foto);
		 						$(".contenido").html(contenido);
		 					})

 		}

 		function borrarFila(ele)
 		{
 			$(ele).parent().parent().remove();

 		}
