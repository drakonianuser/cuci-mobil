import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Fechas } from '../models/fechas'
@Injectable({
  providedIn: 'root'
})
export class reportesServices{
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getNombre(fechaInicio: number){
    return this.http.get(`${this.API_URI}/reportes/${fechaInicio}`);
  }
}