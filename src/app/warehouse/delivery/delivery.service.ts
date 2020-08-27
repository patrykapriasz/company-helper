import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Delivery } from './delivery.model';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { SocketService } from 'src/app/socket.service';


@Injectable({providedIn: 'root'})
export class DeliveryService {

  private delivery: Delivery;
  private deliveries: Delivery[];

  private deliveryUpdated = new Subject<Delivery>();
  private deliveriesUpdadet = new Subject<Delivery[]>();

  constructor(private http:HttpClient, private socket: SocketService) {

  }

  addNewDelivery(delivery: Delivery) {
    console.log(delivery);
    this.http.post<{message: String, content: Delivery}>(environment.apiUrl+'/deliveries/add', delivery).subscribe(result=> {
      this.delivery = result.content;
      this.deliveries.push(this.delivery);
      this.deliveriesUpdadet.next([...this.deliveries]);
      this.addDelivery();
    })
  }

  addDelivery() {
    var ws = this.socket.socket;
    console.log(ws);
    ws.emit('addDelivery',{message:'dostawa'});
  }

  getDelivery() {
    return Observable.create(observator => {
      this.socket.socket.on('delivery', (delivery)=>{
        observator.next(delivery);
      });
    })
  }

  getUpdaterDelivery() {
    return this.deliveryUpdated.asObservable();
  }

  getUpdatedDeliveries() {
    return this.deliveriesUpdadet.asObservable();
  }
}
