import { Request, Response } from "express";

import pool from "../database";

class UsuarioController {

    public async getOne (req: Request, res: Response): Promise<any>{
        const {USUARIO} = req.params;
        const usuarios = await pool.query('SELECT * FROM usuarios WHERE USUARIO = ?',[USUARIO])
        console.log('SELECT * FROM usuarios WHERE USUARIO = ?',[USUARIO])
        if(usuarios.length>0){
            return res.json(usuarios[0]);
        }
        res.status(404).json({text: 'no hay usuarios'})
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO usuarios set ?', [req.body]);
        res.json({message: 'Usuario guardado'});
    }

    public async update(req: Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE usuarios set ? WHERE idUSUARIOS = ?',[req.body, id]);
        res.json({message: 'el usuario fue actualizado'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE usuarios WHERE idUSUARIOS = ?',[id]);
        res.json({message: 'el usuario fue borrado'});
    }
} 

export const usuarioController = new UsuarioController();