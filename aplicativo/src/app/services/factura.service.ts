import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {factura} from '../models/factura';
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

  updateFactura(ID: number, factura: factura){
    return this.http.put(`${this.API_URI}/factura/${ID}`,factura)
  }

  deleteFactura(ID:number){
    return this.http.get(`${this.API_URI}/factura/${ID}`);

  }
}
