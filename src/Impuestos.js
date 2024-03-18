export class Impuestos {
    constructor(montobruto, deduccion) {
        this.montobruto = montobruto;
        this.deduccion = deduccion;
    }
    get montobruto() {
        return this._montobruto;
    }
    set montobruto(nuevo_montobruto) {
        this._montobruto = nuevo_montobruto;
    }
    get deduccion() {
        return this._deduccion;
    }
    set deduccion(nuevo_deduccion) {
        this._deduccion = nuevo_deduccion;
    }
}

// creamos un impuesto
let impuesto = new Impuestos(2000000, 3000);
console.log(`Monto Bruto es: ${impuesto.montobruto}, Deduccion es: ${impuesto.deduccion}`);


// creamos un nuevo impuesto para probar
impuesto.montobruto = 500000;
impuesto.deduccion = 1000;
console.log(`Nuevo Monto Bruto es: ${impuesto.montobruto}, Nueva Deduccion es: ${impuesto.deduccion}`);