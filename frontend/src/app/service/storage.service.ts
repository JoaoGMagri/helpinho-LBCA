import { Injectable, signal } from '@angular/core';
import { objUser } from '../types/objUser-type';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  contain = localStorage.getItem("user") as string;
  status = signal<Boolean>(!!this.contain);
  userObj = signal<objUser>(JSON.parse(this.contain));

  saveStorage(data:any){
    localStorage.setItem("user", JSON.stringify(data));
    this.status.set(true);
    this.userObj.set(data);
  }

  clearStorage(){
    localStorage.clear();
    this.status.set(false);
  }
  
}
