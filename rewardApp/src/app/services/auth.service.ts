
import { Injectable, ɵConsole } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';



import { AngularFirestore } from 'angularfire2/firestore';
import { StorageserviceService } from './storageservice.service';
import { AuthConstant } from './../config/auth-constant';
import { AlertService } from './alert.service';
import { BehaviorSubject } from 'rxjs';
import { RewardService } from './reward.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject('');
  userEmail: any;

  constructor(private fireAuth: AngularFireAuth,
              private router: Router,
              private fDb: AngularFirestore,
              private storage: StorageserviceService,
              private alert: AlertService, 
              private reward: RewardService) { }

  getUserData() {
    return this.storage.get(AuthConstant.AUTH)
      .then(res => {
        this.userData.next(res);
      });
  }

  async loginFire(email, password) {


    return this.fireAuth.auth.signInWithEmailAndPassword(email, password)

     .then(result => {
        console.log('login');
        // user guard promise for testing as saveUserData not working
        this.storage.store(AuthConstant.AUTH, result);
        this.storage.storageControl('get', email)
          .then(returned => {
            console.log('returned', result);
            if (!returned) {
              this.saveUserData(email)
                .then(res => this.alert.presentToast(email, 'New account saved for this user'));
            } else {
             // this.reward.rewardsCheck( user, returned )
              //.then( rewardResult => {    

             this.updateUser(email, returned)
              .then(updated => console.log(email, updated))
              .catch(err => console.log(err));

              // })
            }
          });


        return result;
      })
      .catch(err => {

        this.alert.presentAlert('Error logging in', err);
        return err;
      });
   /* .then(res => {
        console.log('firebase promise', res)
        this.storage.store(AuthConstant.AUTH, res)
        this.storage.storageControl('get', email)
          .then(returned => {
            if (!returned) {
              this.saveUserData(email)
                .then(res => {
                  this.alert.presentToast(email, 'Nova conta salva para esse usuario')
                  this.router.navigateByUrl(`/home`)
                  console.log(res)
                });
            } else {
              this.updateUser(email, returned)
                .then(updated => {
                  console.log(email, updated)
                  this.alert.presentToast(email, 'Benvindo Novamente');
                  this.router.navigateByUrl(`/home`);
                }).catch( err => console.log('err: ', err));
            }
          });
      })
      .catch(err => {
        this.alert.presentAlert('Erro!', 'Usuário não encotrado, Verifique seu email e senha')
        this.alert.presentToast('Erro', err)
      });*/

  }

  currentUser() {

    return this.userEmail = this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user.email);
        this.userEmail = user.email.toString;
      }
    });

  }

  saveUserData(email) {
    console.log('save');
    const userObj = {
      creation: new Date().toDateString(),
      logins: 1,
      rewardCount: 0,
      lastLogin: new Date().toLocaleString(),
      id: ''
    };
    
    this.fDb.collection('User').doc('details').set({
      userName: email,
      creation: userObj.creation,
      logins: userObj.logins,
      rewardCount: userObj.rewardCount,
      lastLogin: userObj.lastLogin

    })
      .then(res => {
        this.alert.presentToast('Dados', 'Dados salvo');
        console.log('saveObj', userObj);
        return this.storage.storageControl('set', email, userObj);
      });
    console.log('save');
    return this.storage.storageControl('get', email);
}

  updateUser(theUser, theUserData) {
    var data = theUserData;
    console.log('data', data);
    let newData = {
      creation: theUserData.creation,
      logins: theUserData.logins,
      rewardCount: theUserData.rewardCount,
      lastLogin: new Date().toLocaleString(),
      
    }
    this.fDb.collection('User').doc('details').update( {
      userName: theUser,
      logins: newData.lastLogin + 1,
      rewardCount: 0,
      lastLogin: new Date().toLocaleString(),

    })
.then(res => {
    this.alert.presentToast('Dados', 'Dados atualizados');
    console.log('newData', newData);
    console.log('res', res);
    return this.storage.storageControl('set', theUser, newData);
    
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.log('Error updating document: ', error);
});
    return this.storage.storageControl('get', theUser);
  }

  registerFire(email, password) {

    this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.saveUserData(email);
        this.loginFire(email, password)
          .then(res => {
            this.fireAuth.auth.onAuthStateChanged(user => {
              if (user) {
                this.userEmail = user.email;
                this.alert.presentToast('Usuário Registrado', this.userEmail);

              }

            });

          });
      })
      .catch(err => this.alert.presentAlert('Erro!', err));
  }


  async logOutFire() {
    console.log('signout');
    this.fireAuth.auth.signOut()
      .then(res => {
        console.log(res);

        this.alert.presentAlert('Obrigado', 'Volte Sempre');
        this.storage.removeItem(AuthConstant.AUTH).then(res => {
          this.router.navigateByUrl('');
          this.userData.next('');
        });
      })
      .then(res => this.router.navigateByUrl(`/home/feed`))
      .catch(err => this.alert.presentAlert('err', err));
    this.storage.clear().then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }
}
