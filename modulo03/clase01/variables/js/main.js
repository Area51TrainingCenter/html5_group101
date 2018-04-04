var dato1="juan carlos";
var dato2=12;

// variables booleanas

var estado=true;
var estado=false;


// variables fecha

var fecha="02/04/2018";
var nuevafecha=new Date();
var anio=nuevafecha.getFullYear();
var mes=nuevafecha.getMonth();
var dia=nuevafecha.getDate();

var horas=nuevafecha.getHours();
var minutos=nuevafecha.getMinutes();
var segundos=nuevafecha.getSeconds();
console.log(anio);
console.log(dia);
console.log(horas)
console.log(minutos)
console.log(segundos)

// variable de tipo arreglo
var nombre1="JC";
var nombre2="DIEGO";
var nombre3="MARTIN";

var listado=["JC","DIEGO","MARTIN"]

console.log(listado);
console.log(listado[0]);
console.log(listado[1]);
console.log(listado[5]);

// variable de tipo objeto
// [precio,marca,añoF]
var celular1={
	marca:"Samsung",
	precio:190,
	color:"negro"
}
var celular2={
	marca:"Apple",
	precio:200,
	color:"blanco"
}

var celular3={
	marca:"Huawei",
	precio:50,
	color:"blanco",
	bandas:["3g","4g","2g"];
}

var celulares=[celular1,celular2,celular3];


