"use strict";

var _Cliente = require("./Cliente.js");
var _Impuestos = require("./Impuestos.js");
// creamos nuevo impusto y nuevo cliente para que haga el calculo
var impuesto = new _Impuestos.Impuestos(150000, 500);
var cliente = new _Cliente.Cliente("Jose Arias", _Impuestos.Impuestos);
console.log("El nombre del cliente es: ".concat(cliente._nombre, " y el impuesto a pagar es: ").concat(cliente.calcularImpuesto(impuesto.montobruto, impuesto.deduccion)));