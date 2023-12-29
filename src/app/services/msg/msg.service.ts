import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  private msgServiceSubject = new BehaviorSubject<string>('');

  getUpdateMenssage(){
    return this.msgServiceSubject.asObservable();
  }

  setUpdateMessage(message: string){
    this.msgServiceSubject.next(message);
  }

  constructor() { }
}
