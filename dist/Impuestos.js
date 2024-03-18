"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Impuestos = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Impuestos = exports.Impuestos = /*#__PURE__*/function () {
  function Impuestos(montobruto, deduccion) {
    _classCallCheck(this, Impuestos);
    this.montobruto = montobruto;
    this.deduccion = deduccion;
  }
  _createClass(Impuestos, [{
    key: "montobruto",
    get: function get() {
      return this._montobruto;
    },
    set: function set(nuevo_montobruto) {
      this._montobruto = nuevo_montobruto;
    }
  }, {
    key: "deduccion",
    get: function get() {
      return this._deduccion;
    },
    set: function set(nuevo_deduccion) {
      this._deduccion = nuevo_deduccion;
    }
  }]);
  return Impuestos;
}(); // creamos un impuesto
var impuesto = new Impuestos(2000000, 3000);
console.log("Monto Bruto es: ".concat(impuesto.montobruto, ", Deduccion es: ").concat(impuesto.deduccion));

// creamos un nuevo impuesto para probar
impuesto.montobruto = 500000;
impuesto.deduccion = 1000;
console.log("Nuevo Monto Bruto es: ".concat(impuesto.montobruto, ", Nueva Deduccion es: ").concat(impuesto.deduccion));