import { Request, Response } from "express";

import pool from "../database";

class FacturaController {

    public async getOne (req: Request, res: Response): Promise<any>{
        const {ID} = req.params;
        const factura = await pool.query('SELECT * FROM factura WHERE ID_FACTURA = ?',[ID])
        if(factura.length>0){
            return res.json(factura[0]);
        }else{
            const factura = await pool.query('SELECT F.ID_FACTURA, F.TOTAL, F.TIPO_ESTADO_ID_TIPO_ESTADO, F.TOTAL_NETO, F.FECHA_ENTRADA, F.FECHA_SALIDA, F.ACTIVO, V.PLACA, C.NOMBRE, C.APELLIDOS, C.CEDULA, C.TELEFONO, D.PORCENTAJE_DESCUENTO,   D.CANTIDAD_SERVICIOS FROM FACTURA F INNER JOIN VEHICULO V ON (V.ID_VEHICULO = F.VEHICULO_ID_VEHICULO) INNER JOIN CLIENTE C ON (C.ID_CLIENTE = F.CLIENTE_ID_CLIENTE) INNER JOIN DESCUENTOS D ON (D.ID_DESCUENTOS = F.DESCUENTOS_ID_DESCUENTOS) WHERE F.TURNO = ?',[ID])
            if(factura.length>0){
                return res.json(factura[0]);
            }
        }
        res.status(404).json({text: 'no hay facturas'})
    }

    public async getAll (req:Request, res: Response): Promise<any>{
        const factura = await pool.query('SELECT F.ID_FACTURA,F.TURNO, F.TIPO_ESTADO_ID_TIPO_ESTADO, V.PLACA FROM FACTURA F INNER JOIN VEHICULO V ON (V.ID_VEHICULO = F.VEHICULO_ID_VEHICULO)')
        if(factura.length>0){
            return res.json(factura[0])
        }
        res.status(404).json({text: 'no hay facturas'})
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO factura set ?', [req.body]);
        res.json({message: 'factura guardada'});
    }

    public async update(req: Request, res:Response): Promise<void>{
        const {ID} = req.params;
        await pool.query('UPDATE factura set ? WHERE ID_FACTURA = ?',[req.body, ID]);
        res.json({message: 'la factura fue actualizada'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {ID} = req.params;
        await pool.query('DELETE factura WHERE ID_FACTURA = ?',[ID]);
        res.json({message: 'la factura fue borrada'});
    }
} 

export const facturaController = new FacturaController();