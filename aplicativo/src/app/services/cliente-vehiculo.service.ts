import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {clienteXVehiculo} from '../models/clienteXVehiculo'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClienteVehiculoService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getOneClienteVehiculo(ID: number){
    return this.http.get(`${this.API_URI}/clienteVehiculo/${ID}`);
  }

  createClienteVehiculo(cliente: clienteXVehiculo){
    return this.http.post(`${this.API_URI}/clienteVehiculo`,cliente)
  }

  updateClienteVehiculo(ID: number, cliente: clienteXVehiculo){
    return this.http.put(`${this.API_URI}/clienteVehiculo/${ID}`,cliente)
  }
}
