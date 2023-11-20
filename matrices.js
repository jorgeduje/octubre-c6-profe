
// ANCHOR ---> Matrices 

// filas y columnas ---> coordenadas 

let matriz = [
    [1, 3, 5, 6, 1], // fila 
    [6, 2] // fila
]

// let arr = [ 1, 3 ,2]

// console.log( matriz[2][1] )

console.log( matriz[1][2] )

// console.table( matriz )

// MATRIZ CUADRADA 3 x 3
const mat = [
    [1, 5, 4],
    [7, 2, 3],
    [7, 2, 3],

]



// RECORRER --->

// FILA  --> LE PIDO LA LONGITUD A LA FILA

// mat[0][0]
// mat[0][1]
// mat[0][2]

const recorrerFila = (mat)=>{

    for (let i = 0; i < mat[0].length; i++) {
        
       mat[0][i]
        
    }

}
// recorrerFila(mat)



// COLUMNA

const mat2 = [
    [1, 5, 4],
    [7, 2],
    [5, 3, 2],

]

const recorrerCol = (mat)=>{

    let acc = 0 

   for (let i = 0; i < mat.length; i++) {
        if(  mat[i][2] !== undefined ){
            acc += mat[i][2]
        }
   }

   return acc 

}
let res = recorrerCol(mat2)
console.log(res )


// MATRIZ COMPLETA ---> ESTA ES LA PARTE DEL DOBLE FOR 

// DIAGONAL ---> 

// PRINCIPAL --> solo si son cuadradas
// SECUNDARIA --> solo si son cuadradas


