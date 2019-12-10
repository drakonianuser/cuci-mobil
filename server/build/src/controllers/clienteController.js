"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ClienteController {
    async getOne(req, res) {
        const { ID } = req.params;
        const clientes = await database_1.default.query('SELECT * FROM cliente WHERE ID_CLIENTE = ?', [ID]);
        console.log('SELECT * FROM cliente WHERE ID_CLIENTE = ?', [ID]);
        if (clientes.length > 0) {
            return res.json(clientes[0]);
        }
        else {
            const clientes = await database_1.default.query('SELECT * FROM cliente WHERE CEDULA = ?', [ID]);
            console.log('SELECT * FROM cliente WHERE CEDULA = ?', [ID]);
            if (clientes.length > 0) {
                return res.json(clientes[0]);
            }
        }
        res.status(404).json({ text: 'no hay clientes' });
    }
    async create(req, res) {
        console.log(req.body);
        await database_1.default.query('INSERT INTO cliente set ?', [req.body]);
        return res.json({ message: 'Usuario guardado' });
    }
    async update(req, res) {
        const { id } = req.params;
        await database_1.default.query('UPDATE cliente set ? WHERE ID_CLIENTE = ?', [req.body, id]);
        res.json({ message: 'el usuario fue actualizado' });
    }
}
exports.clienteController = new ClienteController();
