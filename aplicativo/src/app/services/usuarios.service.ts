import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getOneUser(USUARIO: string){
    return this.http.get(`${this.API_URI}/usuarios/${USUARIO}`);
    
  }
}
