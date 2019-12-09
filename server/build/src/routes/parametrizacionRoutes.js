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
        this.router.post('/createDescuento', parametrizacionController_1.parametrizacionController.createDescuento);
        this.router.put('/updateDescuento/:id', parametrizacionController_1.parametrizacionController.updateDescuento);
        this.router.delete('/deleteDescuento/:id', parametrizacionController_1.parametrizacionController.deleteDescuento);
        this.router.get('/getServicios', parametrizacionController_1.parametrizacionController.getServicios);
        this.router.post('/createServicio', parametrizacionController_1.parametrizacionController.createServicio);
        this.router.put('/updateServicio/:id', parametrizacionController_1.parametrizacionController.updateServicio);
        this.router.delete('/delecteServicio/:id', parametrizacionController_1.parametrizacionController.delecteServicio);
        this.router.post('/createServicioVehiculo/:idServicio/:idVehiculo', parametrizacionController_1.parametrizacionController.createServicoVehiculo);
        this.router.put('/updateServicioVehiculo/:IDSERVICIOSVEHICULO', parametrizacionController_1.parametrizacionController.updateServicio);
        this.router.delete('/delecteServicioVehiculo/:IDSERVICIOSVEHICULO', parametrizacionController_1.parametrizacionController.updateServicio);
    }
}
const parametrizacionRoutes = new ParametrizacionRoutes();
exports.default = parametrizacionRoutes.router;
