import { Request, Response } from "express";

import pool from "../database";

class ClienteVehiculoController {

    public async getOne (req: Request, res: Response): Promise<any>{
        const {ID} = req.params;
        const clienteVehiculo = await pool.query('SELECT * FROM CLIENTE_VEHICULO WHERE VEHICULO_ID_VEHICULO = ?',[ID])
        console.log('SELECT * FROM cliente WHERE ID_CLIENTE = ?',[ID])
        if(clienteVehiculo.length>0){
            return res.json(clienteVehiculo[0]);
        }
        res.status(404).json({text: 'no hay clienteVehiculo'})
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO cliente_vehiculo set ?', [req.body]);
        res.json({message: 'clienteVehiculo guardado'});
    }

    public async update(req: Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE cliente_vehiculo set ? WHERE ID_CLIENTE_VEHICULO = ?',[req.body, id]);
        res.json({message: 'el clienteVehiculo fue actualizado'});
    }
} 

export const clienteVehiculoController = new ClienteVehiculoController();