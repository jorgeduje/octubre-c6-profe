//ANCHOR Array - Arreglo - Colección - Lista

// let numDeLaSuerte1 = 15
// let numDeLaSuerte2 = 13
// let numDeLaSuerte3 = 11
// let numDeLaSuerte4 = 17
// let numDeLaSuerte5 = 19
// let numDeLaSuerte6 = 12

// COMPUESTO DE ELEMENTOS
let numerosDeLaSuerte = [15, 13, 11, 17, 19, 12];

// let mascotas1 = "jack"
// let mascotas2 = "lola"
// let mascotas3 = "firulais"

let mascotas = ["jack", "lola", "firulais"];

console.log(mascotas[0]);
console.log(mascotas[2]);

let palabra = "hola";
console.log(palabra[3]);

console.log(mascotas.length);
console.log(palabra.length);

mascotas.push("pepito", "juancito");

console.log(mascotas);

let res = mascotas.pop();
console.log(res);

mascotas.pop();

console.log(mascotas);

let palabra2 = "hola como estas?";

let numerosDeLaSuerte2 = [15, 13, 11, 17, 19, 12];

let estaOno = numerosDeLaSuerte.includes(117);
console.log(estaOno);

let email = "pepegmail.com";

let esUnEmailValido = email.includes("@");

let indiceDe = email.indexOf("@");
console.log(indiceDe);

// RECORRER UN ARRAY

let numeros = [1, 6, 8, 12, 5, 8];

// let acc = 0
// acc += array[0]
// acc += array[1]
// acc += array[4]
console.log("------------------")

const recorrerArray = (arreglo) => {
  // EL RECORRIDO COMPLETO DE UN ARRAY

  let acc = 0

  for (let i = 0; i < arreglo.length; i++) {

    // ELEMENTO
    acc += arreglo[i]

  }

  return acc

};

// recorrerArray(numeros)

let resArray = recorrerArray(numeros)
console.log(resArray)

/* TODO :
    A partir de un array de correos, recorrerlo para corroborar si son válidos. 
    Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y 
    agregar aquellos que lo tengan al array de correos admitidos.
    En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
    Desarrollar una función que realice la verificación de cada elemento del array 
    de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, 
    agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
    Mostrar por pantalla la cantidad y los elementos de cada array.
*/

// PARA SER VALIDO DEBE CONTENER UN @
let arrayCorreosPendientes = [
  "iroman@digitalhouse.com",
  "loki%digitalhouse.com",
  "loki@digitalhouse.com",
  "thanosdigitalhouse.com",
  "thanos@digitalhouse.com",
];

// array de correos admitidos
let arrayCorreosAdmitidos = [
 
];

// array de correos descartados

let arrayCorreosDescartados = [
  
];

const verificadorDeEmails = (array)=>{

  for( let i = 0 ; i < array.length ; i++ ){
    
    if( array[i].includes( "@" )  ){
      arrayCorreosAdmitidos.push( array[i] )
    }else{
      arrayCorreosDescartados.push(array[i])
    }
    
  }

  arrayCorreosPendientes = []
  

}

verificadorDeEmails(arrayCorreosPendientes)

console.log( "la cantidad de correos pendientes es: ", arrayCorreosPendientes.length , "--->", arrayCorreosPendientes)
console.log( "la cantidad de correos admitidos es: ", arrayCorreosAdmitidos.length , "--->", arrayCorreosAdmitidos)
console.log( "la cantidad de correos descartados es: ", arrayCorreosDescartados.length , "--->", arrayCorreosDescartados)
