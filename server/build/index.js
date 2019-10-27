"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const tipoVehiculoRoutes_1 = __importDefault(require("./routes/tipoVehiculoRoutes"));
const vehiculoRoutes_1 = __importDefault(require("./routes/vehiculoRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const clienteVehiculoRoutes_1 = __importDefault(require("./routes/clienteVehiculoRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //rutas
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/usuarios', usuarioRoutes_1.default);
        this.app.use('/api/tipoVehiculo', tipoVehiculoRoutes_1.default);
        this.app.use('/api/vehiculo', vehiculoRoutes_1.default);
        this.app.use('/api/cliente', clienteRoutes_1.default);
        this.app.use('/api/clienteVehiculo', clienteVehiculoRoutes_1.default);
    }
    //conecion 
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
