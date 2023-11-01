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