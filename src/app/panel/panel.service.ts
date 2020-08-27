import { Injectable } from '@angular/core';
import { SocketService } from '../socket.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PanelService {

  eventName: String;

  constructor(private socketService:SocketService){}

  getDelivery(){
    return Observable.create(observator => {
      this.socketService.socket.on(this.eventName, (response) =>{
        observator.next(response)
      })
    })
  }
}
