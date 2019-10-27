"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteVehiculoController_1 = require("../controllers/clienteVehiculoController");
class ClienteVehiculoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:ID', clienteVehiculoController_1.clienteVehiculoController.getOne);
        this.router.post('/', clienteVehiculoController_1.clienteVehiculoController.create);
        this.router.put('/', clienteVehiculoController_1.clienteVehiculoController.update);
    }
}
const clienteVehiculoRoutes = new ClienteVehiculoRoutes();
exports.default = clienteVehiculoRoutes.router;
