//Línea con saludo
let saludo;
let hora = new Date().getHours();
if(hora >6 && hora < 13){
	saludo = '\n Buenos días';
}else if(hora > 13 && hora < 22){
	saludo = '\n Buenas tardes';
}else{
	saludo = '\n Buenas noches'
}
console.log(`${saludo}, son las ${hora} horas`);

//Número PI con seis decimales
let numPi = Math.PI.toFixed(6);
console.log(`\n Número PI con seis decimales: ${numPi}`);

//Tabla con números de 0 a 22 en decimal, hexadecimal, octal y binario
let numero = 22;
console.log();
function tablaNumerica(n){
	let hex = (n).toString(16);
	let oct = (n).toString(8);
	let bin = (n).toString(2);
	console.log(`${n} dec = ${hex} hex = ${oct} oct = ${bin} bin`);
}

for(let i = 0; i <= numero; i++){
	tablaNumerica(i);
}
//Tabla con números impares, sin incluir del 10 al 20
console.log();
for(let i = 0; i < numero; i++){
	if(i % 2 !== 0 && (i < 10 || i > 20 )){
		tablaNumerica(i);
	}
}
//Hola en chino
console.log();
console.log(`Hola en chino se escribe así: \u55e8\uff0c\u4f60\u597d\u5417`);
console.log();
console.log('The program has finished');