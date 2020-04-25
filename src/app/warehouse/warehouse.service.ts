import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Warehouse } from './warehouse.model';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class WarehouseService {

  private warehouse: Warehouse[];
  private updatedWarehouse = new Subject<Warehouse[]>();

  constructor(private http: HttpClient){}

  getAllWarehouse() {
    this.http.get<{message: string, content: Warehouse[]}>(environment.apiUrl+'/warehouses').subscribe(result => {
      this.warehouse = result.content;
      this.updatedWarehouse.next([...this.warehouse]);
    });
  };

  getWarehouseByProduct(productId: number) {
    this.http.get<{message: string, content: Warehouse[]}>(environment.apiUrl+'/warehouses/'+productId).subscribe(result => {
      console.log(result);
      this.warehouse = result.content;
      this.updatedWarehouse.next([...this.warehouse]);
    })
  }

  getWarehouseUpdated() {
    return this.updatedWarehouse.asObservable();
  }


}
