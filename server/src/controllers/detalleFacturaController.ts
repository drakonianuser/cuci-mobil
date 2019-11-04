import { Request, Response } from "express";

import pool from "../database";

class DetalleFacturaController {

    public async getAll (req: Request, res: Response): Promise<any>{
        const {ID} = req.params;
        const facturas = await pool.query('SELECT DT.ID_DETALLE_FACTURA, SV.VALOR, S.NOMBRE_SERVICIO FROM detalle_factura DT INNER JOIN SERVICIOS_VEHICULO SV ON (DT.SERVICIOS_VEHICULO_ID_SERVICIOS_VEHICULO = SV.SERVICIOS_ID_SERVICIO) INNER JOIN SERVICIOS S ON (SV.SERVICIOS_ID_SERVICIO = S.ID_SERVICIO) WHERE DT.FACTURA_ID_FACTURA = ?',[ID])
        if(facturas.length>0){
            return res.json(facturas)
        }
        res.status(404).json({text: 'no hay detalleFacturas'})
    }

    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO detalle_factura set ?', [req.body]);
        return res.json({message: 'detalle_factura guardado'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {ID} = req.params;
        await pool.query('DELETE detalle_factura WHERE ID_DETALLE_FACTURA = ?',[ID]);
        res.json({message: 'el detalle_factura fue borrado'});
    }
} 

export const detalleFacturaController = new DetalleFacturaController();