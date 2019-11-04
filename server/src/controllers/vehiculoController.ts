import { Request, Response } from "express";

import pool from "../database";

class vehiculoController {

    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('insert into vehiculo set ?', [req.body]);
        return res.json({message: 'vehiculo creado'})
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {PLACA} = req.params;
        const vehiculo = await pool.query('SELECT * FROM vehiculo WHERE PLACA = ?',[PLACA])
        console.log('SELECT * FROM usuarios WHERE PLACA = ?',[PLACA])
        if(vehiculo.length>0){
            return res.json(vehiculo[0]);
        }
        res.status(404).json({text: 'Ese vehiculo no se encuentra registrado'})
    }
} 

export const vehiculocontroller = new vehiculoController();