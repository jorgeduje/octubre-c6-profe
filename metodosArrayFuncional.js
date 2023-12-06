let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 5,
    titularCuenta: "pepito",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 3,
    titularCuenta: "maria",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 2,
    titularCuenta: "juancito",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 1,
    titularCuenta: "carmen",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 12,
    titularCuenta: "Jack",
  },
];

// const encontrar = ( array, nombre )=>{

//     for (let i = 0; i < array.length; i++) {
//        if(array[i].titularCuenta === nombre){
//             return array[i]
//        }
//     }


// }

// let clienteEncontrado = encontrar( arrayCuentas,"adsadas" )
// console.log(clienteEncontrado)

// CALLBACK 




// const sumar = (a,b)=>{
// return a + b
// }
// sumar( ()=>{} , 5 )

// arrayCuentas.push( ()=>{} )

// const push = (x)=>{

// }

// FIND --> 

let clienteEncontrado = arrayCuentas.find( (cuenta, index)=>{
    return cuenta.titularCuenta === "carmen"
} )

console.log(clienteEncontrado)


// const filtrador = (array)=>{
//     let arrayNuevo = []
//     for (let i = 0; i < array.length; i++) {
       
//         if(array[i].tipoDeCuenta === "Caja de Ahorro"){
//             arrayNuevo.push(array[i])
//         }
        
//     }
//     return arrayNuevo
// }

// let arrayFiltrado = filtrador( arrayCuentas )
// console.log( arrayFiltrado )

// FILTER DEVUELVE UN NUEVO ARRAY CON TODOS LOS QUE CUMPLAN LA CONDICION

let arrayFiltrado = arrayCuentas.filter( (cuenta, i)=>{ 
    return cuenta.saldoEnPesos < 20
} )
console.log(arrayFiltrado)

// dado el siguiente array crear una funcion que devuelva un nuevo array
// con todos los elemntos pero multiplicados por 3
let numeros = [ 1, 5, 7 ]

// const generarNuevo = (array)=>{

//     let nuevoArr = []

//     for (let i = 0; i < array.length; i++) {

//         nuevoArr.push(  array[i] * 3  )
//     }

//     return nuevoArr 

// }

// let x = generarNuevo(numeros)
// console.log( x )
// [ 3, 15, 21 ]

// MAP SIEMPRE DEVUELVE UN NUEVO ARREGLO Y SIEMPRE DE LA MISMA LONGITUD QUE EL ORIGINAL
let numeros2 = [ 1, 5, 7 ]

let x = numeros.map( (numero, i) => numero * 3 ) // [0, 3, 6 ]

console.log( x )


// FOR EACH NO DEVUELVE NADA 
numeros.forEach( (numero, i) =>  numeros2.push( "hola" ) ) 


console.log( numeros2 )

arrayCuentas.forEach( (cuenta, i )=> cuenta.id = i + 1 )

console.log(arrayCuentas)



let numeros3 = [ 1, 5, 7, 9, 4, 3 ]

// arrayCuentas.sort( (a, b)=> {
//     if( a.saldoEnPesos < b.saldoEnPesos ){
//         return -1
//     }else if(a.saldoEnPesos > b.saldoEnPesos ){
//         return 1
//     }else{
//         return 0
//     }
// } )
 
// console.log( arrayCuentas )

arrayCuentas.sort( (a, b) => b.saldoEnPesos - a.saldoEnPesos )
console.log(arrayCuentas)