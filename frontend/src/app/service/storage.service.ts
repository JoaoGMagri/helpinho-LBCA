import { Injectable, signal } from '@angular/core';
import { objUser } from '../types/objUser-type';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private contain = localStorage.getItem("user") as string;
  status = signal<Boolean>(!!this.contain);
  userObj = signal<objUser>(JSON.parse(this.contain));

  saveStorage(data:any){
    localStorage.clear();
    localStorage.setItem("user", JSON.stringify(data));
    this.status.set(true);
  }

  clearStorage(){
    localStorage.clear();
    this.status.set(false);
  }
  
}
