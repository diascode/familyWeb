import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  userData = {
    email:"",
    password:""
  };
 

  constructor(private userServices: AuthService,
              private alert: AlertService          
    ) { }

  ngOnInit() {
  }

  validateinputs(){
    let username = this.userData.email.trim();
    let password = this.userData.password.trim();

    console.log( username, password);
    return (
        this.userData.email &&
        this.userData.password &&
        username.length>0 &&
        password.length>0);
  }

  signUp(){
    if(this.validateinputs()){
      this.userServices.registerFire(this.userData.email, this.userData.password);
      this.userData.email ="";
      this.userData.password="";
    }else{
     
      this.alert.presentToast("Email/Senha","Email ou senha não informado");
    }
    
    }
}
