import { Router } from "express";

import { detalleFacturaController} from "../controllers/detalleFacturaController";
class  DetalleFacturaRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    
    config(): void{
        this.router.get('/:ID', detalleFacturaController.getAll);
        this.router.post('/', detalleFacturaController.create);
        this.router.delete('/:ID', detalleFacturaController.delete);
    }
}

const detalleFacturaRoutes = new DetalleFacturaRoutes();
export default detalleFacturaRoutes.router;