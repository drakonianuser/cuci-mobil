import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {cliente} from '../models/cliente'
@Injectable({
  providedIn: 'root'
})
export class DescuentoService {


  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${this.API_URI}/descuento`);
  }  
}
