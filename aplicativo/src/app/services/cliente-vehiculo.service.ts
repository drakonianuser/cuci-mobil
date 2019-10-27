import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {clienteXVehiculo} from '../models/clienteXVehiculo'
@Injectable({
  providedIn: 'root'
})
export class ClienteVehiculoService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getOneCliente(ID: number){
    return this.http.get(`${this.API_URI}/clienteVehiculo/${ID}`);
  }

  createVehiculo(cliente: clienteXVehiculo){
    return this.http.post(`${this.API_URI}/clienteVehiculo`,cliente);
  }

  updateCliente(ID: number, cliente: clienteXVehiculo){
    return this.http.put(`${this.API_URI}/clienteVehiculo`,cliente)
  }
}
