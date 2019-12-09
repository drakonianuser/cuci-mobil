import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { descuentos } from '../models/descuentos'
import { servicios } from '../models/servicios';
import { servicioVehiculoRegistrarEntrada } from '../models/servicioVehiculoRegistrarEntrada';

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

  //---- servicios
  getServicios(){
    return this.http.get(`${this.API_URI}/getServicios`);
  }

  createServicio(servicio: servicios){
    return this.http.post(`${this.API_URI}/createServicio`,servicio)
  }

  updateServicio(ID:number , servicio: servicios){
    return this.http.put(`${this.API_URI}/updateServicio/${ID}`,servicio)
  }

  delecteServicio(ID: number){
    return this.http.delete(`${this.API_URI}/delecteServicio/${ID}`)
  }

  //----Servicios vehiculo 
  createServicioVehiculo(idServicio: number, idVehiculo: number ,serviVehicul: servicioVehiculoRegistrarEntrada){
    return this.http.post(`${this.API_URI}/createServicioVehiculo/${idServicio}/${idVehiculo}`,serviVehicul)
  }

  updateServicioVehiculo(IDSERVICIOSVEHICULO: number,serviVehicul: servicioVehiculoRegistrarEntrada ){
    return this.http.put(`${this.API_URI}/updateServicioVehiculo/${IDSERVICIOSVEHICULO}`,serviVehicul)
  }

  delecteServicioVehiculo(IDSERVICIOSVEHICULO: number){
    return this.http.delete(`${this.API_URI}/delecteServicioVehiculo/${IDSERVICIOSVEHICULO}`)
  }
}
 