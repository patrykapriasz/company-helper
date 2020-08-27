import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openDelivery() {
    this.router.navigate(['delivery']);
  }

}
