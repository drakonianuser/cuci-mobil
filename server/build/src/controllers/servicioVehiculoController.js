"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ServicioVehiculoController {
    async getServiciosVehiculo(req, res) {
        const { ID } = req.params;
        const servicioVehiculo = await database_1.default.query('SELECT SV.ID_SERVICIOS_VEHICULO, SV.VALOR, SV.ACTIVO, S.NOMBRE_SERVICIO FROM servicios_vehiculo SV INNER JOIN servicios S ON (S.ID_SERVICIO = SV.SERVICIOS_ID_SERVICIO) WHERE SV.ACTIVO = "S" AND SV.TIPO_VEHICULO_ID_TIPO_VEHICULO = ?', [ID]);
        if (servicioVehiculo.length > 0) {
            return res.json(servicioVehiculo);
        }
        res.status(404).json({ text: 'no hay vehiculoServicio' });
    }
}
exports.servicioVehiculoController = new ServicioVehiculoController();
