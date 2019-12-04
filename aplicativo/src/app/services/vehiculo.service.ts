import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{vehiculo} from '../models/vehiculo'; 
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getOneVehiculo(PLACA: string){
    return this.http.get(`${this.API_URI}/vehiculo/${PLACA}`);
  }

  createVehiculo(vehiculo: vehiculo){
    return this.http.post(`${this.API_URI}/vehiculo`,vehiculo);
  }
}
