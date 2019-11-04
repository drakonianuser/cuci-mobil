import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {cliente} from '../models/cliente'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getOneCliente(ID: number){
    return this.http.get(`${this.API_URI}/cliente/${ID}`);
  }

  createCliente(cliente: cliente){
    return this.http.post(`${this.API_URI}/cliente`,cliente);
  }

  updateCliente(ID: number, cliente: cliente){
    return this.http.put(`${this.API_URI}/cliente`,cliente)
  }
}
