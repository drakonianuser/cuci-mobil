import { Router } from "express";

import { facturaController} from "../controllers/facuraController";
class  FacturaRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    
    config(): void{
        this.router.get('/',facturaController.getAll)
        this.router.get('/:ID', facturaController.getOne);
        this.router.post('/', facturaController.create);
        this.router.put('/:ID', facturaController.update);
        this.router.delete('/:ID', facturaController.delete);
    }
}

const facturaRoutes = new FacturaRoutes();
export default facturaRoutes.router;