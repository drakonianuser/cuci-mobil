"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class vehiculoController {
    async create(req, res) {
        await database_1.default.query('insert into vehiculo set ?', [req.body]);
        return res.json({ message: 'vehiculo creado' });
    }
    async getOne(req, res) {
        const { PLACA } = req.params;
        const vehiculo = await database_1.default.query('SELECT * FROM vehiculo WHERE PLACA = ?', [PLACA]);
        if (vehiculo.length > 0) {
            return res.json(vehiculo[0]);
        }
        res.status(404).json({ text: 'Ese vehiculo no se encuentra registrado' });
    }
}
exports.vehiculocontroller = new vehiculoController();
