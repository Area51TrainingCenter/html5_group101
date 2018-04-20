$(window).load(function(){

		//var servicio="http://jsonplaceholder.typicode.com/users";
 		//$.getJSON(url,function)
 		var servicio2="http://sminnova.com/restapitrujillo/sitiosturisticos";
 		$.getJSON(servicio2,function(data){
 			var nombre=data[0].nombre;
 			var direccion=data[0].direccion;
 			var tipo=data[0].tipo_ingreso;
 			
 			$("#table-sitios tbody").append("<tr><td>"+nombre+"</td><td>"+direccion+"</td><td>"+tipo+"</td></tr>")

 		})


})
