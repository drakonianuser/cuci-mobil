"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class tipoVehiculoController {
    async getAll(req, res) {
        const tipo_vehiculo = await database_1.default.query('SELECT * FROM tipo_vehiculo');
        console.log('SELECT * FROM tipo_vehiculo');
        if (tipo_vehiculo.length > 0) {
            return res.json(tipo_vehiculo);
        }
        res.status(404).json({ text: 'no hay tipos de vehiculos registrados' });
    }
}
exports.tipovehiculocontroller = new tipoVehiculoController();
