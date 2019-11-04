import { Request, Response } from "express";

import pool from "../database";

class DescuentoController {

    public async getAll (req: Request, res: Response): Promise<any>{
        const descuentos = await pool.query('SELECT ID_DESCUENTOS,PORCENTAJE_DESCUENTO, CANTIDAD_SERVICIOS,ACTIVO FROM DESCUENTOS')
        if(descuentos.length>0){
            return res.json(descuentos);
        }
        res.status(404).json({text: 'no hay descuentos registrados'})
    } 
} 

export const descuentoController = new DescuentoController();