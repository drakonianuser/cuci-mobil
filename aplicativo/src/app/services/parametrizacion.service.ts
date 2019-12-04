import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { descuentos } from '../models/descuentos'
@Injectable({
  providedIn: 'root'
})


export class ParametrizacionService {
  API_URI = 'http://localhost:3000/api/parametrizacion';
  constructor(private http: HttpClient) { }

  //----Descuentos----

  createDescuento(descuentos: descuentos) {
    return this.http.post(`${this.API_URI}/createDescuento`,descuentos);
  }

  updateDescuento(ID: number,descuento: descuentos){
    return this.http.put(`${this.API_URI}/updateDescuento/${ID}`,descuento)
  }

  deleteDescuento(ID: number){
    return this.http.delete(`${this.API_URI}/deleteDescuento/${ID}`)
  }



// this.router.post('/parametrizacion/createServicio', parametrizacionController.createServicio);
// this.router.put('/parametrizacion/updateServicio/:id', parametrizacionController.updateServicio);
// this.router.delete('/parametrizacion/delecteServicio', parametrizacionController.delecteServicio);

// this.router.post('/parametrizacion/createServicioVehiculo/:idServicio/:idVehiculo', parametrizacionController.createServicoVehiculo);
// this.router.put('/parametrizacion/updateServicioVehiculo/:IDSERVICIOSVEHICULO', parametrizacionController.updateServicio);
// this.router.delete('/parametrizacion/updateServicioVehiculo/:IDSERVICIOSVEHICULO', parametrizacionController.updateServicio);
}
