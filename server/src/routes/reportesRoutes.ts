import { Router } from "express";

import { reportesController } from "../controllers/reportesController";
class  ClienteRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    
    config(): void{
        this.router.get('/:fechaInicio/:fechaFin', reportesController.getNombre);
        this.router.get('/', reportesController.getPlaca);
        this.router.get('/', reportesController.getIdFactura);
        this.router.get('/:ID', reportesController.getNumeroServicios);
        this.router.get('/', reportesController.getDescuentos);
        this.router.get('/', reportesController.getTotal);
        this.router.get('/', reportesController.getEstado);

    }
}

const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;