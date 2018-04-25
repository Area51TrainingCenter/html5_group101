$(window).load(function(){

	var url="http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo";
	var url2="https://restcountries.eu/rest/v2/region/Americas";
	$.getJSON(url2,function(data){
		console.log(data);
	})

})