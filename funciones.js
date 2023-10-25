// ANCHOR ---> FUNCIONES

let a = 2;

// DECLARADAS ---> nombre

function f1() {
  console.log("doy un paso adelante");
  console.log("doy un salto");
}

f1();
f1();

function saludar() {
  let saludo = "hola como estas?";
  return saludo;
}

let res = saludar();
console.log(res);

// console.log( saludar() )

let res2 = saludar();
console.log(res2);

// parametros

function sumar(a = 25, b = 11) {
  return a + b;
}

let resSuma = sumar(10, 20);
console.log(resSuma);

let resSuma2 = sumar(undefined, 1);
console.log(resSuma2);

let resSuma3 = sumar(12, 5);
console.log(resSuma3);

console.log("--------------");

function restar(num1, num2) {
  console.log("primer instruccion");
  console.log("segunda instruccion");

  return num1 - num2;
  console.log("tercer instruccion");
}

let resta = restar(10, 5);
console.log(resta);

let nombre = "pepito";

function cambiarNombre(nuevoNombre) {
  nombre = nuevoNombre;
}

console.log(nombre)

cambiarNombre("maria");

console.log(nombre);

// let y const tiene SCOPE ---> LOCAL

let sonido = "Guauuu"

function ladrar (num1, num2){
  
  let sonido = "miau"
  
  return sonido

}


let ladrido = ladrar()
console.log(ladrido)

// EXPRESADAS COMUNES --> ANONIMAS

const multiplicar = function (numero){
  return numero * 10
}

let resultadoMulti = multiplicar(15)
console.log(resultadoMulti)

// EXPRESADAS TIPO FLECHA O ARROW FUNCTION --> ANONIMAS


const dividir =  numero =>  numero / 2



let resultadoDivision = dividir(10)
console.log(resultadoDivision)

// HOISTING 

saltar()
function saltar (){

}



