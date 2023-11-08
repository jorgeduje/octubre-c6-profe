// copia por valor vs copia por referencia

let a = 1;
let b = a;
console.log(b);
a = 12;
console.log(b);

// referencia

let obj = {
  nombre: "pepe",
  edad: 12,
};

let copiaObjeto = obj;

console.log(copiaObjeto);

copiaObjeto.nombre = "juan";

console.log(obj);

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "pepito",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "maria",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "juancito",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "carmen",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jack",
  },
];

const consultarFn = function (titular) {
  for (let i = 0; i < this.clientes.length; i++) {
    if (this.clientes[i].titularCuenta === titular) {
      return this.clientes[i];
    }
  }

  return "cliente no encontrado";
};

const depositoFn = function (titular, cantidad) {
  let cliente = this.consultarCliente(titular); // client =
  // cliente.saldoEnPesos = cliente.saldoEnPesos + cantidad
  if (typeof cliente === "object") {
    cliente.saldoEnPesos += cantidad;
    console.log(
      `Deposito realizado con exito, su nuevo saldo es : ${cliente.saldoEnPesos}`
    );
  } else {
    console.log(
      "No se encontro la cuenta por lo tanto no se realizo el deposito"
    );
  }
};

const extraccionFn = function (titular, cantidad) {
  let cliente = this.consultarCliente(titular);
  if (typeof cliente === "object") {
    if (cliente.saldoEnPesos >= cantidad) {
      cliente.saldoEnPesos -= cantidad;
      console.log(
        `Extraccion realizada con exitos su nuevo saldo es : ${cliente.saldoEnPesos}`
      );
    } else {
      console.log("saldo insuficiente");
    }
  } else {
    console.log(
      "Cliente no encontrado por lo tanto no se realizo la extraccion"
    );
  }
};

let banco = {
  clientes: arrayCuentas,
  consultarCliente: consultarFn,
  deposito: depositoFn,
  extraccion: extraccionFn,
};

// let clienteEncontrado = banco.consultarCliente("juancito");
// console.log(clienteEncontrado);

// banco.deposito("pepito", 10000);
banco.extraccion("juancito", 2000);

// let miCuenta = banco.consultarCliente("juancito")
// console.log(miCuenta)

// let cliente = {}

// console.log( typeof cliente)

// let x = {
//     nroCuenta: 9582019689,
//     tipoDeCuenta: "Caja de Ahorro",
//     saldoEnPesos: 27363,
//     titularCuenta: "juancito",
//   }

//   console.log( x.titularCuenta )
//   console.log( x["titularCuenta"] )

//   function (prop){
//     objeto[prop]
//   }

//   ("titular")
