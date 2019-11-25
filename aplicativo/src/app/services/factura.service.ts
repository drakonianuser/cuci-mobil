import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {factura} from '../models/factura';
import {facturaUpdate} from '../models/facturaUpdate';
@Injectable({
  providedIn: 'root'
})
export class FacturaService {


  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getOneFactura(ID: number){
    return this.http.get(`${this.API_URI}/factura/${ID}`); 
  }
  getAllFactura(){ 
    return this.http.get(`${this.API_URI}/factura`);

  }
  createFactura(factura: factura){
    return this.http.post(`${this.API_URI}/factura`,factura);
  }

  updateFactura(ID: number, factura: facturaUpdate){
    console.log(factura)
    return this.http.put(`${this.API_URI}/factura/${ID}`,factura)
  }

  deleteFactura(TURNO:string){
    return this.http.delete(`${this.API_URI}/factura/${TURNO}`);
  }
  getDisponible(PLACA:string){
    return this.http.get(`${this.API_URI}/factura/disponible/${PLACA}`)
  }
}
