// ANCHOR ---> Matrices

// filas y columnas ---> coordenadas

let matriz = [
  [1, 3, 5, 6, 1], // fila
  [6, 2], // fila
];

// let arr = [ 1, 3 ,2]

// console.log( matriz[2][1] )

console.log(matriz[1][2]);

// console.table( matriz )

// MATRIZ CUADRADA 3 x 3
const mat = [
  [1, 5, 4],
  [7, 2, 3],
  [7, 2, 3],
];

// RECORRER --->

// FILA  --> LE PIDO LA LONGITUD A LA FILA

// mat[0][0]
// mat[0][1]
// mat[0][2]

const recorrerFila = (mat, numFila) => {
  for (let i = 0; i < mat[numFila].length; i++) {
    mat[numFila][i];
  }
};
recorrerFila(mat, 0);
recorrerFila(mat, 2);

// COLUMNA

const mat2 = [
  [1, 5, 4],
  [7, 2],
  [5, 3, 2],
];

const recorrerCol = (mat, numCol) => {
  let acc = 0;

  for (let i = 0; i < mat.length; i++) {
    if (mat[i][numCol] !== undefined) {
      acc += mat[i][numCol];
    }
  }

  return acc;
};
let res = recorrerCol(mat2, 2);
console.log(res);

// DIAGONAL --->

const mat3 = [
  [1, 5, 4],
  [7, 2, 9],
  [5, 3, 6],
];

// PRINCIPAL --> solo si son cuadradas

// mat3[0][0]
// mat3[1][1]
// mat3[2][2]
const recorrerPrincipal = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    mat[i][i];
  }
};

// SECUNDARIA --> solo si son cuadradas
const mat4 = [
  [1, 5, 4],
  [7, 2, 9],
  [5, 3, 6],
];
// mat4[0][2]
// mat4[1][1]
// mat4[2][0]

const recorrerSecundaria = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i][mat.length - 1 - i]);
  }
};
console.log("-------------");
recorrerSecundaria(mat4);

// MATRIZ COMPLETA ---> ESTA ES LA PARTE DEL DOBLE FOR
const mat5 = [
  [1, 5, 4],
  [7, 2, 5],
  [5, 3, 6],
];
console.log("-----------");
// const recorrerMatriz = mat => {

//     for(let i = 0 ; i < mat.length; i++){ // indicador de las filas
//         console.log( "estoy recorriendo la fila" + i)

//         for(let j = 0; j < mat[i].length ; j++){// indicador de las columnas

//             console.log("estoy recorriendo la columna " + j)
//             console.log( mat[i][j] )

//         }

//     }

// }
// recorrerMatriz(mat5)

// DADA LA SIGUIENTE MATRIZ SUMAR TODOS LOS ELEMENTOS PARES

const mat6 = [
  [1, 5, 4],
  [7, 2, 5],
  [5, 3, 6],
];

const recorrerMatriz = (mat) => {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] % 2 === 0) {
        acc += mat[i][j];
      }
    }
  }

  return acc;
};

recorrerMatriz(mat6);

console.table(mat6);


const matUnMillon = [
    [1, 5, 4],
    [7, 2, 5, 9],
    [7, 1, 5],
];

// crear una funcion que reciba por parametros una matriz y  la columna que quiero 
// la funcion debe devolver en un arreglo nuevo, todos los elementos de dicha columna

const col = (mat, numCol )=>{

    let nuevoArreglo = [] // [5, 2, 1]

    for(let i = 0; i < mat.length; i++){
       nuevoArreglo.push(  mat[i][numCol] )
    }

    return nuevoArreglo

}

let res2 = col(matUnMillon, 1)
console.log(res2)

let gastos = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];