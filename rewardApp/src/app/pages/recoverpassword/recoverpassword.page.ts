import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.page.html',
  styleUrls: ['./recoverpassword.page.scss'],
})
export class RecoverpasswordPage implements OnInit {

  userData = {
    email:"",
    password:""
  };

  constructor(private router:Router,
    private userServices:AuthService,
    private fireAuth: AngularFireAuth,
    private alert: AlertService) { }

  ngOnInit() {
  }

  validateinputs(){
    let username = this.userData.email.trim();
    

    console.log( username);
    return (
        this.userData.email &&
        username.length>0 );
  }
  
  recoverPass(){

  }
}
