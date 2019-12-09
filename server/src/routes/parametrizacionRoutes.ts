import { Router } from "express";

import { parametrizacionController } from "../controllers/parametrizacionController";
class ParametrizacionRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        //this.router.get('/pdescuento/:ID', parametrizacionController.getOneDescuento);
        this.router.post('/createDescuento', parametrizacionController.createDescuento);
        this.router.put('/updateDescuento/:id', parametrizacionController.updateDescuento);
        this.router.delete('/deleteDescuento/:id', parametrizacionController.deleteDescuento);

        this.router.get('/getServicios',parametrizacionController.getServicios);
        this.router.post('/createServicio',parametrizacionController.createServicio);
        this.router.put('/updateServicio/:id',parametrizacionController.updateServicio);
        this.router.delete('/delecteServicio/:id',parametrizacionController.delecteServicio);

        this.router.post('/createServicioVehiculo/:idServicio/:idVehiculo',parametrizacionController.createServicoVehiculo);
        this.router.put('/updateServicioVehiculo/:IDSERVICIOSVEHICULO',parametrizacionController.updateServicio);
        this.router.delete('/delecteServicioVehiculo/:IDSERVICIOSVEHICULO',parametrizacionController.updateServicio);
        
    }
}

const parametrizacionRoutes = new ParametrizacionRoutes();
export default parametrizacionRoutes.router;