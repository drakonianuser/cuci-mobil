import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {} from '../models/descuentos'
@Injectable({
  providedIn: 'root'
})
export class ParametrizacionService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  createDescuento() {
    return this.http.get(`${this.API_URI}/parametrizacion/${ID}`);
  }


// this.router.post('/parametrizacion/createDescuento', parametrizacionController.createDescuento);
// this.router.put('/parametrizacion/updateDescuento/:id', parametrizacionController.updateDescuento);
// this.router.delete('/parametrizacion/deleteDescuento/:id', parametrizacionController.deleteDescuento)

// this.router.post('/parametrizacion/createServicio', parametrizacionController.createServicio);
// this.router.put('/parametrizacion/updateServicio/:id', parametrizacionController.updateServicio);
// this.router.delete('/parametrizacion/delecteServicio', parametrizacionController.delecteServicio);

// this.router.post('/parametrizacion/createServicioVehiculo/:idServicio/:idVehiculo', parametrizacionController.createServicoVehiculo);
// this.router.put('/parametrizacion/updateServicioVehiculo/:IDSERVICIOSVEHICULO', parametrizacionController.updateServicio);
// this.router.delete('/parametrizacion/updateServicioVehiculo/:IDSERVICIOSVEHICULO', parametrizacionController.updateServicio);
}
