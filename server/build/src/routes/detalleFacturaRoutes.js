"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalleFacturaController_1 = require("../controllers/detalleFacturaController");
class DetalleFacturaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:ID', detalleFacturaController_1.detalleFacturaController.getAll);
        this.router.post('/', detalleFacturaController_1.detalleFacturaController.create);
        this.router.delete('/:ID', detalleFacturaController_1.detalleFacturaController.delete);
    }
}
const detalleFacturaRoutes = new DetalleFacturaRoutes();
exports.default = detalleFacturaRoutes.router;
