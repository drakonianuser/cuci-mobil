"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = require("../controllers/clienteController");
class ClienteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:ID', clienteController_1.clienteController.getOne);
        this.router.post('/', clienteController_1.clienteController.create);
        this.router.put('/:ID', clienteController_1.clienteController.update);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
