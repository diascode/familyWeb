
import { Injectable, ɵConsole } from '@angular/core';
import {  AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';



import { AngularFirestore } from 'angularfire2/firestore';
import { StorageserviceService } from './storageservice.service';
import { AuthConstant } from './../config/auth-constant';
import { AlertService } from './alert.service';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: any;
  userEmail: any;

  constructor(private fireAuth:AngularFireAuth,
    private router: Router,
    private fDb: AngularFirestore,
    private storage: StorageserviceService,
    private alert: AlertService) { }

  async loginFire(email,password){

      
        const result = this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    
        .then( res => {
          if(res.user){
            this.storage.store(AuthConstant.AUTH, res)
            this.router.navigateByUrl(`/home`)
            console.log(res)
          }
         
        })
        .catch( err => this.alert.presentAlert("Erro!", "Usuário não encotrado, Verifique seu email e senha"))

    
}

currentUser(){

  return this.userEmail = this.fireAuth.auth.onAuthStateChanged( user => {
    if (user) {
      console.log(user.email);
      this.userEmail = user.email.toString;
    }
  })
 
}

saveUserData(email){
  let userObj = {
    creation: new Date().toDateString(),
    logins: 1,
    rewardCount: 0,
    lastLogin: new Date().toLocaleString(),
    id: ''
  }
  this.fDb.collection('User').doc('details').set({
    userName : email,
    creation: userObj.creation,
    logins: userObj.logins,
    rewardCount: userObj.rewardCount,
    lastLogin: userObj.lastLogin

  })
  .then(res => {
    return this.alert.presentToast('Dados','Dados salvo');
  });
  return console.log('Dados Firebase');
}

registerFire(email,password){
 
    this.fireAuth.auth.createUserWithEmailAndPassword(email,password)
    .then( res => {
      this.saveUserData(email);
      this.loginFire(email,password)
        .then(res => {
          this.fireAuth.auth.onAuthStateChanged( user => {
            if (user) {
              this.userEmail = user.email;
              this.alert.presentToast("Usuário Registrado", this.userEmail);
              
            }
  
          })
          
        })
    })
    .catch( err => this.alert.presentAlert("Erro!", err));
}


async logOutFire(){
  console.log("signout")
  this.fireAuth.auth.signOut()
  .then(res => {
    console.log(res)
   
    this.alert.presentAlert("Obrigado", "Volte Sempre")
    this.storage.removeItem(AuthConstant.AUTH).then(res =>{
      this.router.navigateByUrl('')
    })
  })
  .then(res => this.router.navigateByUrl(`/home/feed`))   
  .catch(err => this.alert.presentAlert('err', err));
  
}
}
