import { Router } from "express";

import { clienteController} from "../controllers/clienteController";
class  ClienteRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    
    config(): void{
        this.router.get('/:ID', clienteController.getOne);
        this.router.post('/', clienteController.create);
        this.router.put('/:ID', clienteController.update);
    }
}

const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;