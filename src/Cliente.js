export class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
    calcularImpuesto(montobruto, deduccion) {
        return ((montobruto - deduccion) * 0.21);
    }
}


// creamos un cliente 
let cliente = new Cliente('Juan Arias')
console.log(`Cliente es: ${cliente.nombre}`);

// creamos un nuevo cliente para probar
cliente.nombre = 'Patricia Mesa';
console.log(`Nuevo Cliente es: ${cliente.nombre}`);
