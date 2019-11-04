"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class vehiculoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into vehiculo set ?', [req.body]);
            return res.json({ message: 'vehiculo creado' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { PLACA } = req.params;
            const vehiculo = yield database_1.default.query('SELECT * FROM vehiculo WHERE PLACA = ?', [PLACA]);
            console.log('SELECT * FROM usuarios WHERE PLACA = ?', [PLACA]);
            if (vehiculo.length > 0) {
                return res.json(vehiculo[0]);
            }
            res.status(404).json({ text: 'Ese vehiculo no se encuentra registrado' });
        });
    }
}
exports.vehiculocontroller = new vehiculoController();
