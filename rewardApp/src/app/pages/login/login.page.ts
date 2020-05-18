import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertService } from 'src/app/services/alert.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData = {
    email:"",
    password:""
  };
  /* user email from ngOnit method - firebase */
  userEmail: string;
  
  
  constructor(private router:Router,
              private userServices:AuthService,
              private fireAuth: AngularFireAuth,
              private alert: AlertService) { }

  ngOnInit() {
    
    this.fireAuth.auth.onAuthStateChanged( user => {
      if (user) {
        this.userEmail = user.email;
        this.router.navigateByUrl(`/home/feed`);
      }
    })
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
  
  login(){
    if(this.validateinputs()){
      this.userServices.loginFire(this.userData.email, this.userData.password);
      this.userData.email ="";
      this.userData.password="";
    }else{
     
      this.alert.presentToast("Email/Senha","Email ou senha não informado");
    }
    
    }
}
