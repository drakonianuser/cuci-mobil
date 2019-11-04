"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facuraController_1 = require("../controllers/facuraController");
class FacturaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', facuraController_1.facturaController.getAll);
        this.router.get('/:ID', facuraController_1.facturaController.getOne);
        this.router.post('/', facuraController_1.facturaController.create);
        this.router.put('/:ID', facuraController_1.facturaController.update);
        this.router.delete('/:ID', facuraController_1.facturaController.delete);
    }
}
const facturaRoutes = new FacturaRoutes();
exports.default = facturaRoutes.router;
