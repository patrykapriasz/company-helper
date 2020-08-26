import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-delivery-panel',
  templateUrl: './delivery-panel.component.html',
  styleUrls: ['./delivery-panel.component.scss']
})
export class DeliveryPanelComponent implements OnInit {

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.deliveryService.getDelivery().subscribe((message)=>{
      console.log(message);
    })
  }

}
