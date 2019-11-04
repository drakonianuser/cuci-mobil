import express, {Application} from "express";
import morgan from 'morgan';
import cors from "cors";
import indexRoutes from "./routes/indexRoutes";
import usuariosRoutes from "./routes/usuarioRoutes";
import tipovehiculoRoutes from "./routes/tipoVehiculoRoutes";
import vehiculoRoutes from "./routes/vehiculoRoutes";
import clienteRoutes from "./routes/clienteRoutes";
import clienteVehiculoRoutes from "./routes/clienteVehiculoRoutes";
import servicioVehiculoRoutes from "./routes/servicioVehiculoRoutes";
class Server {
    public app: Application

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    //rutas
    routes(): void {
     this.app.use('/',indexRoutes); 
     this.app.use('/api/usuarios',usuariosRoutes)
     this.app.use('/api/tipoVehiculo', tipovehiculoRoutes)
     this.app.use('/api/vehiculo',vehiculoRoutes)
     this.app.use('/api/cliente',clienteRoutes)
     this.app.use('/api/clienteVehiculo',clienteVehiculoRoutes)
     this.app.use('/api/servicioVehiculo',servicioVehiculoRoutes)
        
    }
    
    //conecion  
    start():void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server en puerto', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();