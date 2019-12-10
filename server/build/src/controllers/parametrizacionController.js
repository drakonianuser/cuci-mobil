"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ParametrizacionController {
    //---------------metodos para el manejo de los decuentos------------
    async getOneDescuento(req, res) {
        const { ID } = req.params;
        const descuento = await database_1.default.query('SELECT * FROM DESCUENTOS WHERE ID_DESCUENTOS = ?', [ID]);
        if (descuento.length > 0) {
            return res.json(descuento);
        }
        res.status(404).json({ text: 'No hay descuento' });
    }
    async createDescuento(req, res) {
        await database_1.default.query('INSERT INTO DESCUENTOS VALUES ?', [req.body]);
        return res.json({ message: 'Se creo el descuento' });
    }
    async updateDescuento(req, res) {
        const { id } = req.params;
        await database_1.default.query('UPDATE DESCUENTOS set ? WHERE ID_DESCUENTOS = ?', [req.body, id]);
        res.json({ message: 'El descuento fue actualizado' });
    }
    async deleteDescuento(req, res) {
        const { id } = req.params;
        const existe = await database_1.default.query('SELECT ID_DESCUENTOS FROM DESCUENTOS WHERE ID_DESCUENTOS = ?', [id]);
        if (existe.length > 0) {
            await database_1.default.query('UPDATE DESCUENTOS SET ACTIVO = N WHERE ID_DESCUENTOS = ?', [id]);
            res.json({ message: 'El descuento fue eliminado' });
        }
        res.status(404).json({ text: "No existe el descuento" });
    }
    //---------------metodos para el manejo de los servicios-------------------
    /**
     * crear un servicio en la serviteca
     * @param req resive en formato json el servicio que se va a almacenar
     */
    async createServicio(req, res) {
        await database_1.default.query('INSERT INTO SERVICIOS set ?', [req.body]);
        return res.json({ message: 'Se creo el descuento' });
    }
    async getServicios(req, res) {
        return await database_1.default.query('SELECT * FORM SERVICIOS WHERE ACTIVO = "S"');
    }
    /**
     * Modifica los servicios
     * @param req resive un id como parametro
     */
    async updateServicio(req, res) {
        const { id } = req.params;
        if (this.existeSevicio(id)) {
            await database_1.default.query('UPDATE SERVICIOS SET ? WHERE ID_SERVICIOS = ?', [req.body, id]);
            res.json({ message: 'El servicio fue actualizado' });
        }
        res.status(404).json({ text: "No existe el Servicio" });
    }
    async delecteServicio(req, res) {
        const { id } = req.params;
        if (this.existeSevicio(id)) {
            await database_1.default.query('UPDATE SERVICIOS SET ACTIVO = N WHERE ID_SERVICIO = ? ', [id]);
            res.json({ message: "Se desabilito el servicio " });
        }
        res.status(404).json({ text: "no existe el SERVICIO" });
    }
    //------------ metodos para el manejo de los servicios por tipo de vehiculos------
    async createServicoVehiculo(req, res) {
        const { idServicio } = req.params;
        const { idVehiculo } = req.params;
        if (this.existeSevicio(idServicio) && this.existeVehiculo(idVehiculo)) {
            await database_1.default.query('INSERT INTO SERVICIOS_VEHICULO  SET ?', [req.body]);
            res.json({ message: 'El servicio vehiculo fue guardado con exito' });
        }
        else {
            res.status(404).json({ text: "No existe el servicio o el vehiculo asegurese de que ambos existan" });
        }
    }
    async updateServicioVehiculo(req, res) {
        const { IDSERVICIOSVEHICULO } = req.params;
        if (this.exiteServicioVehiculo(IDSERVICIOSVEHICULO)) {
            await database_1.default.query('UPDATE SERVICIOS_VEHICULO SET ? WHERE ID_SERVICIOS_VEHICULO = ? ', [req.body, IDSERVICIOSVEHICULO]);
            res.json({ message: 'El servicio vehiculo actualizado con exito' });
        }
        else {
            res.status(404).json({ text: "No existe el servicioVehiculo" });
        }
    }
    async deleteServicioVehiculo(req, res) {
        const { IDSERVICIOSVEHICULO } = req.params;
        if (this.exiteServicioVehiculo(IDSERVICIOSVEHICULO)) {
            await database_1.default.query('UPDATE SERVICIOS_VEHICULO SET ACTIVO = N WHERE ID_SERVICIOS_VEHICULO = ? ', [req.body, IDSERVICIOSVEHICULO]);
            res.json({ message: 'El servicio vehiculo fue desabilitado con exito' });
        }
        else {
            res.status(404).json({ text: "No existe el servicioVehiculo" });
        }
    }
    //-------- metodos para el uso de los otros metodos s
    async existeSevicio(servicio) {
        const id = await database_1.default.query('SELECT ID_SERVICIOS FROM SERVICIOS WHERE ID_SERVICIOS = ? AND ACTIVO = S', [servicio]);
        if (id.length > 0) {
            return true;
        }
        return false;
    }
    async existeVehiculo(vehiculo) {
        const id = await database_1.default.query('SELECT ID_VEHICULO FROM TIPO_VEHICULO WHEREN ID_VEHICULO = ? AND ACTIVO = S', [vehiculo]);
        if (id.length > 0) {
            return true;
        }
        return false;
    }
    async exiteServicioVehiculo(serviciovehiculo) {
        const id = await database_1.default.query('SELECT ID_SERVICIOS_VEHICULO FROM SERVICIOS_VEHICULO WHEREN ID_SERVICIOS_VEHICULO = ? AND ACTIVO = S', [serviciovehiculo]);
        if (id.length > 0) {
            return true;
        }
        return false;
    }
}
exports.parametrizacionController = new ParametrizacionController();
