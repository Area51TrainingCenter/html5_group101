function pintarMapa(ele){
	var longitud=$(ele).attr("data-longitud");
	var latitud=$(ele).attr("data-latitud");
	
}

$(window).load(function(){

	var url="http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo";
	var url2="https://restcountries.eu/rest/v2/region/Americas";
	
	$.getJSON(url2,function(data){
		//data = arreglo de 56 items
		console.log(data);
		var num_items=data.length;

		for(var i=0;i<num_items;i++){
				//console.log(data[i].name)
				var region=data[i].subregion;
		
				if(region=="South America"){
						var nombre=data[i].name;
						var capital=data[i].capital;
						var bandera=data[i].flag;
						var latitud=data[i].latlng[0];
						var longitud=data[i].latlng[1];
						
						$("#lista-paises").append(
							`<tr>
								<td><img class="banderita" src="${bandera}"></td>
							 	<td onclick="pintarMapa(this)" data-longitud="${longitud}" data-latitud="${latitud}">${nombre}</td>
					     	<td>${capital}</td>
					     </tr>`)
				}
		}


	})

})