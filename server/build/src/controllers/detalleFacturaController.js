"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DetalleFacturaController {
    async getAll(req, res) {
        const { ID } = req.params;
        const facturas = await database_1.default.query('SELECT DT.ID_DETALLE_FACTURA, SV.VALOR, S.NOMBRE_SERVICIO FROM detalle_factura DT INNER JOIN SERVICIOS_VEHICULO SV ON (DT.SERVICIOS_VEHICULO_ID_SERVICIOS_VEHICULO = SV.ID_SERVICIOS_VEHICULO) INNER JOIN SERVICIOS S ON (SV.SERVICIOS_ID_SERVICIO = S.ID_SERVICIO) WHERE DT.FACTURA_ID_FACTURA = ?', [ID]);
        if (facturas.length > 0) {
            return res.json(facturas);
        }
        res.status(404).json({ text: 'no hay detalleFacturas' });
    }
    async create(req, res) {
        await database_1.default.query('INSERT INTO detalle_factura set ?', [req.body]);
        return res.json({ message: 'detalle_factura guardado' });
    }
    async delete(req, res) {
        const { ID } = req.params;
        await database_1.default.query('DELETE detalle_factura WHERE ID_DETALLE_FACTURA = ?', [ID]);
        res.json({ message: 'el detalle_factura fue borrado' });
    }
}
exports.detalleFacturaController = new DetalleFacturaController();
