import { Cliente } from "./Cliente.js";
import { Impuestos } from "./Impuestos.js";

// creamos nuevo impusto y nuevo cliente para que haga el calculo
let impuesto = new Impuestos(150000, 500)
let cliente = new Cliente("Daniel Gomez", Impuestos);

console.log(`El nombre del cliente es: ${cliente._nombre} y el impuesto a pagar es: ${cliente.calcularImpuesto(impuesto.montobruto, impuesto.deduccion)}`);
