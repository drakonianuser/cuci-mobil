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
class ClienteController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID } = req.params;
            const clientes = yield database_1.default.query('SELECT * FROM cliente WHERE ID_CLIENTE = ?', [ID]);
            console.log('SELECT * FROM cliente WHERE ID_CLIENTE = ?', [ID]);
            if (clientes.length > 0) {
                return res.json(clientes[0]);
            }
            else {
                const clientes = yield database_1.default.query('SELECT * FROM cliente WHERE CEDULA = ?', [ID]);
                console.log('SELECT * FROM cliente WHERE CEDULA = ?', [ID]);
                if (clientes.length > 0) {
                    return res.json(clientes[0]);
                }
            }
            res.status(404).json({ text: 'no hay clientes' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cliente set ?', [req.body]);
            res.json({ message: 'Usuario guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE cliente set ? WHERE ID_CLIENTE = ?', [req.body, id]);
            res.json({ message: 'el usuario fue actualizado' });
        });
    }
}
exports.clienteController = new ClienteController();
