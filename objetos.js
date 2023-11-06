// OBJETOS LITERALES

// let edadUsuario = 22
// let nombreUSuario = "pepe"
// let direccionUsuario = "italia 290"
// let dniUsuario = 5132131

// const usuarioIngrear = ()=>{

// }
// const usuarioComprar = ()=>{

// }

// propiedades y metodos
// pares de clave - valor

let functionSaludar = function () {
  return "hola soy " + this.nombre;
};

let usuario2 = {
  edad: 22,
  nombre: "carmen",
  direccion: "italia 290",
  saludar: functionSaludar,
};
let usuario3 = {
  edad: 22,
  nombre: "maria",
  direccion: "italia 290",
  saludar: functionSaludar,
};
let usuario4 = {
  edad: 22,
  nombre: "juancito",
  direccion: "italia 290",
  saludar: functionSaludar,
};

// dot notation
// console.log( usuario.nombre )
// console.log( usuario.edad )
// console.log( usuario.direccion )

console.log(usuario4.saludar());
console.log(usuario3.saludar());

let usuario = {
  edad: 22,
  nombre: "pepito",
  direccion: "italia 290",
  saludar: functionSaludar,
  ingresa: function () {
    return "estoy ingresando";
  },
};

// modificar una propiedad
usuario.nombre = "pepito 2";
usuario.edad = usuario.edad + 1;

// agregar una propiedad
usuario.esMayor = true;

// eliminar una propiedad
delete usuario.edad;
delete usuario.nombre;

console.log(usuario);

// arreglos de objetos
// array -->  muchos elementos de la misma especie
// obj ---> muchas propiedades a cada elemento del arreglo

// let usuarios = ["pepe", "carmen"]
let usuarios = [
  { name: "pepe", edad: 22 },
  { name: "carmen", edad: 43 },
];
// tablas - registros

const promediar = function () {
  let acc = 0;
  for (let i = 0; i < this.notas.length; i++) {
    acc += this.notas[i];
  }

  return acc / this.notas.length;
};

let estudiantes = [
  {
    nombre: "pepe",
    notas: [10, 9, 6],
    calcularPromedio: promediar,
  },
  {
    nombre: "carmen",
    notas: [5, 10, 8],
    calcularPromedio: promediar,
  },
  {
    nombre: "maria",
    notas: [10, 10, 9],
    calcularPromedio: promediar,
  },
];

const mostrarNotas = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `el estudiante ${array[i].nombre} tiene un promedio de : ` +
        Math.ceil( array[i].calcularPromedio() )
    );
  }
};

mostrarNotas(estudiantes);
