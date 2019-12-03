"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servicioVehiculoController_1 = require("../controllers/servicioVehiculoController");
class ServicioVehiculoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:ID', servicioVehiculoController_1.servicioVehiculoController.getServiciosVehiculo);
    }
}
const servicioVehiculoRoutes = new ServicioVehiculoRoutes();
exports.default = servicioVehiculoRoutes.router;
