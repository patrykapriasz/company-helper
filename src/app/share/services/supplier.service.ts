import { HttpClient } from '@angular/common/http';
import { Supplier } from '../models/supplier.model';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SupplierService {

  private suppliers: Supplier[];
  private suppliersUpdated = new Subject<Supplier[]>();

  constructor(private http: HttpClient) {}

  getSuppliersByProduct(productId: number) {
    this.http.get<{message: String, content: any[]}>(environment.apiUrl+'/suppliers/by-product/'+productId).subscribe(result => {
      let res = result.content.map(a => a.supplier)
      this.suppliers = res;
      this.suppliersUpdated.next([...this.suppliers])
    })
  }

  getUpdatedSuppliers() {
    return this.suppliersUpdated.asObservable();
  }
}
