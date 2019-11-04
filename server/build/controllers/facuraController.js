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
class FacturaController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID } = req.params;
            const factura = yield database_1.default.query('SELECT * FROM factura WHERE ID_FACTURA = ?', [ID]);
            if (factura.length > 0) {
                return res.json(factura[0]);
            }
            else {
                const factura = yield database_1.default.query('SELECT F.ID_FACTURA, F.TOTAL, F.TIPO_ESTADO_ID_TIPO_ESTADO, F.TOTAL_NETO, F.FECHA_ENTRADA, F.FECHA_SALIDA, F.ACTIVO, V.PLACA, C.NOMBRE, C.APELLIDOS, C.CEDULA, C.TELEFONO, D.PORCENTAJE_DESCUENTO,   D.CANTIDAD_SERVICIOS FROM FACTURA F INNER JOIN VEHICULO V ON (V.ID_VEHICULO = F.VEHICULO_ID_VEHICULO) INNER JOIN CLIENTE C ON (C.ID_CLIENTE = F.CLIENTE_ID_CLIENTE) INNER JOIN DESCUENTOS D ON (D.ID_DESCUENTOS = F.DESCUENTOS_ID_DESCUENTOS) WHERE F.TURNO = ?', [ID]);
                if (factura.length > 0) {
                    return res.json(factura[0]);
                }
            }
            res.status(404).json({ text: 'no hay facturas' });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const factura = yield database_1.default.query('SELECT F.ID_FACTURA,F.TURNO, F.TIPO_ESTADO_ID_TIPO_ESTADO, V.PLACA FROM FACTURA F INNER JOIN VEHICULO V ON (V.ID_VEHICULO = F.VEHICULO_ID_VEHICULO)');
            if (factura.length > 0) {
                return res.json(factura[0]);
            }
            res.status(404).json({ text: 'no hay facturas' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO factura set ?', [req.body]);
            res.json({ message: 'factura guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID } = req.params;
            yield database_1.default.query('UPDATE factura set ? WHERE ID_FACTURA = ?', [req.body, ID]);
            res.json({ message: 'la factura fue actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID } = req.params;
            yield database_1.default.query('DELETE factura WHERE ID_FACTURA = ?', [ID]);
            res.json({ message: 'la factura fue borrada' });
        });
    }
}
exports.facturaController = new FacturaController();
