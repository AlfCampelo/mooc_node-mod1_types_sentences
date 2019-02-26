// Type your code here
//Línea en blanco
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