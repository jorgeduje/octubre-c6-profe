
// ANCHOR CONDICIONALES ---> if / ternario / switch-case

// UNA FUNCION QUE RETORNE TRUE  SI EL USUARIO TIENE PERMISO O FALSE SI NO LO TIENE
// PARA ESO VAMOS A RECIBIR EL ROL DEL USUARIO POR PARAMETROS
// si el rol ---> "admin" si tiene permisos
// si el rol ---> no es "admin" no tiene permiso

const determinarPermisos = rolDelUsuario => {

//    if( rolDelUsuario === "admin" ){
//     // NUEVO BLOQUE
//         return true
//    }else{
//     // BLOQUE
//         return false
//    }

   // condicion ? lo verdadero : lo falso

   let permiso = rolDelUsuario === "admin" ? "Tenes acceso a todo" : "No tenes acceso nada" 
    return permiso

//    return rolDelUsuario === "admin" ? "Tenes acceso a todo" : "No tenes acceso nada" 

}


let tienePermiso = determinarPermisos("usuario")
console.log(tienePermiso)


// superAdmin --> "tenes acceso a todo"
// admin --> "tenes acceso a casi todo"
// usuario --> "no tenes acceso"

const determinar = rol => {

    let permisoFinal = undefined

    if(rol === "superAdmin"){
       permisoFinal =  "tenes acceso a todo"
    }else if(rol === "admin"){
        permisoFinal = "tenes acceso a casi todo"
    }else{
        permisoFinal = "no tenes acceso"
    }

    return permisoFinal

}

// let x  = determinar("superAdmin")
// console.log(x)