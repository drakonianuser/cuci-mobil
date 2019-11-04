import { Request, Response } from "express";

import pool from "../database";

class ServicioVehiculoController {

    public async getServiciosVehiculo (req: Request, res: Response): Promise<any>{
        const {ID} = req.params;
        const servicioVehiculo = await pool.query('SELECT SV.ID_SERVICIOS_VEHICULO, SV.VALOR, SV.ACTIVO, S.NOMBRE_SERVICIO FROM servicios_vehiculo SV INNER JOIN servicios S ON (S.ID_SERVICIO = SV.SERVICIOS_ID_SERVICIO) WHERE SV.ACTIVO = "S" AND SV.TIPO_VEHICULO_ID_TIPO_VEHICULO = ?',[ID])
        if(servicioVehiculo.length>0){
            return res.json(servicioVehiculo);
        }
        res.status(404).json({text: 'no hay vehiculoServicio'})
    }

} 

export const servicioVehiculoController = new ServicioVehiculoController();