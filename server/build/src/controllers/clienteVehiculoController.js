"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ClienteVehiculoController {
    async getOne(req, res) {
        const { ID } = req.params;
        const clienteVehiculo = await database_1.default.query('SELECT * FROM CLIENTE_VEHICULO WHERE VEHICULO_ID_VEHICULO = ?', [ID]);
        if (clienteVehiculo.length > 0) {
            return res.json(clienteVehiculo[0]);
        }
        res.status(404).json({ text: 'no hay clienteVehiculo' });
    }
    async create(req, res) {
        await database_1.default.query('INSERT INTO cliente_vehiculo set ?', [req.body]);
        res.json({ message: 'clienteVehiculo guardado' });
    }
    async update(req, res) {
        const { ID } = req.params;
        await database_1.default.query('UPDATE cliente_vehiculo set ? WHERE ID_CLIENTE_VEHICULO = ?', [req.body, ID]);
        console.log(ID);
        res.json({ message: 'el clienteVehiculo fue actualizado' });
    }
}
exports.clienteVehiculoController = new ClienteVehiculoController();
