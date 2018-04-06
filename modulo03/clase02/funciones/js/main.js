var nombre;
var apellido;
var celular;
nombre="Juan carlos";
apellido="Ramos Torriccelli";
celular="999234956";

function calcularIGV(){
	var monto;
	var igv;
	monto=100;
	igv=monto*0.18;
	console.log(igv)
}

function calcular_IGV(valor1){
	var igv;
	igv=valor1*0.18;
	console.log(igv)
}
function retorno_IGV(valor1){
	var igv;
	igv=valor1*0.18;
	return igv;
}
var igv_calculado=retorno_IGV(300);

console.log(igv_calculado);
