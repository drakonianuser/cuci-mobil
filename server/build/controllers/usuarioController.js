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
class UsuarioController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { USUARIO } = req.params;
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios WHERE USUARIO = ?', [USUARIO]);
            console.log('SELECT * FROM usuarios WHERE USUARIO = ?', [USUARIO]);
            if (usuarios.length > 0) {
                return res.json(usuarios[0]);
            }
            res.status(404).json({ text: 'no hay usuarios' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuarios set ?', [req.body]);
            res.json({ message: 'Usuario guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuarios set ? WHERE idUSUARIOS = ?', [req.body, id]);
            res.json({ message: 'el usuario fue actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE usuarios WHERE idUSUARIOS = ?', [id]);
            res.json({ message: 'el usuario fue borrado' });
        });
    }
}
exports.usuarioController = new UsuarioController();
