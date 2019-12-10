"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    async getOne(req, res) {
        const { USUARIO } = req.params;
        const usuarios = await database_1.default.query('SELECT * FROM usuarios WHERE USUARIO = ?', [USUARIO]);
        console.log('SELECT * FROM usuarios WHERE USUARIO = ?', [USUARIO]);
        if (usuarios.length > 0) {
            return res.json(usuarios[0]);
        }
        res.status(404).json({ text: 'no hay usuarios' });
    }
    async create(req, res) {
        await database_1.default.query('INSERT INTO usuarios set ?', [req.body]);
        res.json({ message: 'Usuario guardado' });
    }
    async update(req, res) {
        const { id } = req.params;
        await database_1.default.query('UPDATE usuarios set ? WHERE idUSUARIOS = ?', [req.body, id]);
        res.json({ message: 'el usuario fue actualizado' });
    }
    async delete(req, res) {
        const { id } = req.params;
        await database_1.default.query('DELETE usuarios WHERE idUSUARIOS = ?', [id]);
        res.json({ message: 'el usuario fue borrado' });
    }
}
exports.usuarioController = new UsuarioController();
