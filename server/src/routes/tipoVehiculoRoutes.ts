import { Router } from "express";

import { tipovehiculocontroller} from "../controllers/tipoVehiculoController";
class  TipoVehiculoRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    
    config(): void{
        this.router.get('/', tipovehiculocontroller.getAll);
    }
}

const tipovehiculoRoutes = new TipoVehiculoRoutes();
export default tipovehiculoRoutes.router;