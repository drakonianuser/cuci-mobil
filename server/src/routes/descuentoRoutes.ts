import { Router } from "express";

import { descuentoController} from "../controllers/descuentoController";
class  DescuentoRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    
    config(): void{
        this.router.get('/', descuentoController.getAll);
    }
}

const descuentoRoutes = new DescuentoRoutes();
export default descuentoRoutes.router;