"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoVehiculoController_1 = require("../controllers/tipoVehiculoController");
class TipoVehiculoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipoVehiculoController_1.tipovehiculocontroller.getAll);
    }
}
const tipovehiculoRoutes = new TipoVehiculoRoutes();
exports.default = tipovehiculoRoutes.router;
