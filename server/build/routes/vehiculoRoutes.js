"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");

const vehiculoController_1 = require("../controllers/vehiculoController");
class VehiculoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:PLACA', vehiculoController_1.vehiculocontroller.getOne);
        this.router.post('/', vehiculoController_1.vehiculocontroller.create);
    }
}
const vehiculoRoutes = new VehiculoRoutes();
exports.default = vehiculoRoutes.router;
