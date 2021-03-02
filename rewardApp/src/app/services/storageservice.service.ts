import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';


const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageserviceService {

  constructor() { }

  async storageControl(action, storagekey?,valueR?:any) {
    
    if (action == 'set'){
      return await Storage.set({
        key: storagekey,
        value: valueR
      });
    }
    if (action == 'get'){
      return await Storage.get({
        key: storagekey,
      });
    }
    if (action == 'delete'){
      if (!storagekey) {
        return await Storage.clear();
      }
      else {
        return await Storage.remove({
          key: storagekey, 
        });
      }
    }

  }

  async store( storageKey: string, value: any){

    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }
  async get(storageKey: string){
    const res = await Storage.get({key: storageKey});

    if(res.value){
      return JSON.parse(unescape(atob(res.value)));
    }else{
      return false;
    }
  }

  async removeItem(storageKey: string){
    await Storage.remove({key:storageKey});
  }

  async clear(){
    await Storage.clear();
  }
  
}
