

    //   let x = true

    // console.log( x )
    // console.log( !x )

    // if( !x ){

    // } 

// TODO ---> 1
// Realizar una función que reciba por parámetro dos valores,
// el primero será numérico y el segundo booleano.
// Si el número es par y el booleano es true entonces retornar “Ha pasado la condición”.
// En cambio, si el número es impar y el booleano es false retornar “No ha pasado
// la condición”.
// Para cualquier otro caso, retornar -1

const verificar = ( numero, booleano )=>{

    if( numero % 2 === 0 && booleano === true){
        return "ha pasado la condicion"
    }else if(numero % 2 !== 0 && booleano === false){
        return "no ha pasado la condicion"
    }else{
        return -1
    }

}

let res = verificar(15,false)
console.log( res )


let productos = [
    {
      nombre: "motorola",
      precio: 40,
      cantidad: 5,
      categoria: "telefonia",
    },
    {
      nombre: "notebook",
      precio: 80,
      cantidad: 10,
      categoria: "computacion",
    },
    {
      nombre: "zapatilla",
      precio: 20,
      cantidad: 2,
      categoria: "indumentaria",
    },
    {
      nombre: "Macbook",
      precio: 100,
      cantidad: 7,
      categoria: "computacion",
    },
    {
      nombre: "samsung",
      precio: 60,
      cantidad: 15,
      categoria: "telefonia",
    },
    {
      nombre: "monitor",
      precio: 30,
      cantidad: 5,
      categoria: "computacion",
    },
  ];
  
  // TODO ---> Simulacion frontend E-commerce
  
  /* 
  1)Las personas encargadas del backend nos enviaron una lista de productos pero 
      se olvidaron de asignarles un ID unico para cada producto,
      nuestra tarea es agregarles ese ID unico a cada uno
      Requisito: debe empezar en 1 y ser secuencial 
  2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
      si se venden todos los productos que tenemos en stock
  3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
      X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
 
  */

// 1)

const agregarId = ( array )=>{

    for(let i = 0; i < array.length; i++){
        array[i].id = i + 1
        // array[i].cantidad += 10
    }

}

agregarId(productos) // undefined


console.log( productos )


const determinarTotal = ( arreglo )=>{ // [{c , p},{ c, p}, {c, p}]

    let acc = 0

    for(let i = 0; i < arreglo.length; i++){
       acc += arreglo[i].cantidad * arreglo[i].precio 
    }

    return acc 

}

let total = determinarTotal( productos ) // acc - 1231
console.log( total )

let productos2 = [
    {
      nombre: "motorola",
      precio: 40,
      cantidad: 5,
      categoria: "telefonia",
    },
    {
      nombre: "notebook",
      precio: 80,
      cantidad: 10,
      categoria: "computacion",
    },
    {
      nombre: "zapatilla",
      precio: 20,
      cantidad: 2,
      categoria: "indumentaria",
    },
    {
      nombre: "Macbook",
      precio: 100,
      cantidad: 7,
      categoria: "computacion",
    },
    {
      nombre: "samsung",
      precio: 60,
      cantidad: 15,
      categoria: "telefonia",
    },
    {
      nombre: "monitor",
      precio: 30,
      cantidad: 5,
      categoria: "computacion",
    },
  ];

  const filtrador = (arreglo, nombreCategoria)=>{

    let arrayFiltrado = []

    for (let i = 0; i < arreglo.length; i++) {
        if( arreglo[i].categoria === nombreCategoria ){
            arrayFiltrado.push( arreglo[i] )
        }   
    }

    return arrayFiltrado

  }

  let productosTelefonia = filtrador(productos2, "indumentaria") // [ {telef}, {telef}]
  console.log(productosTelefonia)

//   4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
//   especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
//   multiplicar dicho precio

// Determinar el mayor numero de una array 


const edades = [11, 12, 15, 2];



const mayor = (array)=>{

    let mayor = array[0] // 15

    for (let i = 0; i < array.length; i++) {
        if(mayor < array[i]){
            mayor = array[i]
        }
    }

    return mayor

}

const edades2 = [11, 12, 15, 2];

const menor = (array)=>{

    let menor = array[0] //2

    for (let i = 0; i < array.length; i++) {
       if( menor > array[i] ){
        menor = array[i]
       }
    }

    return menor

}
