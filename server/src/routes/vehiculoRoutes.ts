import { Router } from "express";

import { vehiculocontroller} from "../controllers/vehiculoController"
class  VehiculoRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    
    config(): void{
        this.router.get('/:PLACA', vehiculocontroller.getOne);
        this.router.post('/', vehiculocontroller.create);
    }
}

const vehiculoRoutes = new VehiculoRoutes();
export default vehiculoRoutes.router;