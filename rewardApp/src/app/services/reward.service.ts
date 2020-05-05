import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  constructor(private fDb: AngularFirestore, ) { }

  rewardsCheck( rewardCount:number, loginNumber:number){
    if(loginNumber == 2){
      
    }

  
  }
}
