"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const descuentoController_1 = require("../controllers/descuentoController");
class DescuentoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', descuentoController_1.descuentoController.getAll);
    }
}
const descuentoRoutes = new DescuentoRoutes();
exports.default = descuentoRoutes.router;
