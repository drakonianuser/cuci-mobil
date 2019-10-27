import { Request, Response } from "express";

import pool from "../database";

class ClienteController {

    public async getOne (req: Request, res: Response): Promise<any>{
        const {ID} = req.params;
        const clientes = await pool.query('SELECT * FROM cliente WHERE ID_CLIENTE = ?',[ID])
        console.log('SELECT * FROM cliente WHERE ID_CLIENTE = ?',[ID])
        if(clientes.length>0){
            return res.json(clientes[0]);
        }else{
            const clientes = await pool.query('SELECT * FROM cliente WHERE CEDULA = ?',[ID])
            console.log('SELECT * FROM cliente WHERE CEDULA = ?',[ID])
            if(clientes.length>0){
                return res.json(clientes[0]);
            }
        }
        res.status(404).json({text: 'no hay clientes'})
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO cliente set ?', [req.body]);
        res.json({message: 'Usuario guardado'});
    }

    public async update(req: Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE cliente set ? WHERE ID_CLIENTE = ?',[req.body, id]);
        res.json({message: 'el usuario fue actualizado'});
    }
} 

export const clienteController = new ClienteController();