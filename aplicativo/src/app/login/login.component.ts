import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../services/usuarios.service';
import {usuario} from '../models/usuarios';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createFormGroup(){

    return new FormGroup({
      
      user: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      boton: new FormControl('')

    });

  }

  contactForm: FormGroup;
  constructor(private userService: UsuariosService, private router: Router) {

    this.contactForm = this.createFormGroup();

   }
  usuario: usuario = {
    idUSUARIOS: null,
    USUARIO: '',
    PASSWORD: ''
  }
  borrar: number;
  usuarioObtenido: any = [];
  ngOnInit() {
    if(this.borrar==2){
    }else{
      localStorage.removeItem('usuario')
    }
  }
  validacion(valid){

    return valid

  }
  login(){
    this.userService.getOneUser(this.usuario.USUARIO)
      .subscribe(
        res => {
          this.usuarioObtenido = res;
          if(this.usuarioObtenido.PASSWORD == this.usuario.PASSWORD){
            this.router.navigateByUrl('/registroVehiculo')
            localStorage.setItem('usuario', JSON.stringify(this.usuarioObtenido))
            var usuarioS = JSON.parse(localStorage.getItem('usuario'))

            this.validacion
            return "Se logea"

          }else{ 
            alert("Credenciales invalidas")
          }
        },
        err=>{
          alert("Credenciales invalidas")
        }
      )
  }
  onResetForm(){

    this.contactForm.reset();

  }
  onSaveForm(){
    if(this.contactForm.valid){
      this.onResetForm();
    }else{
      console.log("Error")

    }
  }

  get user(){return this.contactForm.get('user');}
  get password(){return this.contactForm.get('password');}
  get boton(){return this.contactForm.get('boton')}

}
