import { Router } from "express";

import { parametrizacionController } from "../controllers/parametrizacionController";
class ParametrizacionRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        //this.router.get('/pdescuento/:ID', parametrizacionController.getOneDescuento);
        this.router.post('/parametrizacion/crearDescuento', parametrizacionController.createDescuento);
        this.router.put('/parametrizacion/actualizarDescuento/:id', parametrizacionController.updateDescuento);
        this.router.post('/parametrizacion/eliminarDescuento/:id', parametrizacionController.deleteDescuento)
        this.router.post('/parametrizacion/crearServicio',parametrizacionController.createServicio);
        this.router.put('/parametrizacion/actualizarServicio',parametrizacionController.updateServicio);
        this.router.post('/parametrizacion/eliminarServicio',parametrizacionController.delecteServicio);
        

    }
}

const parametrizacionRoutes = new ParametrizacionRoutes();
export default parametrizacionRoutes.router;