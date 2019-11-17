import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DetalleFactura} from '../models/detalleFactura'
@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getAll(ID: number){
    return this.http.get(`${this.API_URI}/detalleFactura/${ID}`);
  }

  createDetalleFactura(detalleFactura: DetalleFactura){
    return this.http.post(`${this.API_URI}/detalleFactura`,detalleFactura);
  }
}
