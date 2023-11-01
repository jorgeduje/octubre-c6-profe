
// ciclos -- bucles -- loop
// for - while - do while

// inicializacion - condicion - modificador

const probandoFor = ()=>{

    for( let i = 1 ; i <= 5 ; i = i + 1 ){

        console.log(i)
        console.log("hola")
        
    }
   
    console.log("me ejecute")


}

probandoFor()


// 1 - 5 --->  1+ 2 + 3+ 4+ 5 = 15
// 1 - x --->  x+ x+ x+ x+ x+ = n 
// x - z --->  x+ x+ x+ x+ x+ = n 

// pero solo quiero los pares
// x - z --->  x+ x+ x+ x+ x+ = n 

const calcularSumatoria = (  numInicial, numFinal )=>{

    let acumulador = 0 // 6

    for( let i = numInicial; i <= numFinal ; i++ ){

        if( i % 2 === 0 ){
            acumulador += i
        }

    }

    return acumulador

}

let res = calcularSumatoria(1,5)
console.log(res)



// let x = 20 
// x = x + 1
// x += 1 
// x++
// x--


// let num = 54

// // si quiero que mi comparacion de true cuando el num es par
// console.log( num % 2 === 0  )

// // si quiero que mi comparacion de true cuando el num es impar
// console.log( num % 2 !== 0 )

const tablaDeMultiplicar = ( numero )=>{

    for(let i = 1; i <= 10 ; i++ ){
        // console.log(`${numero} * ${i} = ${numero * i}`)
        console.log(numero + " * " + i + " = " + (numero * i))
    }

    // let i = 15

    // while( i <= 10 ){
    //     console.log(numero + " * " + i + " = " + (numero * i))

    //     i++
    // }

    // let i = 15

    // do{
    //     console.log(numero + " * " + i + " = " + (numero * i))

    //     i++
    // }while( i <= 10 )

}

tablaDeMultiplicar(5)

// 5 

// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 10 = 50