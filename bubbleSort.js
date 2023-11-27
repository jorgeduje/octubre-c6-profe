// const bubbleSort = (arr, orden)=>{

//     let aux = undefined
//     if( orden === "ASC"){
//         for( let i = 0; i < arr.length; i++){
        
//             for(let j = 0; j < arr.length - 1; j++ ){
//                if( arr[j] > arr[j + 1]) { // 5 > 2 
//                     aux = arr[j] // 5
//                     arr[j] = arr[j + 1] // 2 
//                     arr[j + 1] = aux
//                }
//             }
    
//         }
//     }else if( orden === "DESC"){
//         for( let i = 0; i < arr.length; i++){
        
//             for(let j = 0; j < arr.length - 1; j++ ){
//                if( arr[j] < arr[j + 1]) { // 5 > 2 
//                     aux = arr[j] // 5
//                     arr[j] = arr[j + 1] // 2 
//                     arr[j + 1] = aux
//                }
//             }
    
//         }
//     }else{
//         console.log("Lo siento debes decirme el tipo de orden")
//     }

    
    
// }

// bubbleSort(numeros, "ASC" )

// Algoritmo de ordenacion ---> Bubble sort 

let numeros = [5, 2, 6, 1, 3] // [ 2, 5, 1, 3, 6 ]  // [2, 1, 3, 5, 6 ]
console.log(numeros)

// numeros.sort( (a , b)=> a - b ) // NO PUEDEN USAR

console.log(numeros)


const bubbleSort = (arr, orden)=>{

    let aux = undefined

    for( let i = 0; i < arr.length; i++){
        
        for(let j = 0; j < arr.length - 1; j++ ){
           if( arr[j].saldoEnPesos > arr[j + 1].saldoEnPesos ) { // 5 > 2  {} > {}
                aux = arr[j] // 5
                arr[j] = arr[j + 1] // 2 
                arr[j + 1] = aux
           }
        }

    }
    
}

// bubbleSort(numeros)


// let palabras = [ "casa", "avion", "$zoo", "mariposa", "abeja", "Zoo", "22" ]

// bubbleSort(palabras)
// console.log(palabras)

// ordenar en base a la saldo de forma descendente 
let arrayCuentas = [
    {
        nroCuenta: 1183971869,
        saldoEnPesos: 2,
        tipoDeCuenta: "Caja de Ahorro",
        titularCuenta: "maria",
    },
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 4,
      titularCuenta: "pepito",
    },
    {
        nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 3,
      titularCuenta: "juancito",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 5,
      titularCuenta: "carmen",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 1,
      titularCuenta: "Jack",
    },
  ];

  bubbleSort(arrayCuentas)
console.log(arrayCuentas)