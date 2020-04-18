import { Component, OnInit } from '@angular/core';
import { FirebaseAuth } from 'angularfire2';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userEmail: string;

  constructor(private auth: AuthService,
              private fireAuth: AngularFireAuth,
              private route: Router) { }

  ngOnInit() {
    
    this.fireAuth.auth.onAuthStateChanged( user => {
      if (user) {
        console.log(user.email);
        this.userEmail = user.email;
      }else{
        this.route.navigateByUrl(`/login`);
      }
    })
    
  }



}
