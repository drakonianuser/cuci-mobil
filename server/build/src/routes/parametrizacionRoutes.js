"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const parametrizacionController_1 = require("../controllers/parametrizacionController");
class ParametrizacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/pdescuento/:ID', parametrizacionController.getOneDescuento);
        this.router.post('/parametrizacion/createDescuento', parametrizacionController_1.parametrizacionController.createDescuento);
        this.router.put('/parametrizacion/updateDescuento/:id', parametrizacionController_1.parametrizacionController.updateDescuento);
        this.router.delete('/parametrizacion/deleteDescuento/:id', parametrizacionController_1.parametrizacionController.deleteDescuento);
        this.router.post('/parametrizacion/createServicio', parametrizacionController_1.parametrizacionController.createServicio);
        this.router.put('/parametrizacion/updateServicio/:id', parametrizacionController_1.parametrizacionController.updateServicio);
        this.router.delete('/parametrizacion/delecteServicio', parametrizacionController_1.parametrizacionController.delecteServicio);
        this.router.post('/parametrizacion/createServicioVehiculo/:idServicio/:idVehiculo', parametrizacionController_1.parametrizacionController.createServicoVehiculo);
        this.router.put('/parametrizacion/updateServicioVehiculo/:IDSERVICIOSVEHICULO', parametrizacionController_1.parametrizacionController.updateServicio);
        this.router.delete('/parametrizacion/updateServicioVehiculo/:IDSERVICIOSVEHICULO', parametrizacionController_1.parametrizacionController.updateServicio);
    }
}
const parametrizacionRoutes = new ParametrizacionRoutes();
exports.default = parametrizacionRoutes.router;
