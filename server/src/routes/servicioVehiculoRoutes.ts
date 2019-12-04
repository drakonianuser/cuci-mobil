import { Router } from "express";

import { servicioVehiculoController} from "../controllers/servicioVehiculoController";
class  ServicioVehiculoRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    
    config(): void{
        this.router.get('/:ID', servicioVehiculoController.getServiciosVehiculo);

    }
}

const servicioVehiculoRoutes = new ServicioVehiculoRoutes();
export default servicioVehiculoRoutes.router;