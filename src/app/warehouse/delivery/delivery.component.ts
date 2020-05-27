import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  transport: String;

  constructor(private warehouseService: WarehouseService) { }

  addNewDelivery(form: NgForm) {

  }

  ngOnInit(): void {
  }

}
