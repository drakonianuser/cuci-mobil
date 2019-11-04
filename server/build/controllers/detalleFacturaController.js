"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DetalleFacturaController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID } = req.params;
            const facturas = yield database_1.default.query('SELECT DT.ID_DETALLE_FACTURA, SV.VALOR, S.NOMBRE_SERVICIO FROM detalle_factura DT INNER JOIN SERVICIOS_VEHICULO SV ON (DT.SERVICIOS_VEHICULO_ID_SERVICIOS_VEHICULO = SV.SERVICIOS_ID_SERVICIO) INNER JOIN SERVICIOS S ON (SV.SERVICIOS_ID_SERVICIO = S.ID_SERVICIO) WHERE DT.FACTURA_ID_FACTURA = ?', [ID]);
            if (facturas.length > 0) {
                return res.json(facturas);
            }
            res.status(404).json({ text: 'no hay detalleFacturas' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO detalle_factura set ?', [req.body]);
            return res.json({ message: 'detalle_factura guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID } = req.params;
            yield database_1.default.query('DELETE detalle_factura WHERE ID_DETALLE_FACTURA = ?', [ID]);
            res.json({ message: 'el detalle_factura fue borrado' });
        });
    }
}
exports.detalleFacturaController = new DetalleFacturaController();
