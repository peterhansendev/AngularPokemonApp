import { Injectable } from '@angular/core';
import { StorageKeys } from '../../enums/storage-keys.enum';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from 'src/utils/storage.util'; 

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer: Trainer | undefined; //Alternative syntax instead of undefined: _trainer?: Trainer;
  
  
  public get trainer() : Trainer | undefined {
    return this._trainer;
  }

  
  public set trainer(aTrainer : Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, aTrainer!) //The exclamation mark says: aTrainer will never be undefined...
    this._trainer = aTrainer;
  }
  
  

  constructor() {

    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer); 
    
   }
}
