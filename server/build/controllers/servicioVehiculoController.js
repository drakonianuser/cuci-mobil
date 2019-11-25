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
class ServicioVehiculoController {
    getServiciosVehiculo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID } = req.params;
            const servicioVehiculo = yield database_1.default.query('SELECT SV.ID_SERVICIOS_VEHICULO, SV.VALOR, SV.ACTIVO, S.NOMBRE_SERVICIO FROM servicios_vehiculo SV INNER JOIN servicios S ON (S.ID_SERVICIO = SV.SERVICIOS_ID_SERVICIO) WHERE SV.ACTIVO = "S" AND SV.TIPO_VEHICULO_ID_TIPO_VEHICULO = ?', [ID]);
            if (servicioVehiculo.length > 0) {
                return res.json(servicioVehiculo);
            }
            res.status(404).json({ text: 'no hay vehiculoServicio' });
        });
    }
}
exports.servicioVehiculoController = new ServicioVehiculoController();
