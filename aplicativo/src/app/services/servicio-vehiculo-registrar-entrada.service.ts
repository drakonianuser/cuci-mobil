import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class servicioVehiculoRegistrarEntradaService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getOneClienteVehiculo(ID: number){
    return this.http.get(`${this.API_URI}/servicioVehiculo/${ID}`);
  }
}
