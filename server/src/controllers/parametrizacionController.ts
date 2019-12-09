import { Request, Response } from "express";

import pool from "../database";
import request = require("superagent");

class ParametrizacionController {

    //---------------metodos para el manejo de los decuentos------------

    public async getOneDescuento(req: Request, res: Response): Promise<any> {
        const { ID } = req.params;
        const descuento = await pool.query('SELECT * FROM DESCUENTOS WHERE ID_DESCUENTOS = ?', [ID])
        if (descuento.length > 0) {
            return res.json(descuento);
        }
        res.status(404).json({ text: 'No hay descuento' })
    }

    public async createDescuento(req: Request, res: Response): Promise<any> {
        await pool.query('INSERT INTO DESCUENTOS VALUES ?', [req.body]);
        return res.json({ message: 'Se creo el descuento' });
    }

    public async updateDescuento(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE DESCUENTOS set ? WHERE ID_DESCUENTOS = ?', [req.body, id]);
        res.json({ message: 'El descuento fue actualizado' });
    }

    public async deleteDescuento(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const existe = await pool.query('SELECT ID_DESCUENTOS FROM DESCUENTOS WHERE ID_DESCUENTOS = ?',[id])
        if(existe.length > 0){
            await pool.query('UPDATE DESCUENTOS SET ACTIVO = N WHERE ID_DESCUENTOS = ?', [id]);
            res.json({ message: 'El descuento fue eliminado' });
        }
        res.status(404).json({text: "No existe el descuento"})
    }



    //---------------metodos para el manejo de los servicios-------------------
    /**
     * crear un servicio en la serviteca 
     * @param req resive en formato json el servicio que se va a almacenar  
     */
    public async createServicio(req: Request, res: Response): Promise<any> {
        await pool.query('INSERT INTO SERVICIOS set ?', [req.body]);
        return res.json({ message: 'Se creo el descuento' });
    }


    public async getServicios(req:Request,res:Response):Promise<any>{
        return await pool.query('SELECT * FORM SERVICIOS WHERE ACTIVO = "S"');
    }

    /**
     * Modifica los servicios 
     * @param req resive un id como parametro 
     */
    public async updateServicio(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        if(this.existeSevicio(id)){
            await pool.query('UPDATE SERVICIOS SET ? WHERE ID_SERVICIOS = ?', [req.body, id]);
            res.json({ message: 'El servicio fue actualizado' });
        } 
        res.status(404).json({text: "No existe el Servicio"});
    }

    public async delecteServicio(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        if(this.existeSevicio(id)){
        await pool.query('UPDATE SERVICIOS SET ACTIVO = N WHERE ID_SERVICIO = ? ',[id])
        res.json({message:"Se desabilito el servicio "})
        }
        res.status(404).json({text: "no existe el SERVICIO"})
    } 


    //------------ metodos para el manejo de los servicios por tipo de vehiculos------

    public async createServicoVehiculo(req: Request,res: Response){
        const { idServicio } = req.params;
        const { idVehiculo } = req.params;
        if(this.existeSevicio(idServicio) && this.existeVehiculo(idVehiculo)){
            await pool.query('INSERT INTO SERVICIOS_VEHICULO  SET ?', [req.body]);
            res.json({message: 'El servicio vehiculo fue guardado con exito'});
        }else{
            res.status(404).json({text: "No existe el servicio o el vehiculo asegurese de que ambos existan"});
        }

    }

    public async updateServicioVehiculo(req: Request, res: Response){
        const { IDSERVICIOSVEHICULO } = req.params;
        if(this.exiteServicioVehiculo(IDSERVICIOSVEHICULO)){
            await pool.query('UPDATE SERVICIOS_VEHICULO SET ? WHERE ID_SERVICIOS_VEHICULO = ? ', [req.body,IDSERVICIOSVEHICULO]);
            res.json({message: 'El servicio vehiculo actualizado con exito'});
        }else{
            res.status(404).json({text: "No existe el servicioVehiculo"});
        }
    }

    public async deleteServicioVehiculo(req: Request, res: Response){
        const { IDSERVICIOSVEHICULO } = req.params;
        if(this.exiteServicioVehiculo(IDSERVICIOSVEHICULO)){
            await pool.query('UPDATE SERVICIOS_VEHICULO SET ACTIVO = N WHERE ID_SERVICIOS_VEHICULO = ? ', [req.body,IDSERVICIOSVEHICULO]);
            res.json({message: 'El servicio vehiculo fue desabilitado con exito'});
        }else{
            res.status(404).json({text: "No existe el servicioVehiculo"});
        }
    }


    //-------- metodos para el uso de los otros metodos s
    private async existeSevicio(servicio: string){
        const  id = await pool.query('SELECT ID_SERVICIOS FROM SERVICIOS WHERE ID_SERVICIOS = ? AND ACTIVO = S', [servicio]);
        if(id.length > 0){
            return true
        }
        return false
    }

    private async existeVehiculo(vehiculo:string){
        const id = await pool.query('SELECT ID_VEHICULO FROM TIPO_VEHICULO WHEREN ID_VEHICULO = ? AND ACTIVO = S', [vehiculo]);
        if(id.length > 0){
            return true
        }
        return false
    }
    private async exiteServicioVehiculo(serviciovehiculo: string){
        const id = await pool.query('SELECT ID_SERVICIOS_VEHICULO FROM SERVICIOS_VEHICULO WHEREN ID_SERVICIOS_VEHICULO = ? AND ACTIVO = S', [serviciovehiculo]);
        if(id.length > 0){
            return true
        }
        return false
    }
}

export const parametrizacionController = new ParametrizacionController();