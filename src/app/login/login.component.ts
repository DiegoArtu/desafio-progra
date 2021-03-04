import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DeveloperModel } from '../model/developer.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  developer = new DeveloperModel();

  constructor(
    private loginservice:LoginService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  save( form:NgForm ){

    if(form.invalid){
      console.log('formulario no valido');
      return;
    }

    this.loginservice.loginButton(this.developer). subscribe(resp => {
      let respuesta = resp;
      localStorage.setItem("token", JSON.stringify(respuesta))
      console.log(respuesta);

      if(!respuesta){
        return;
      } else{
        this.router.navigate(['/account/data']);
      }
      
    })

    console.log(form);
    console.log(this.developer);
  }

}
