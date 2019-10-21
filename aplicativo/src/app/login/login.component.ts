import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../services/usuarios.service';
import {usuario} from '../models/usuarios';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsuariosService, private router: Router) { }
  usuario: usuario = {
    idUSUARIOS: 0,
    USUARIO: '',
    PASSWORD: ''
  }

  usuarioObtenido: any = [];
  ngOnInit() {
  }

  login(){
    this.userService.getOneUser(this.usuario.USUARIO)
      .subscribe(
        res => {
          this.usuarioObtenido = res;
          console.log(this.usuarioObtenido)
          if(this.usuarioObtenido.PASSWORD == this.usuario.PASSWORD){
            this.router.navigateByUrl('/registroVehiculo')
          }else{
            console.log("Credenciales invalidas")
          }
        }
      )
  }

}
