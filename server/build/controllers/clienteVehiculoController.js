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
class ClienteVehiculoController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID } = req.params;
            const clienteVehiculo = yield database_1.default.query('SELECT * FROM CLIENTE_VEHICULO WHERE VEHICULO_ID_VEHICULO = ?', [ID]);
            if (clienteVehiculo.length > 0) {
                return res.json(clienteVehiculo[0]);
            }
            res.status(404).json({ text: 'no hay clienteVehiculo' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cliente_vehiculo set ?', [req.body]);
            res.json({ message: 'clienteVehiculo guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID } = req.params;
            yield database_1.default.query('UPDATE cliente_vehiculo set ? WHERE ID_CLIENTE_VEHICULO = ?', [req.body, ID]);
            console.log(ID);
            res.json({ message: 'el clienteVehiculo fue actualizado' });
        });
    }
}
exports.clienteVehiculoController = new ClienteVehiculoController();
