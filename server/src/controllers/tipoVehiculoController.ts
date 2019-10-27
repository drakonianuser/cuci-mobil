import { Request, Response } from "express";

import pool from "../database";

class tipoVehiculoController {

    public async getAll (req: Request, res: Response): Promise<any>{
        const tipo_vehiculo = await pool.query('SELECT * FROM tipo_vehiculo')
        console.log('SELECT * FROM tipo_vehiculo') 
        if(tipo_vehiculo.length>0){
            return res.json(tipo_vehiculo);
        }
        res.status(404).json({text: 'no hay tipos de vehiculos registrados'})
    } 
} 

export const tipovehiculocontroller = new tipoVehiculoController();