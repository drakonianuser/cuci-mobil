import { Router } from "express";

import { clienteVehiculoController} from "../controllers/clienteVehiculoController";
class  ClienteVehiculoRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    
    config(): void{
        this.router.get('/:ID', clienteVehiculoController.getOne);
        this.router.post('/', clienteVehiculoController.create);
        this.router.put('/:ID', clienteVehiculoController.update);
    }
}

const clienteVehiculoRoutes = new ClienteVehiculoRoutes();
export default clienteVehiculoRoutes.router;