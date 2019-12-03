import { Router } from "express";

import { parametrizacionController } from "../controllers/parametrizacionController";
class ParametrizacionRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        //this.router.get('/pdescuento/:ID', parametrizacionController.getOneDescuento);
        this.router.post('/parametrizacion/createDescuento', parametrizacionController.createDescuento);
        this.router.put('/parametrizacion/updateDescuento/:id', parametrizacionController.updateDescuento);
        this.router.delete('/parametrizacion/deleteDescuento/:id', parametrizacionController.deleteDescuento)

        this.router.post('/parametrizacion/createServicio',parametrizacionController.createServicio);
        this.router.put('/parametrizacion/updateServicio/:id',parametrizacionController.updateServicio);
        this.router.delete('/parametrizacion/delecteServicio',parametrizacionController.delecteServicio);

        this.router.post('/parametrizacion/createServicioVehiculo/:idServicio/:idVehiculo',parametrizacionController.createServicoVehiculo);
        this.router.put('/parametrizacion/updateServicioVehiculo/:IDSERVICIOSVEHICULO',parametrizacionController.updateServicio);
        this.router.delete('/parametrizacion/updateServicioVehiculo/:IDSERVICIOSVEHICULO',parametrizacionController.updateServicio);
        
    }
}

const parametrizacionRoutes = new ParametrizacionRoutes();
export default parametrizacionRoutes.router;