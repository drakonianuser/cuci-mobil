"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportesController_1 = require("../controllers/reportesController");
class ClienteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:fechaInicio/:fechaFin', reportesController_1.reportesController.getNombre);
        this.router.get('/', reportesController_1.reportesController.getPlaca);
        this.router.get('/', reportesController_1.reportesController.getIdFactura);
        this.router.get('/:ID', reportesController_1.reportesController.getNumeroServicios);
        this.router.get('/', reportesController_1.reportesController.getDescuentos);
        this.router.get('/', reportesController_1.reportesController.getTotal);
        this.router.get('/', reportesController_1.reportesController.getEstado);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
