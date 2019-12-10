"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ReportesController {
    async getNombre(req, res) {
        const { FechaInicio } = req.params;
        const { FechaFin } = req.params;
        const clientes = await database_1.default.query("SELECT nombre, apellidos from cliente INNER JOIN factura on factura.CLIENTE_ID_CLIENTE = cliente.ID_CLIENTE where factura.FECHA_ENTRADA BETWEEN ? and ?", [FechaInicio, FechaFin]);
        console.log("SELECT nombre, apellidos from cliente INNER JOIN factura on factura.CLIENTE_ID_CLIENTE = cliente.ID_CLIENTE where factura.FECHA_ENTRADA BETWEEN ? and ?", [FechaInicio, FechaFin]);
        if (clientes.length > 0) {
            return res.json(clientes[0]);
        }
        res.status(404).json({ text: 'no hay clientes' });
    }
    async getPlaca(req, res) {
        const { FechaInicio } = req.params;
        const { FechaFin } = req.params;
        const placas = await database_1.default.query("SELECT placa from vehiculo INNER JOIN factura on factura.VEHICULO_ID_VEHICULO = vehiculo.ID_VEHICULO where factura.FECHA_ENTRADA BETWEEN ? and ?", [FechaInicio, FechaFin]);
        console.log("SELECT placa from vehiculo INNER JOIN factura on factura.VEHICULO_ID_VEHICULO = vehiculo.ID_VEHICULO where factura.FECHA_ENTRADA BETWEEN ? and ?", [FechaInicio, FechaFin]);
        if (placas.length > 0) {
            return res.json(placas[0]);
        }
        res.status(404).json({ text: 'no hay placas' });
    }
    async getIdFactura(req, res) {
        const { FechaInicio } = req.params;
        const { FechaFin } = req.params;
        const factura = await database_1.default.query("select id_factura from factura where FECHA_ENTRADA BETWEEN ? and ?", [FechaInicio, FechaFin]);
        console.log("select id_factura from factura where FECHA_ENTRADA BETWEEN ? and ?", [FechaInicio, FechaFin]);
        if (factura.length > 0) {
            return res.json(factura[0]);
        }
        res.status(404).json({ text: 'no hay facturas' });
    }
    async getNumeroServicios(req, res) {
        const { ID } = req.params;
        const servicios = await database_1.default.query("SELECT COUNT(SERVICIOS_VEHICULO_ID_SERVICIOS_VEHICULO) from detalle_factura WHERE detalle_factura.FACTURA_ID_FACTURA = ?", [ID]);
        console.log("SELECT COUNT(SERVICIOS_VEHICULO_ID_SERVICIOS_VEHICULO) from detalle_factura WHERE detalle_factura.FACTURA_ID_FACTURA = ?", [ID]);
        if (servicios.length > 0) {
            return res.json(servicios[0]);
        }
        res.status(404).json({ text: 'no hay servicios' });
    }
    async getDescuentos(req, res) {
        const { FechaInicio } = req.params;
        const { FechaFin } = req.params;
        const descuentos = await database_1.default.query("SELECT PORCENTAJE_DESCUENTO from descuentos INNER JOIN factura on factura.DESCUENTOS_ID_DESCUENTOS = descuentos.ID_DESCUENTOS where factura.FECHA_ENTRADABETWEEN ? and ?", [FechaInicio, FechaFin]);
        console.log("SELECT PORCENTAJE_DESCUENTO from descuentos INNER JOIN factura on factura.DESCUENTOS_ID_DESCUENTOS = descuentos.ID_DESCUENTOS where factura.FECHA_ENTRADABETWEEN ? and ?", [FechaInicio, FechaFin]);
        if (descuentos.length > 0) {
            return res.json(descuentos[0]);
        }
        res.status(404).json({ text: 'no hay descuentes' });
    }
    async getTotal(req, res) {
        const { FechaInicio } = req.params;
        const { FechaFin } = req.params;
        const total = await database_1.default.query("SELECT total_neto from factura where factura.FECHA_ENTRADA BETWEEN ? and ?", [FechaInicio, FechaFin]);
        console.log("SELECT total_neto from factura where factura.FECHA_ENTRADA BETWEEN ? and ?", [FechaInicio, FechaFin]);
        if (total.length > 0) {
            return res.json(total[0]);
        }
        res.status(404).json({ text: 'no hay total' });
    }
    async getEstado(req, res) {
        const { FechaInicio } = req.params;
        const { FechaFin } = req.params;
        const estados = await database_1.default.query("SELECT nombre_estado from tipo_estado INNER JOIN factura on factura.TIPO_ESTADO_ID_TIPO_ESTADO = tipo_estado.ID_TIPO_ESTADO where factura.FECHA_ENTRADA BETWEEN ? and ?", [FechaInicio, FechaFin]);
        console.log("SELECT nombre_estado from tipo_estado INNER JOIN factura on factura.TIPO_ESTADO_ID_TIPO_ESTADO = tipo_estado.ID_TIPO_ESTADO where factura.FECHA_ENTRADA BETWEEN ? and ?", [FechaInicio, FechaFin]);
        if (estados.length > 0) {
            return res.json(estados[0]);
        }
        res.status(404).json({ text: 'no hay estado' });
    }
}
exports.reportesController = new ReportesController();
