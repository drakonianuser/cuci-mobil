import { Request, Response } from "express";

import pool from "../database";

class ClienteController {

    public async getOneDescuento(req: Request, res: Response): Promise<any> {
        const { ID } = req.params;
        const descuento = await pool.query('SELECT * FROM DESCUENTOS WHERE ID_DESCUENTOS = ?', [ID])
        if (descuento.length > 0) {
            return res.json(descuento);
        }
        res.status(404).json({ text: 'no hay descuento ' })
    }

    public async create(req: Request, res: Response): Promise<any> {
        await pool.query('INSERT INTO cliente set ?', [req.body]);
        return res.json({ message: 'Usuario guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE cliente set ? WHERE ID_CLIENTE = ?', [req.body, id]);
        res.json({ message: 'el usuario fue actualizado' });
    }
}

export const clienteController = new ClienteController();