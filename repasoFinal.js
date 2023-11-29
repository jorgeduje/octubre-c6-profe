// TODO FILTRAR LOS PRODUCTOS QUE TENGAN MENOS DE 10 UNIDADES EN STOCK
// Y RETORNARLO

let items = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "tablet",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 5,
  },
];

const filtrador =( arr, tipoFiltrado) =>{

    let nuevoArr = []

    for(let i = 0; i < arr.length; i++){
        if( arr[i].stock < 10 ){
            nuevoArr.push( arr[i] )
        }
    }

    return nuevoArr

}

let resultado = filtrador(items)
console.log(resultado)



// TODO ORDENAR EL ARREGLO DE FORMA DESCENDENTE

let edades = [2, 12, 1, 5, 32, 56, 7];

let palabras = [ "alberto", "maria", "pepe" ]

// let x = edades [ 0]
// edades [ 0] = edades [ 1] // 12
// edades [ 1] = x

const ordenar = arr =>{

    let temp

    for(let i = 0 ; i < arr.length; i++){

        for(let j = 0; j < arr.length - 1; j++ ){
            
            if( arr[j] < arr[j + 1] ){ 

                temp = arr[j] // 2
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

            }

        }

    }


}

ordenar(edades)

console.log(edades )

ordenar(palabras)

console.log(palabras)








// TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN LA CANTIDAD DE STOCK

let productos = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "tablet",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 16,
  },
];

const ordenarObj = ( arr )=>{

    let temp

    for(let i = 0 ; i < arr.length; i++){

        for(let j = 0; j < arr.length - 1; j++ ){
            
            if( arr[j].stock > arr[j + 1].stock ){ 

                temp = arr[j] // 2
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

            }

        }

    }


}

ordenarObj(productos)

console.log(productos)

// DADA LA SIGUIENTE MATRIZ

let matriz1 = [
  [2, 4, 3],
  [3, 1, 5], // [9, 3, 15]
  [8, 4, 9],
];

// TODO ---> UN SOLO CICLO
// CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO
// CON TODOS LOS ELEMENTOS DE LA FILA 2 (multiplicados x 3)

const fila = (mat)=>{

    let arr = []

    for(let i = 0; i < mat[1].length; i++  ){
        arr.push( mat[1][i] * 3)
    }

    return arr
}

let arrFila = fila(matriz1)
console.log(arrFila)



let matriz2 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4, 9],
];

// TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS IMPARES DE
// LA COLUMNA 0, POR UN numero cero"


let matriz5 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4, 9],
];

// TODO --> ACA DOBLE FOR
// CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR SU NEGATIVO


