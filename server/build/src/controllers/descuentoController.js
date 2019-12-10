"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DescuentoController {
    async getAll(req, res) {
        const descuentos = await database_1.default.query('SELECT ID_DESCUENTOS,PORCENTAJE_DESCUENTO, CANTIDAD_SERVICIOS,ACTIVO FROM DESCUENTOS');
        if (descuentos.length > 0) {
            return res.json(descuentos);
        }
        res.status(404).json({ text: 'no hay descuentos registrados' });
    }
}
exports.descuentoController = new DescuentoController();
